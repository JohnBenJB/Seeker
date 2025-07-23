import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/images/seekerlogo.png";

export default function Splash() {
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const zoomTimer: number = setTimeout(() => {
      setIsZoomed(true);
    }, 100);

    const redirectTimer: number = setTimeout(() => {
      navigate("/dashboard");
    }, 5000);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white overflow-hidden">
      <img
        src={logo}
        alt="logo"
        className={`
          transform transition-transform duration-1000 ease-out 
          ${isZoomed ? "scale-125" : "scale-100"} 
        `}
        width={100}
        height={100}
      />
    </div>
  );
}
