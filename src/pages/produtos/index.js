import axios from 'axios'
import { Fragment, useState, useEffect } from 'react'
import Aside from '../../components/layout/Aside'
import Products from '../../components/products/Products'
import { getAllProducts } from '../../lib/dato-cms'

export default function Example() {
  const [listProdutos, setListProdutos] = useState()
  useEffect(async () => {
    await getAllProducts().then(data => {
      setListProdutos(data)
      console.log(data)
    })
  }, [])

  return (
    <div className="bg-white dark:min-h-screen dark:bg-bg px-10">
      <h1 className="lg:mx-auto text-4xl lg:pl-10 pt-12 dark:text-white ">
        Mantos
      </h1>
      <div className="border-b-2 border-b-white mx-6 pt-4" />
      <div className="max-w-2xl sm:py-10 sm:px-6 lg:max-w-7xl lg:pr-18">
        <Products products={listProdutos} />
      </div>
    </div>
  )
}
