import { createFileRoute } from '@tanstack/react-router'
import { LoginModel } from '@/components/LoginModel'

export const Route = createFileRoute('/_auth/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<div>
    <LoginModel />
  </div>)
}
