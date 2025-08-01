import useGithubUserStore from "../stores/githubUserStore";
import { fetchUserData } from "../services/githubService";
import { useState } from "react";
const apikey = import.meta.env.VITE_APP_GITHUB_API_KEY;

const Search = () => {
  const [userName, setUserName] = useState("");
  const [repoNumber, setRepoNumber] = useState(0);
  const [location, setLocation] = useState("");
  const users = useGithubUserStore((state) => state.users);
  const setUsers = useGithubUserStore((state) => state.setUsers);
  const [loading, setLoading] = useState(false);
  //   &&

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!userName.trim()) return;
    try {
      const userData = await fetchUserData(userName, location, repoNumber);
      userData.items.map((element) => setUsers(element));
      setRepoNumber(0);
      setLocation("");
    } catch (error) {
      console.error("Looks like we cant find the user: ", error);
    }

    setUserName("");
    setRepoNumber(0);
    setLocation("");
    setLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSearch}
        className="border-solid border-2 border-gray"
      >
        <div>
          <label htmlFor="userName">Github username </label>
          <input
            id="userName"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="border-solid border-2 border-gray"
          />
        </div>
        <div>
          <label htmlFor="repoNumber">User # of repo {">"}= </label>
          <input
            id="repoNumber"
            type="text"
            value={repoNumber ? repoNumber : ""}
            onChange={(e) => setRepoNumber(e.target.value)}
            className="border-solid border-2 border-gray"
          />
        </div>
        <div>
          <label htmlFor="location">User location </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border-solid border-2 border-gray"
          />
        </div>
        <div>
          <button type="submit" className="border-solid border-2 border-gray">
            Search
          </button>
        </div>
      </form>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {users.map((user) => {
            return (
              <div
                key={user.id}
                style={{ border: "1px solid gray", marginTop: "10px" }}
              >
                <img
                  src={user.avatar_url}
                  style={{
                    width: "40%",
                  }}
                />
                <h3>
                  Name: {user.name} {<br />}
                  Github username: {user.login} {<br />}
                  Github repos: {user.public_repos} {<br />}
                  location: {user.location} {<br />}
                  <a href={user.html_url}>Github link</a>
                </h3>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Search;
