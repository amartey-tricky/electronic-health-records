import { z } from "zod"

export const userSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["admin", "receptionist", "doctor", "nurse", "lab technician", "pharmacist", "cashier"]),
})

export type userData = z.infer<typeof userSchema>
