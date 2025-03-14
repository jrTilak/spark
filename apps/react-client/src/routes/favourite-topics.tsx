import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/favourite-topics')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/favourite-topics"!</div>
}
