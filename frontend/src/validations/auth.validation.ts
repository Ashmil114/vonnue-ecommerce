import z from "zod";

export const signupSchema = z.object({
  name: z
    .string()
    .min(3, "Min Length 3 characters Required")
    .max(20, "Max Length 20 characters Required"),
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(8, "Min Length 8 characters Required")
    .max(20, "Max Length 20 characters Required"),
});

export type SignupSchema = z.infer<typeof signupSchema>;

export const reviewSchema = z.object({
  product_id: z.string().uuid(),
  rating: z.number().min(1).max(5),
  review: z
    .string()
    .min(5, "Min Length 5 characters Required")
    .max(1000, "Max Length 1000 characters Required"),
  id: z.string().uuid(),
});

export type ReviewSchema = z.infer<typeof reviewSchema>;
