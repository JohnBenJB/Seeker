import { FaGithub } from "react-icons/fa";
import { features, type Props } from "./constants";

export default function Features() {
  return (
    <main className="pt-70">
      <div className="flex flex-col justify-between items-center text-center">
        <div className="flex flex-col justify-between items-center gap-1">
          <p className="text-2xl font-semibold">Features</p>
          <div className="bg-neutral-500 w-20 h-1 rounded-3xl border-2 border-neutral-400"></div>
        </div>
        <div className="mt-5 relative w-[800px] h-[300px] flex justify-center items-center text-center">
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
                right: "300px",
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
                className={`absolute w-[500px] h-[350px] flex justify-center items-center ${zIndex} transition-all duration-500 hover:scale-105`}
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
      <div className="mt-90 px-15">
        <div className="py-15 px-5 flex flex-col justify-between items-center gap-10 text-center bg-gradient-to-br from-neutral-300 to-neutral-800 rounded-4xl border-2 border-neutral-50">
          <img
            src="/images/icp-logo.png"
            alt="icp-logo"
            width={130}
            height={130}
          />
          <p className="text-4xl">
            Built on the Internet Computer <br /> for Unstoppable Web3 access
          </p>
          <button className="flex justify-between items-center gap-3 px-3 py-2 bg-gradient-to-r from-neutral-400 to-neutral-600 rounded-full border-3 border-neutral-500 text-center">
            <FaGithub className="text-black" size={30} />
            <p>Github</p>
          </button>
        </div>
      </div>
    </main>
  );
}
