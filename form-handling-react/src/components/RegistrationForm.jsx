import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.length === 0) {
      alert("User Name can not be empty");
      return;
    } else if (email.length === 0) {
      alert("Email can not be empty");
      return;
    } else if (password.length === 0) {
      alert("Password can not be empty");
      return;
    } else {
      setUserName("");
      setEmail("");
      setPassword("");

      console.log("Submit has been handled");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="User Name"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
