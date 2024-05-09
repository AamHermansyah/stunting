import LoginForm from "@/components/pages/auth/LoginForm"
import { Suspense } from "react"

function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  )
}

export default LoginPage