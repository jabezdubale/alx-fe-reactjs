const apikey = import.meta.env.VITE_APP_GITHUB_API_KEY;
const Home = () => {
  console.log(apikey);
  return <div>Home</div>;
};

export default Home;
