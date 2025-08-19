import { FaGithub } from "react-icons/fa";
import { features, type Props } from "./constants";

export default function Features() {
  return (
    <main className="pt-30 md:pt-70">
      <div className="flex flex-col justify-between items-center text-center">
        <div className="flex flex-col justify-between items-center gap-1">
          <p className="text-2xl font-semibold">Features</p>
          <div className="bg-neutral-500 w-20 h-1 rounded-3xl border-2 border-neutral-400"></div>
        </div>
        <div className="mt-5 relative w-[500px] h-[200px] md:w-[800px] md:h-[300px] flex justify-center items-center text-center">
          {features.map((feature: Props, index: number) => {
            let positionStyle = {};
            let zIndex = "";

            if (index === 0) {
              positionStyle = {
                top: "50px",
                transform: "scale(1.3)",
              };
              zIndex = "z-50";
            } else if (index === 1) {
              positionStyle = {
                right: "150px md:300px",
                top: "50px",
                transform: "scale(1.2)",
              };
              zIndex = "z-40";
            } else if (index === 2) {
              positionStyle = {
                left: "300px",
                top: "50px",
                transform: "scale(1.2)",
              };
              zIndex = "z-40";
            } else if (index === 3) {
              positionStyle = {
                right: "450px",
                top: "50px",
                transform: "scale(1.1)",
              };
              zIndex = "z-30";
            } else if (index === 4) {
              positionStyle = {
                left: "450px",
                top: "50px",
                transform: "scale(1.1)",
              };
              zIndex = "z-30";
            }

            return (
              <div
                key={feature.id}
                className={`absolute w-[300px] h-[200px] md:w-[500px] md:h-[350px] flex justify-center items-center ${zIndex} transition-all duration-500 hover:scale-105`}
                style={positionStyle}
              >
                <img
                  src={feature.cardImage}
                  alt="card"
                  className="absolute inset-0 w-full h-full object-contain"
                />
                <div className="absolute inset-0 z-10 px-10 flex flex-col justify-center items-center p-4 animate-float">
                  <div
                    className={`${
                      index >= 1 && index <= 4 ? "blur-xs" : ""
                    } filter invert`}
                  >
                    {feature.icon}
                  </div>
                  <div
                    className={`${
                      index >= 1 && index <= 4 ? "blur-xs" : ""
                    } text-sm font-semibold text-black`}
                  >
                    {feature.body}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-40 md:mt-90 px-5 md:px-15">
        <div className="py-8 md:py-15 px-3 md:px-5 flex flex-row md:flex-col justify-between items-center gap-7 md:gap-10 text-center bg-gradient-to-br from-neutral-300 to-neutral-800 rounded-4xl border-2 border-neutral-50">
          <img
            src="/images/icp-logo.png"
            alt="icp-logo"
            className="w-20 h-15 md:w-40 md:h-30"
            loading="eager"
            fetchPriority="high"
          />
          <div className="flex flex-col justify-between items-center gap-4 md:gap-8">
            <p className="text-md md:text-4xl font-semibold">
              Built on the Internet Computer <br className="hidden md:block" />
              for Unstoppable Web3 access
            </p>
            <button className="flex justify-between items-center gap-3 px-3 py-2 bg-gradient-to-r from-neutral-400 to-neutral-600 rounded-full border-3 border-neutral-500 text-center">
              <FaGithub className="text-black" size={30} />
              <p className="font-semibold">Github</p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
