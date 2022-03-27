import Axios from 'axios'
import { useState, useEffect } from 'react'
import Card from '../../components/Card'
import NewProduct from '../../components/NewProduct'

export default function Sobre() {
  //
  //
  const [value, setValue] = useState()
  const [listProdutos, setListProdutos] = useState()
  console.log(listProdutos)
  const handlechangevalues = value => {
    setValue(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value
    }))
  }

  useEffect(() => {
    Axios.get('http://localhost:3001/getProducts').then(response => {
      console.log(response.data)
      setListProdutos(response.data)
    })
  }, [])

  let [isOpen, setIsOpen] = useState(false)
  const NProduct = () => {
    setIsOpen(true)
  }

  return (
    <>
      <div className="flex justify-center dark:bg-slate-900 dark:text-slate-200">
        <div className="flex-col text-center">
          <div>
            <h1 className="flex font-black justify-center">Sobre</h1>
            <h1 className="flex font-black justify-center pt-4">
              Adicione Novo
            </h1>
            <button
              className=" text-sm mt-4 bg-slate-600 p-2 w-28 rounded-lg text-slate-100 "
              onClick={NProduct}
            >
              NEW ITEM
            </button>
          </div>

          <NewProduct isOpen={isOpen} setIsOpen={setIsOpen} />
          {typeof listProdutos !== 'undefined' &&
            listProdutos.map(product => {
              return (
                <Card
                  key={product.id}
                  listProdutos={listProdutos}
                  setListIdades={listProdutos}
                  id={product.id}
                  nome={product.nome}
                  preco={product.preco}
                ></Card>
              )
            })}
        </div>
      </div>
    </>
  )
}
