import axios from 'axios'
import { Fragment, useState, useEffect } from 'react'
import Aside from '../../components/Aside'
import Products from '../../components/Products'

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
        <Aside />
        {/* End-Aside */}

        <div className="max-w-2xl mr-auto  pr-18 sm:py-10 sm:px-6 lg:max-w-7xl lg:pr-18">
          <Products />
        </div>
      </div>
    </div>
  )
}
