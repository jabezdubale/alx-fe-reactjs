import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <div>
      <h3>Profile</h3>
      <nav>
        <Link to=".">Details</Link>
        {" | "}
        <Link to="settings">Settings</Link>
      </nav>

      <Routes>
        <Route index element={<ProfileDetails />} />
        <Route path="/settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
