import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(50, "Name must be at most 50 characters.")
    .regex(/^[A-Za-z ]+$/, "Name can contain only letters and spaces."),
  email: z
    .string()
    .trim()
    .min(5, "Email is required.")
    .email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(5, "Message must be at least 5 characters.")
    .max(1000, "Message must be at most 1000 characters."),
});

export function sanitizeContactInput(raw) {
  const parsed = contactSchema.parse(raw);
  return {
    ...parsed,
    message: parsed.message
      .replace(/[<>]/g, "")
      .replace(/[\x00-\x08\x0B-\x1F\x7F]/g, ""),
  };
}
