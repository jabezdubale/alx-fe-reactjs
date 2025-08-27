import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [useAuth, setUseAuth] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  if (!useAuth) {
    return (
      <div>
        <h3>This is a protected Route space</h3>
        <button
          onClick={() => {
            setUseAuth(true);
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
