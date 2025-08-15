import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  location: z
    .string()
    .min(2, "Location must be at least 2 characters")
    .max(100, "Location must be less than 100 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 characters")
    .max(20, "Phone number must be less than 20 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// Mock API
const submitContactForm = async (
  data: ContactFormData
): Promise<{ message: string }> => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // For backend later
  // const response = await fetch('/api/contact', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // })
  // if (!response.ok) throw new Error('Failed to submit')
  // return response.json()

  if (import.meta.env.DEV) {
    console.log("Contact form data:", data);
  }

  return {
    message: "Thank you for reaching out! We'll get back to you soon.",
  };
};

export const useSubmitContact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: submitContactForm,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });

      if (import.meta.env.DEV) {
        console.log("Success:", data.message);
      }
    },
    onError: (error) => {
      if (import.meta.env.DEV) {
        console.error("Contact form error:", error);
      }
    },
  });
};
