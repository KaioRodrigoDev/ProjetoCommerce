import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Products({ products }) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products?.map((product, key) => (
        <motion.product
          initial={{ opacity: 0, y: +100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + 0.2 * key }}
          key={product?.id}
        >
          <div key={product?.id} className="group relative">
            <>
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <Link className="hover:" href={`/produtos/${product?.id}`}>
                  <img
                    src={product?.imagem?.[0]?.url}
                    className="cursor-pointer w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </Link>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <Link className="hover:" href={`/produtos/${product?.id}`}>
                    <h3 className="cursor-pointer text-sm text-gray-700 dark:text-slate-300">
                      {product?.nome}
                    </h3>
                  </Link>
                  <p className="text-sm font-medium text-gray-900 dark:text-slate-400">
                    R$ {product?.preco}
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
