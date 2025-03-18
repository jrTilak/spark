import { createFileRoute } from '@tanstack/react-router'
import { PreferredCountries } from '@/components/common/preferred-countries'

export const Route = createFileRoute('/preferred-countries')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PreferredCountries/>
}
