import { z } from "zod";

const optionalField = (maxLength: number) =>
  z.union([z.literal(""), z.string().trim().max(maxLength, "too_long")]);

export const contactSchema = z.object({
  fullName: z.string().trim().min(1, "required").max(160, "too_long"),
  company: optionalField(160),
  email: z
    .string()
    .trim()
    .min(1, "required")
    .max(160, "too_long")
    .email("invalid_email"),
  phone: z.string().trim().min(1, "required").max(60, "too_long"),
  subject: z.string().trim().min(1, "required").max(200, "too_long"),
  message: z.string().trim().min(1, "required").max(4000, "too_long"),
  cityCountry: optionalField(160),
  inquiryType: z.union([
    z.literal(""),
    z.enum(["general", "partnership", "administrative", "other"]),
  ]),
  preferredLanguage: z.union([z.literal(""), z.enum(["fr", "en"])]),
  website: z.string().trim().max(0, "spam_detected"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
