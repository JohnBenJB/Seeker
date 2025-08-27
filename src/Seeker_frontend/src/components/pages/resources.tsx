import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useSubmitContact,
  contactSchema,
  type ContactFormData,
} from "../../hooks/useContact";

export default function ContactForm() {
  const submitContactMutation = useSubmitContact();

  const { register, handleSubmit, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await submitContactMutation.mutateAsync(data);
      reset();
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("Form submission error:", error);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center mt-30 md:mt-60 -mb-20 overflow-hidden">
      <div className="absolute inset-0 z-0 flex justify-center items-center mt-70 md:mt-0">
        <img
          src="/images/wave-nav.png"
          className="absolute inset-0 w-full h-full object-contain md:pr-40 md:pt-100 scale-y-400 md:scale-y-100"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <div className="flex flex-col md:flex-row px-5 md:px-25 gap-20 md:max-w-7xl w-full relative z-10">
        <div className="flex-1 flex flex-col justify-between items-center md:items-start md:justify-start md:pt-5 md:text-left">
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-6">
            Submit <br className="hidden md:block" /> Resource
          </h1>
          <p className="text-xl text-gray-300">Share what you know.</p>
        </div>
        <div className="flex-1">
          <div className="relative justify-center items-center text-center">
            <div className="w-120">
              <img
                src="/images/group-circle.png"
                alt="logo"
                className="absolute inset-0 z-0 object-cover p-20"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="relative z-10 bg-neutral-300/10 backdrop-blur-xs border-3 border-neutral-500 rounded-2xl py-13 px-6 md:py-17 md:px-10">
              {submitContactMutation.isSuccess && (
                <div className="relative z-20 mb-6 p-4 bg-green-900/30 border border-green-500/50 rounded-lg">
                  <div className="flex items-center text-green-300">
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium">
                      Resource submitted
                    </span>
                  </div>
                </div>
              )}
              {submitContactMutation.isError && (
                <div className="relative z-20 mb-6 p-4 bg-red-900/30 border border-red-500/50 rounded-lg">
                  <div className="flex items-center text-red-300">
                    <svg
                      className="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium">
                      Failed to send message. Please try again.
                    </span>
                  </div>
                </div>
              )}

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-8 relative z-20 "
              >
                <div>
                  <div className="flex justify-between items-center gap-7 md:gap-15">
                    <label className="block text-gray-300 text-xs md:text-md">
                      Name
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      className="w-full px-2 py-1 md:px-4 md:py-3 text-[12px] md:text-md bg-neutral-300/10 border-2 border-neutral-400 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-all"
                      disabled={submitContactMutation.isPending}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center gap-8 md:gap-15">
                    <label className="block text-gray-300 text-xs md:text-md">
                      Type
                    </label>
                    <input
                      type="text"
                      {...register("email")}
                      className="w-full px-2 py-1 md:px-4 md:py-3 text-[12px] md:text-md bg-neutral-300/10 border-2 border-neutral-400 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-all"
                      disabled={submitContactMutation.isPending}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center gap-10 md:gap-17">
                    <label className="block text-gray-300 text-xs md:text-md">
                      URL
                    </label>
                    <input
                      type="URL"
                      {...register("location")}
                      className="w-full px-2 py-1 md:px-4 md:py-3 text-[12px] md:text-md bg-neutral-300/10 border-2 border-neutral-400 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-all"
                      disabled={submitContactMutation.isPending}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center gap-6 md:gap-14">
                    <label className="block text-gray-300 text-xs md:text-md">
                      Github
                    </label>
                    <input
                      type="url"
                      {...register("phone")}
                      className="w-full px-2 py-1 md:px-4 md:py-3 text-[12px] md:text-md bg-neutral-300/10 border-2 border-neutral-400 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-all"
                      placeholder="Optional"
                      disabled={submitContactMutation.isPending}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center gap-5 md:gap-15">
                    <label className="block text-gray-300 text-xs md:text-md">
                      Description
                    </label>
                    <textarea
                      rows={4}
                      {...register("description")}
                      className="w-full resize-none px-2 py-1 md:px-4 md:py-3 text-[12px] md:text-md bg-neutral-300/10 border-2 border-neutral-400 rounded-4xl md:rounded-full text-white focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-all"
                      disabled={submitContactMutation.isPending}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center gap-10 md:gap-25">
                    <label className="block text-gray-300 text-xs md:text-md">
                      Tags
                    </label>
                    <textarea
                      {...register("tags")}
                      className="w-full resize-none scrollbar-none overflow-y-auto px-2 py-1 md:px-4 md:py-3 text-[12px] md:text-md bg-neutral-300/10 border-2 border-neutral-400 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-all"
                      disabled={submitContactMutation.isPending}
                    />
                  </div>
                </div>
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={submitContactMutation.isPending}
                    className={`px-8 py-3 bg-neutral-300/10 border border-neutral-400 rounded-full text-white font-semibold hover:bg-neytral-600/70 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-neutral-900 transition-all ${
                      submitContactMutation.isPending
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {submitContactMutation.isPending ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
