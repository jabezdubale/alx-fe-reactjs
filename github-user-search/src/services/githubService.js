import axios from "axios";

export const fetchUserData = async (userName, location, minRepos) => {
  const url = `https://api.github.com/search/users?q=${userName}+location:${location}+repos:>=${minRepos}`;
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.error("There is an error fetching user: ", err);
    throw err;
  }
};
