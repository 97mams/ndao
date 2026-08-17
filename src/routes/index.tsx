import { Link, redirect, createFileRoute, Navigate } from '@tanstack/react-router'
import { getSession } from '@/lib/auth.functions'
import { Home } from '@/components/Home.tsx'
import { Header } from '@/components/header.tsx';

export const Route = createFileRoute('/')({
  loader: async () => {
    const session = await getSession();
    if (!session) {
      await  Navigate({to:'/login'});
    }
    return session;
  },
  component: IndexComponent,
})

function IndexComponent() {
  const session = Route.useLoaderData()

  return( 
    <div>
      <Header session={session} />
      <Home />
    </div>);
}