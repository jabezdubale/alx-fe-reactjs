import axios from "axios";

export const fetchUserData = async (userName) => {
  const url = `https://api.github.com/users/${userName}`;
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.error("There is an error fetching user: ", err);
    throw err;
  }
};
