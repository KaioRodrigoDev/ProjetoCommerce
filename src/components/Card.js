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
        <h1>Idade:{props.idade}</h1>
        <h1 className="card-Idade1 text-sky-400">Idade1:{props.idade1}</h1>
        <Dialog
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          idade={props.idade}
          idade1={props.idade1}
          id={props.id}
        />
      </div>
    </>
  )
}
