import { Link, useNavigate } from "react-router-dom";
import Navbar from "../layout/navbar";

export default function SignIn() {
  const navigate = useNavigate();

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/home");
  };
  return (
    <main>
      <div className="grid grid-col-1 md:grid-cols-2 justify-center md:justify-between items-center overflow-hidden">
        <div className="w-full mt-5 md:px-0 md:ml-10 mb-30 flex flex-col justify-center">
          <div className="hidden md:flex">
            <div className="justify-start items-start text-left flex flex-col">
              <Link to="/">
                <img
                  src="/images/logo.png"
                  alt="logo"
                  className="w-15 h-15 md:w-20 md:h-20"
                  loading="eager"
                  fetchPriority="high"
                />
              </Link>
              <h1 className="text-xl md:text-2xl font-semibold">Seeker</h1>
            </div>
          </div>
          <div className="md:hidden">
            <div className="">
              <Navbar />
            </div>
            <div className="mt-20 flex flex-col justify-between items-center gap-3">
              <h1 className="text-2xl font-semibold">Sign In</h1>
              <p className="text-md">Grant Access For Verification</p>
            </div>
          </div>
          <div className="md:ml-40 flex-1 justify-center items-center md:mt-50">
            <div className="relative justify-center items-center text-center">
              <div className="w-60 md:w-120">
                <img
                  src="/images/group-circle.png"
                  alt="logo"
                  className="absolute inset-0 z-0 object-cover md:p-20"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="mt-20 md:mt-0 relative z-10 bg-neutral-300/10 backdrop-blur-xs border-3 border-neutral-500 rounded-2xl py-15 px-6 md:py-40 md:px-15">
                <div className="flex flex-col justify-between items-center gap-10 md:gap-15">
                  <img
                    src="/images/icp-logo.png"
                    alt="icp-logo"
                    className="w-20 h-15 md:w-40 md:h-25"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div>
                    <form onSubmit={handleClick}>
                      <button
                        type="submit"
                        className="px-9 py-2 bg-gradient-to-r from-black to-neutral-500 border-2 border-neutral-400 rounded-full hover:border-neutral-800outline-none"
                      >
                        Internet Identity
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex relative ml-50 bg-gray-200 w-full h-full justify-center items-center">
          <div className="absolute z-10 top-30 w-140 h-160 justify-center items-center ml-35">
            <img
              src="/images/about-logo.png"
              alt="logo"
              width={500}
              height={500}
              className="absolute inset-0 z-0 filter invert object-contain opacity-30"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="relative z-20 flex flex-col justify-between items-center gap-7 mr-40 text-black">
            <h1 className="text-5xl font-bold">Sign In</h1>
            <p>Grant Access For Verification</p>
          </div>
        </div>
      </div>
    </main>
  );
}
