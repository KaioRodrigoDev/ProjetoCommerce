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

  const handleClickButton = () => {
    Axios.post('http://localhost:3001/newProduct', {
      Idade: value.Idade,
      Idade1: value.Idade1
    }).then(response => {
      console.log(response)
    })
  }

  useEffect(() => {
    Axios.get('http://localhost:3001/getProducts').then(response => {
      console.log(response)
      setListProdutos(response.data)
    })
  }, [])

  let [isOpen, setIsOpen] = useState(false)
  const NProduct = () => {
    setIsOpen(true)
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="">
          <div>
            <h1 className="flex font-black justify-center">Sobre</h1>
            <h1 className="flex font-black justify-center pt-4">
              Adicione Novo
            </h1>
          </div>
          <div className="flex ">
            <div>
              <p className="font-black text-xs ">nome</p>
              <input
                type="text"
                name="nome"
                onChange={handlechangevalues}
                className="border-2 border-gray-800"
              />
              <p className="font-black text-xs mt-4 ">imagem</p>
              <input
                type="text"
                name="Idade1"
                onChange={handlechangevalues}
                className="border-2 border-gray-800 "
              />
            </div>
            <div className="ml-4">
              <p className="font-black text-xs ">Cores</p>
              <input
                type="text"
                name="cores"
                onChange={handlechangevalues}
                className="border-2 border-gray-800 "
              />
              <p className="font-black text-xs mt-4">Tamanhos</p>
              <input
                type="text"
                name="tamanho"
                onChange={handlechangevalues}
                className="border-2 border-gray-800 "
              />
            </div>
            <div className="ml-4">
              <p className="font-black text-xs ">Descrição</p>
              <input
                type="text"
                name="descricao"
                onChange={handlechangevalues}
                className="border-2 border-gray-800 "
              />
              <p className="font-black text-xs mt-4">Detalhes</p>
              <input
                type="text"
                name="detalhes"
                onChange={handlechangevalues}
                className="border-2 border-gray-800 "
              />
            </div>
          </div>
          <div className="text-center">
            <button
              className="text-sm mt-4 bg-slate-600 p-2 w-28 rounded-lg text-slate-100 "
              onClick={handleClickButton}
            >
              Adicionar
            </button>
            <NewProduct isOpen={isOpen} setIsOpen={setIsOpen} />
            <button
              className="text-sm mt-4 bg-slate-600 p-2 w-28 rounded-lg text-slate-100 "
              onClick={NProduct}
            >
              NEW ITEM
            </button>
          </div>
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