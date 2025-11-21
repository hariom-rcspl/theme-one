import { useState } from "react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "../components/ui/field"
import { Input } from "../components/ui/input"
import { useFormik } from "formik"
import { toast } from "sonner"
import { Eye, EyeClosed } from "lucide-react"

export function LoginForm({ setIsLoggedIn }: any) {
  const [showPassword, setShowPassword] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: "admin@gmail.com",
      password: "Admin@123",
    },
    onSubmit: async (values) => {
      console.log('values', values)
      if (values.email === "admin@gmail.com" && values.password === "Admin@123") {
        setIsLoggedIn(true)
      } else {
        toast.error("Invalid Credentials")
      }
    }
  })
  return (
    <div className={"flex flex-col gap-6"}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={formik.handleSubmit}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-muted-foreground text-balance">
                  Login to your account
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </Field>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <div className="absolute top-1/2 right-2 w-20" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ?
                    <Eye size={17} className="absolute top-1/2 right-2 -translate-y-1/2" /> :
                    <EyeClosed size={17} className="absolute top-1/2 right-2 -translate-y-1/2" />
                  }
                </div>
              </div>
              <Field>
                <Button type="submit">Login</Button>
              </Field>
            </FieldGroup>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="/login.png"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
