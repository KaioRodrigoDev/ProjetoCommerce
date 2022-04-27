import { motion } from 'framer-motion'
import { Menu, Transition } from '@headlessui/react'
import axios from 'axios'
import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'

const categories = [
  {
    id: 1,
    name: 'Camisas',
    sub: [
      { name: 'Camisas1', link: '/camisas' },
      { name: 'Camisas2', link: '/camisas' }
    ]
  },
  {
    id: 2,
    name: 'Calças'
  }
]

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: '-100%' }
}

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: 'produtos/1',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black'
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: 'produtos/1',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black'
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: 'produtos/1',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black'
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: 'produtos/1',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black'
  }
  // More products...
]

export default function Example() {
  const [isOpen, setIsOpen] = useState(false)
  const [listProdutos, setListProdutos] = useState()
  useEffect(() => {
    axios.get('http://localhost:3001/getProducts').then(response => {
      console.log(response)
      setListProdutos(response.data)
    })
  }, [])

  return (
    <div className="bg-white dark:min-h-screen dark:bg-bg px-10">
      <h1 className="lg:mx-auto text-4xl lg:pl-10 pt-12 dark:text-white ">
        Mantos
      </h1>
      <div className="border-b-2 border-b-white mx-6 pt-4" />
      <div className="flex space-x-8 ">
        <div className="mt-6 gap-y-10 mr-auto py-10 lg:pl-10 dark:text-white hidden lg:block ">
          <h1 className="text-2xl font-bold">Categorias</h1>
          <motion.div>
            <h1>Esse sera o ASIDE</h1>
            {categories.map(category => (
              <>
                <motion.div>
                  {category.sub && (
                    <div>
                      <button
                        className="w-full flex  justify-between text-sm text-gray-400 hover:text-gray-500 dark:text-white"
                        onClick={() => setIsOpen(isOpen => !isOpen)}
                      >
                        <span className="font-medium ">{category.name}</span>
                        <span className="ml-6 flex items-center">
                          <h1>toggle</h1>
                        </span>
                      </button>
                      <motion.div
                        animate={isOpen ? 'open' : 'closed'}
                        variants={variants}
                      >
                        {category.sub.map(sub => (
                          <Menu className="abolute space-y-2">
                            <Link href={sub.link}>
                              <a
                                className={`${
                                  isOpen
                                    ? ' block text-gray-400 hover:text-gray-500 dark:text-white'
                                    : 'hidden'
                                } group flex rounded-md items-center w-full px-2 py-2 text-sm space-y-2`}
                              >
                                {sub.name}
                              </a>
                            </Link>
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

        <div className="max-w-2xl mr-auto  pr-18 sm:py-10 sm:px-6 lg:max-w-7xl lg:pr-18">
          <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product, key) => (
              <motion.product
                initial={{ opacity: 0, y: +100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + 0.2 * key }}
                key={product.id}
              >
                <div key={product.id} className="group relative">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700 dark:text-slate-300">
                        {product.name}
                      </h3>
                      <p className="text-sm font-medium text-gray-900 dark:text-slate-400">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.product>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
