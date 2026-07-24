import { Link, redirect, createFileRoute } from '@tanstack/react-router'
import { getSession } from '@/lib/auth.functions'
import { Home } from '@/components/Home.tsx'

export const Route = createFileRoute('/')({
  component: IndexComponent,
})

function IndexComponent() {
  return <div><Home /></div>
}