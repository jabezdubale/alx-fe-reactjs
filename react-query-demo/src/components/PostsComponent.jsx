import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error("Network error");
  return res.json();
};

export default function PostsComponent() {
  const [postId, setPostId] = useState(1);

  const { data, error, isError, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => fetchPost(postId),
    staleTime: 5 * 1000,
    keepPreviousData: true,
    cacheTime: 60 * 1000,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <p>Loading…</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>

      <p>{isFetching ? "Updating…" : "Idle"}</p>

      <div>
        <button onClick={() => setPostId((id) => Math.max(1, id - 1))}>
          Prev
        </button>
        <span> Current ID: {postId} </span>
        <button onClick={() => setPostId((id) => Math.min(100, id + 1))}>
          Next
        </button>
      </div>

      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refreshing…" : "Refetch"}
      </button>
    </div>
  );
}
