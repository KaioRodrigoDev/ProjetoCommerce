import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import axios from 'axios'

export default function MyModal(props) {
  const [editValue, setEditValue] = useState({
    id: props.id,
    nome: props.nome,
    preco: props.preco
  })

  const handleEditIdade = () => {
    axios.put('http://localhost:3001/editProduct', {
      id: editValue.id,
      nome: editValue.nome,
      preco: editValue.preco
    })
  }

  function closeModal() {
    props.setIsOpen(false)
  }

  function openModal() {
    props.setIsOpen(true)
  }

  const handleChangeValue = value => {
    setEditValue(prevValue => ({
      ...prevValue,
      [value.target.id]: value.target.value
    }))
  }

  return (
    <>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto backdrop-blur-sm bg-sky-200  "
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl ">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Edite as informações
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Produto:{props.nome}</p>
                  <p className="text-sm text-gray-500">Preço:{props.preco}$</p>
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    className=" shadow-sm  pl-7 pr-12 sm:text-sm border-solid border-2 border-gray-800 rounded-md py-2 "
                    onChange={handleChangeValue}
                    placeholder="Produto"
                    defaultValue={props.nome}
                  />
                  <input
                    type="text"
                    name="preco"
                    id="preco"
                    className="shadow-sm  pl-7 pr-12 sm:text-sm border-solid border-2 border-gray-800 rounded-md py-2 mt-4 "
                    onChange={handleChangeValue}
                    placeholder="Preço"
                    defaultValue={props.preco}
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={handleEditIdade}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
