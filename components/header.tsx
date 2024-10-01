"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from '@/components/them-toggle'

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? 'text-yellow-500 font-medium' : 'hover:text-foreground  '
  }

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <div>
          <Link href='/' className='font-serif text-2xl font-bold'>
            JK
          </Link>
        </div>

        <ul className='flex items-center gap-6 text-md font-light text-primary/80 sm:gap-10'>
          <li className={`transition-colors ${isActive('/posts')}`}>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className={`transition-colors ${isActive('/projects')}`}>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className={`transition-colors ${isActive('/contact')}`}>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}