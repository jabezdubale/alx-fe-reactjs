import { render, screen, fireEvent, within } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList - Initial Render", () => {
  test("renders the TodoList component correctly", () => {
    render(<TodoList />);
    expect(
      screen.getByRole("heading", { name: /todo list/i })
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/enter a new todo/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });

  test("renders initial demo todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Profit 🚀")).toBeInTheDocument();

    const list = screen.getByRole("list");
    const { getAllByRole } = within(list);
    expect(getAllByRole("listitem")).toHaveLength(3);
  });
});

describe("TodoList - Add, Toggle, Delete", () => {
  test("adds a new todo (using fireEvent for input + submission)", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText(/enter a new todo/i);
    const addButton = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "Buy milk" } });

    fireEvent.click(addButton);

    expect(screen.getByText("Buy milk")).toBeInTheDocument();
    const list = screen.getByRole("list");
    const { getAllByRole } = within(list);
    expect(getAllByRole("listitem")).toHaveLength(4);
  });

  test("toggles a todo item between completed and not completed", () => {
    render(<TodoList />);

    const learnReact = screen.getByText("Learn React");

    expect(learnReact).toHaveStyle("text-decoration: none");

    fireEvent.click(learnReact);
    expect(learnReact).toHaveStyle("text-decoration: line-through");

    fireEvent.click(learnReact);
    expect(learnReact).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo item", () => {
    render(<TodoList />);
    const profitItem = screen.getByText("Profit 🚀").closest("li");
    expect(profitItem).toBeInTheDocument();

    const deleteButton = within(profitItem).getByRole("button", {
      name: /delete/i,
    });
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Profit 🚀")).not.toBeInTheDocument();

    const list = screen.getByRole("list");
    const { getAllByRole } = within(list);
    expect(getAllByRole("listitem")).toHaveLength(2);
  });
});
