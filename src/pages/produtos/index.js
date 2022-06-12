import { Fragment, useState, useEffect } from 'react'
import Products from '../../components/products/Products'
import { getAllProducts, getSearch } from '../../lib/dato-cms'
import { SearchIcon } from '@heroicons/react/outline'

export default function Example() {
  const [listProdutos, setListProdutos] = useState()
  const [search, setSearch] = useState('')
  useEffect(async () => {
    await getAllProducts().then(data => {
      setListProdutos(data)
      console.log(data)
    })
  }, [])

  async function Search(e) {
    const PSearch = await getSearch(e.target.value).then(data => {
      setListProdutos(data)
    })
  }

  return (
    <div className="bg-white dark:min-h-screen dark:bg-bg px-10">
      <div className="flex lg:px-6 pt-12 place-content-between">
        <h1 className=" text-4xl  dark:text-white ">Mantos</h1>
        <div className="flex bg-white rounded-xl mt-2 items-center">
          <input
            onChange={setSearch}
            className="h-8 pl-2 focus-none outline-none rounded-l-xl "
          />
          <SearchIcon
            onClick={() => Search(search)}
            className=" p-2"
            width={32}
          />
        </div>
      </div>
      <div className="border-b-2 border-b-white mx-6 pt-4" />
      <div className="max-w-2xl sm:py-10 sm:px-6 lg:max-w-7xl lg:pr-18">
        <Products products={listProdutos} />
      </div>
    </div>
  )
}
