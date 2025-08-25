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
      className="text-xs px-3 py-2 bg-neutral-800 text-white rounded-full hover:bg-neutral-600 transition"
    >
      Log Out
    </button>
  );
}
