import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getAllProducts } from '../lib/dato-cms'

// import { Container } from './styles';

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

export default function Products() {
  // const [products, setProducts] = useState([])

  // useEffect(async () => {
  //   await getAllProducts().then(data => {
  //     setProducts(data)
  //     console.log(data)
  //   })

  //   async function getProducts() {
  //     const products = await getAllProducts()
  //   }
  // }, [])
  return (
    <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products?.map((product, key) => (
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
  )
}
