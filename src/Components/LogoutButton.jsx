import { googleLogout } from "@react-oauth/google";
import { useAuth } from "../AuthContext";
import toast from "react-hot-toast";

const LogoutButton = () => {
  const { user, setUser } = useAuth();

  const logOut = () => {
    googleLogout();
    toast.success("Logout successful");
    setUser(null);
  };

  if (!user) return null;

  return (
    <button
     className="border-spacing-2 p-2 rounded-md bg-red-500 text-white hover:bg-red-600"
      onClick={logOut}
    >
      Log out
    </button>
  );
};

export default LogoutButton;
