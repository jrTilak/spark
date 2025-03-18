import { createFileRoute } from "@tanstack/react-router";
import {FavouriteTopicsModal}  from "@/components/common/favourite-topics-modal";

export const Route = createFileRoute("/favourite-topics")({
  component: RouteComponent,
});

function RouteComponent() {
  return <FavouriteTopicsModal />;
}
