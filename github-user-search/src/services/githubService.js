import axios from "axios";

export const fetchUserData = async (userName, location, repoNumber) => {
  //   const url = `https://api.github.com/users/${userName}`;
  const url = `https://api.github.com/search/users?q=${userName}+location:${location}+repos:>=${repoNumber}`;
  try {
    const res = await axios.get(url);
    console.log(url);
    return res.data;
  } catch (err) {
    console.error("There is an error fetching user: ", err);
    throw err;
  }
};
