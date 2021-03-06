import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, useCycle } from 'framer-motion'
import useAuth from '../../hooks/useAuth'
import { XIcon } from '@heroicons/react/outline'
import { MenuIcon } from '@heroicons/react/solid'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Produtos', href: '/produtos' }
]

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '+100%' }
}

const menu = [
  { name: 'Home', href: '/' },
  { name: 'Produtos', href: '/produtos' },
  { name: 'Contato', href: '/contato' }
]

export default function Navbar() {
  const { user, signin } = useAuth()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-full border-b-2 border-white ">
      <div className="flex items-center  px-10 py-4 bg-white dark:bg-bg dark:text-white">
        <div className="flex  items-center">
          <div>
            <img
              className="block  h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
          </div>
          <div className="lg:flex space-x-5 pt-1 pl-7 hidden">
            {navigation.map(({ name, href }) => (
              <Link href={href} key={name}>
                <a className=" text-sm font-medium text-gray-800 hover:text-gray-600 dark:text-slate-200 dark:hover:text-white ">
                  {name}
                </a>
              </Link>
            ))}
          </div>

          <motion.nav
            animate={isOpen ? 'open' : 'closed'}
            variants={variants}
            className="fixed inset-0 flex z-40 lg:hidden"
          >
            <button onClick={() => setIsOpen(isOpen => !isOpen)} />
            <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Menu</h2>
                <button
                  type="button"
                  className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                  onClick={() => setIsOpen(isOpen => !isOpen)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="px-4 ">
                {/* Mobile Filters */}
                <div className="border-b-2 py-4">
                  {user !== false && (
                    <Link
                      className="flex items-center focus:outline-none  "
                      href="/login"
                    >
                      <a className="text-sm font-medium text-gray-800 hover:text-gray-600 dark:text-slate-200 ">
                        Login
                      </a>
                    </Link>
                  )}
                </div>
                {menu.map(({ name, href }) => (
                  <div className="border-b-2 py-4" key={name}>
                    <Link href={href}>
                      <a className="text-sm font-medium text-gray-800 hover:text-gray-600 dark:text-slate-200">
                        {name}
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </motion.nav>
        </div>
        <div className="ml-auto lg:hidden">
          <button
            className="flex items-center justify-center w-8 h-8  "
            onClick={() => setIsOpen(isOpen => !isOpen)}
          >
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
