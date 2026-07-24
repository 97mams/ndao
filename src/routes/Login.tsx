import { Home } from '@/components/Home.tsx';
import { createFileRoute } from '@tanstack/react-router'
import { Loader } from 'lucide-react';

export const Route = createFileRoute('/Login')({
  loader: () => {
    return <div className="w-full h-[100vh] flex items-center justify-center animate-spin">
      <Loader />
    </div>;
  },
  component: LoginComponent,
})

function LoginComponent() {
  const data = Route.useLoaderData()
  return <div>{data}
  <Home />
  </div>
}