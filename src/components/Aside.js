import { motion } from 'framer-motion'
import { Menu, Transition } from '@headlessui/react'
import { useState } from 'react'
import Link from 'next/link'

// import { Container } from './styles';

export default function Aside(cat) {
  const categories = cat.categories
  const [isOpen, setIsOpen] = useState(false)
  const [subIsOpen, subSetIsOpen] = useState(false)

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: '-100%' }
  }

  return (
    <div className="mt-6 gap-y-10 mr-auto py-10 lg:pl-10 dark:text-white hidden lg:block ">
      <h1 className="text-2xl font-bold">Categorias</h1>
      <motion.div>
        <h1>Esse sera o ASIDE</h1>
        {categories.map(category => (
          <>
            <motion.div key={category.name}>
              {category.sub && (
                <div>
                  <button
                    className="w-full flex  justify-between text-sm text-gray-400 hover:text-gray-500 dark:text-white"
                    onClick={() => setIsOpen(isOpen => !isOpen)}
                  >
                    <span className="font-medium ">{category.name}</span>
                    <span className="ml-6 flex items-center">
                      <h1>+</h1>
                    </span>
                  </button>
                  <motion.div
                    animate={isOpen ? 'open' : 'closed'}
                    variants={variants}
                  >
                    {category.sub.map(sub => (
                      <Menu key={sub.name} className="abolute space-y-2">
                        <>
                          {sub.sub2 && (
                            <>
                              <button
                                className={`${
                                  isOpen
                                    ? ' block text-gray-400 hover:text-gray-500 dark:text-white'
                                    : 'hidden'
                                } w-full flex pl-2 justify-between text-sm text-gray-400 hover:text-gray-500 dark:text-white`}
                                onClick={() =>
                                  subSetIsOpen(subIsOpen => !subIsOpen)
                                }
                              >
                                <span className="font-medium ">
                                  {category.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  <h1>+</h1>
                                </span>
                              </button>
                              <motion.div
                                animate={subIsOpen ? 'open' : 'closed'}
                                variants={variants}
                              >
                                {sub.sub2.map(sub2 => (
                                  <Link key={sub2.name} href={sub2.link}>
                                    <a
                                      className={`${
                                        subIsOpen & isOpen
                                          ? ' block text-gray-400 hover:text-gray-500 dark:text-white'
                                          : 'hidden'
                                      } w-full flex pl-4 justify-between text-sm text-gray-400 hover:text-gray-500 dark:text-white`}
                                    >
                                      {sub2.name}
                                    </a>
                                  </Link>
                                ))}
                              </motion.div>
                            </>
                          )}
                          {!sub.sub2 && (
                            <Link href={sub.link}>
                              <a
                                className={`${
                                  isOpen
                                    ? ' block text-gray-400 hover:text-gray-500 dark:text-white'
                                    : 'hidden'
                                } group flex rounded-md items-center w-full px-2 text-sm space-y-2`}
                              >
                                {sub.name}
                              </a>
                            </Link>
                          )}
                        </>
                      </Menu>
                    ))}
                  </motion.div>
                </div>
              )}

              {!category.sub && (
                <h1>
                  <p className="text-gray-100">{category.name}</p>
                </h1>
              )}
            </motion.div>
          </>
        ))}
      </motion.div>
    </div>
  )
}
