import { z } from "zod"

export const signInFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, {
      message: "Email is required",
    })
    .email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
})

export const signUpFormSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z
    .string()
    .trim()
    .min(1, {
      message: "Email is required",
    })
    .email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
})
