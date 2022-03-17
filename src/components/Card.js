import Dialog from '../components/Dialog'
import { useState } from 'react'

export default function Card(props) {
  let [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      <div
        className="flex rounded-lg space-x-6 hover:bg-rose-500 border-2 border-rose-500 justify-center p-4 m-4 duration-500"
        onClick={openModal}
      >
        <h1>Produto: {props.nome}</h1>
        <h1 className="card-Idade1 text-sky-400">Preço: {props.preco}$</h1>
        <Dialog
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          nome={props.nome}
          preco={props.preco}
          id={props.id}
        />
      </div>
    </>
  )
}
