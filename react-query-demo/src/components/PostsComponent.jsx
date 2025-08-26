import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/5");
  return res.json();
};

const PostsComponent = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: fetchPosts,
  });

  if (isLoading) return "Loading...";
  if (isError) return "An error has occurred: " + isError.message;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

export default PostsComponent;
