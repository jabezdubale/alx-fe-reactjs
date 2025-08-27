import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  return <div>Blog Content for ID: {id}</div>;
};

export default BlogPost;
