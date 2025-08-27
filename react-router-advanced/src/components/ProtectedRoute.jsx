import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <div>
        <h3>This is a protected Route space</h3>
        <button
          onClick={() => {
            setIsAuthenticated(true);
            navigate(location.pathname, { replace: true });
          }}
        >
          Log in
        </button>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
