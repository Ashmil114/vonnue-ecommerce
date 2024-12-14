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
