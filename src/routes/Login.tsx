import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Login')({
  loader: () => {
    return 'Hello World'
  },
  component: LoginComponent,
})

function LoginComponent() {
  const data = Route.useLoaderData()
  return <div>{data}</div>
}