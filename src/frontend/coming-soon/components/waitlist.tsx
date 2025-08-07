"use client";
import React, { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (email.includes("@") && email.includes(".")) {
        setFormState("success");
        setMessage("You have successfully joined the waitlist.");
        setEmail("");
      } else {
        setFormState("error");
        setMessage("Please enter a valid email address.");
      }
    } catch (error) {
      setFormState("error");
      setMessage("Something went wrong. Please try again.");
      console.error("Waitlist submission error:", error);
    }
  };

  return (
    <main className="flex justify-center items-center pt-20 md:pt-40 px-10 md:p-5">
      <div className="max-w-md p-8 border border-gray-200 rounded-lg shadow-lg shadow-neutral-800 bg-white text-center">
        <h2 className="mb-6 text-xl md:text-3xl tracking-wide font-semibold text-gray-800">
          Join Our Waitlist!
        </h2>

        {formState === "success" ? (
          <p className="mt-6 text-lg font-medium text-gray-600">{message}</p>
        ) : (
          <>
            <p className="mb-8 text-sm md:text-lg text-gray-600">
              Be among the first to know when we launch.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={formState === "submitting"}
                className="p-3 border border-gray-300 rounded-md text-xs md:text-lg w-full box-border
                           focus:outline-none focus:border-gray-400 text-neutral-800
                           disabled:opacity-70 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={formState === "submitting"}
                className={`
                  p-2 bg-neutral-900 text-white rounded-md text-md font-medium cursor-pointer transition-all duration-300
                  ${
                    formState === "submitting"
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:bg-neutral-700 active:bg-neutral-800"
                  }
                `}
              >
                {formState === "submitting" ? "Submitting..." : "Join waitlist"}
              </button>
            </form>

            {message && formState === "error" && (
              <p className={`mt-6 text-sm md:text-lg font-medium text-red-600`}>
                {message}
              </p>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default Waitlist;
