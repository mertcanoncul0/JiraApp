import { Hono } from "hono"
import { zValidator } from "@hono/zod-validator"
import { signInFormSchema, signUpFormSchema } from "../schemas"

const app = new Hono()
  .post("/signin", zValidator("json", signInFormSchema), async (c) => {
    const { email, password } = c.req.valid("json")

    console.log(email, password)

    return c.json({ email, password })
  })
  .post("/signup", zValidator("json", signUpFormSchema), async (c) => {
    const { name, email, password } = c.req.valid("json")

    console.log(name, email, password)

    return c.json({ name, email, password })
  })

export default app
