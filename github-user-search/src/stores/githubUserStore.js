import { create } from "zustand";

const useGithubUserStore = create((set) => ({
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
  users: [],
  setUsers: (newUser) => set((state) => ({ users: [newUser, ...state.users] })),
}));

export default useGithubUserStore;
