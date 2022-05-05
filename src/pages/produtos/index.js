import { motion } from 'framer-motion'
import axios from 'axios'
import { Fragment, useState, useEffect } from 'react'
import Aside from '../../components/Aside'
import Link from 'next/link'

const categories = [
  {
    id: 1,
    name: 'Camisas',
    sub: [
      {
        name: 'Camisas1',
        sub2: [
          { name: 'Camisas2', link: '/camisas1' },
          { name: 'Camisas2', link: '/camisas2' }
        ]
      },
      { name: 'Camisas2', link: '/camisas' }
    ]
  },
  {
    id: 2,
    name: 'Calças'
  }
]

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
    href: 'produtos/2',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black'
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: 'produtos/3',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black'
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: 'produtos/4',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black'
  }
  // More products...
]

export default function Example() {
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
        {/* Aside */}
        <Aside categories={categories} />
        {/* End-Aside */}

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
                  <>
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <Link className="hover:" href={product.href}>
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="cursor-pointer w-full h-full object-center object-cover lg:w-full lg:h-full"
                        />
                      </Link>
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <Link className="hover:" href={product.href}>
                          <h3 className="cursor-pointer text-sm text-gray-700 dark:text-slate-300">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-sm font-medium text-gray-900 dark:text-slate-400">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  </>
                </div>
              </motion.product>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
