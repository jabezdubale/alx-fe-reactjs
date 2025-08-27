// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";

import UserProfile from "./components/UserProfile";
import BlogPost from "./components/BlogPost";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/users/:userId" element={<UserProfile />} />
        <Route path="/blog/:id" element={<BlogPost />} />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
