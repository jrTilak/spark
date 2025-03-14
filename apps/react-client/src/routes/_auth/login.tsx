import { createFileRoute } from "@tanstack/react-router";
import { LoginModal } from "@/components/common/login-modal";

export const Route = createFileRoute("/_auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <LoginModal />
    </div>
  );
}
