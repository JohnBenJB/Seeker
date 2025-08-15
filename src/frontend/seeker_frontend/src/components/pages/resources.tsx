import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useSubmitContact,
  contactSchema,
  type ContactFormData,
} from "../../hooks/useContact";

export default function ContactForm() {
  const submitContactMutation = useSubmitContact();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
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
    <div className="min-h-screen flex items-center justify-center mt-60 -mb-20 overflow-hidden">
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <img
          src="/images/wave-nav.png"
          className="absolute inset-0 h-full object-contain pr-40 pt-100"
        />
      </div>

      <div className="flex px-30 gap-20 max-w-7xl w-full relative z-10">
        <div className="flex-1 flex flex-col justify-start items-center pt-30">
          <h1 className="text-6xl font-bold text-white mb-6">
            Submit <br /> Resource
          </h1>
          <p className="text-xl text-gray-300">Share what you know.</p>
        </div>
        <div className="flex-1">
          <div className="bg-neutral-600/40 backdrop-blur-xs border-3 border-neutral-500 rounded-2xl py-17 px-12">
            {submitContactMutation.isSuccess && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-500/50 rounded-lg">
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
              <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 rounded-lg">
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

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div>
                <div className="flex justify-between items-center gap-8">
                  <label>Resource Name:</label>
                  <input
                    type="text"
                    {...register("name")}
                    className="w-full px-4 py-3 bg-neutral-600/40 border-2 border-neutral-500 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-all"
                    disabled={submitContactMutation.isPending}
                  />
                </div>
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <div className="flex justify-between items-center gap-7">
                  <label className="block text-gray-300 text-md">Type :</label>
                  <input
                    type="text"
                    {...register("email")}
                    className="w-full px-4 py-3 bg-neutral-600/40 border-2 border-neutral-500 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-all"
                    disabled={submitContactMutation.isPending}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <div className="flex justify-between items-center gap-7">
                  <label className="block text-gray-300 text-md">URL :</label>
                  <input
                    type="URL"
                    {...register("location")}
                    className="w-full px-4 py-3 bg-neutral-600/40 border-2 border-neutral-500 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-all"
                    disabled={submitContactMutation.isPending}
                  />
                </div>
                {errors.location && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.location.message}
                  </p>
                )}
              </div>
              <div>
                <div className="flex justify-between items-center gap-7">
                  <label className="block text-gray-300 text-md">
                    Github Repo :
                  </label>
                  <input
                    type="url"
                    {...register("phone")}
                    className="w-full px-4 py-3 bg-neutral-600/40 border-2 border-neutral-500 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-all"
                    placeholder="Optional"
                    disabled={submitContactMutation.isPending}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <div className="flex justify-between items-center gap-7">
                  <label className="block text-gray-300 text-md">
                    Description :
                  </label>
                  <textarea
                    rows={4}
                    {...register("message")}
                    className="w-full px-4 py-3 bg-neutral-600/40 border-2 border-neutral-500 rounded-4xl text-white focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-all"
                    disabled={submitContactMutation.isPending}
                  />
                </div>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <div>
                <div className="flex justify-between items-center gap-7">
                  <label className="block text-gray-300 text-md">Tags :</label>
                  <textarea
                    rows={4}
                    {...register("message")}
                    className="w-full px-4 py-3 bg-neutral-600/40 border-2 border-neutral-500 rounded-4xl text-white focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-all"
                    disabled={submitContactMutation.isPending}
                  />
                </div>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={submitContactMutation.isPending} // 🔥 REACT QUERY: isPending state
                  className={`px-8 py-3 bg-gray-700/70 border border-gray-600 rounded-full text-white font-medium hover:bg-gray-600/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all ${
                    submitContactMutation.isPending
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  {/* 🔥 REACT QUERY: Show loading state */}
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
  );
}
