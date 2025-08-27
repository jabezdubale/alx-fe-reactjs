import { Outlet, Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h3>Profile</h3>
      <nav>
        <Link to="/">Details</Link>
        {" | "}
        <Link to="settings">Settings</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default Profile;
