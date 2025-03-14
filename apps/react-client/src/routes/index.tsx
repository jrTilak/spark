import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Link to="/login">Goto login</Link> <br />
      <Link to="/favourite-topics">Favourite Topics</Link>
    </div>
  );
}
