import Axios from 'axios'
import { useState, useEffect } from 'react'
import Card from '../../components/AdminProducts'
import NewProduct from '../../components/NewProduct'

export default function Sobre() {
  //
  //
  const [listProdutos, setListProdutos] = useState()

  useEffect(() => {
    Axios.get('http://localhost:3001/getProducts').then(response => {
      setListProdutos(response.data)
    })
  }, [])

  let [isOpen, setIsOpen] = useState(false)
  const NProduct = () => {
    setIsOpen(true)
  }

  return (
    <>
      <div className="min-h-screen flex justify-center dark:bg-bg dark:text-slate-200">
        <div className="flex-col ">
          <div className="text-center ">
            <button
              className=" text-sm mt-4 bg-slate-600 p-2 w-28 rounded-lg text-slate-100 "
              onClick={NProduct}
            >
              NOVO ITEM
            </button>
          </div>

          <NewProduct isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className="mt-10">
            {typeof listProdutos !== 'undefined' &&
              listProdutos.map(product => {
                return (
                  <Card
                    key={product.id}
                    id={product.id}
                    img={product.imagens}
                    nome={product.nome}
                    preco={product.preco}
                    tamanho={product.tamanhos}
                    data={product.created_at}
                    tipo={product.tipo}
                  ></Card>
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}
