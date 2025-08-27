import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { blogId } = useParams();
  return <div>Blog Content for ID: {blogId}</div>;
};

export default BlogPost;
