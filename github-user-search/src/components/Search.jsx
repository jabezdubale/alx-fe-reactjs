import useGithubUserStore from "../stores/githubUserStore";
import { fetchUserData } from "../services/githubService";
import { useState } from "react";
const apikey = import.meta.env.VITE_APP_GITHUB_API_KEY;

const Search = () => {
  const userName = useGithubUserStore((state) => state.searchTerm);
  const setUserName = useGithubUserStore((state) => state.setSearchTerm);
  const users = useGithubUserStore((state) => state.users);
  const setUsers = useGithubUserStore((state) => state.setUsers);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!userName.trim()) return;
    try {
      const userData = await fetchUserData(userName);

      setUsers(userData);
    } catch (error) {
      console.error("Looks like we cant find the user: ", error);
    }

    setUserName("");
    setLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search Github UserName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {loading ? (
        <div>Loading</div>
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
                  {user.name} {<br />}
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
