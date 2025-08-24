import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function LogoutButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
    >
      Log Out
    </button>
  );
}
