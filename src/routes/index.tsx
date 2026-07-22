import { createFileRoute, redirect } from '@tanstack/react-router'
import { getSession } from '@/lib/auth.functions'

export const Route = createFileRoute('/')({
  beforeLoad: async () => {
    const session = await getSession();

    if (!session) {
      throw redirect({ to: "/" });
    }

    return { user: session.user };
  },
  component: IndexComponent,
})

function IndexComponent() {
  const { user } = Route.useRouteContext();
  
  return <div>Welcome, {user.name}!</div>
}