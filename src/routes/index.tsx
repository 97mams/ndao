import { Link, redirect, createFileRoute } from '@tanstack/react-router'
import { getSession } from '@/lib/auth.functions'
import { Home } from '@/components/Home.tsx'
import { Header } from '@/components/header.tsx';

export const Route = createFileRoute('/')({
  component: IndexComponent,
})

function IndexComponent() {
  return( 
    <div>
      <Header />
      <Home />
    </div>);
}