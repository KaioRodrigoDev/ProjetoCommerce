import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import axios from 'axios'

export default function MyModal(props) {
  const [newproduct, setNewProduct] = useState()
  const [tamanhos, setTamanhos] = useState()

  const handleEditIdade = () => {
    axios
      .post('http://localhost:3001/newProduct', {
        nome: newproduct.nome,
        preco: newproduct.preco,
        imagem: newproduct.imagem,
        cores: newproduct.cores,
        tamanhos: newproduct.tamanhos,
        descricao: newproduct.descricao,
        detalhes: newproduct.detalhes
      })
      .then(response => {
        console.log(response)
      })
  }

  function closeModal() {
    props.setIsOpen(false)
  }

  function openModal() {
    props.setIsOpen(true)
  }

  const handleChangeValue = value => {
    setNewProduct(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value
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
                  Adicione um novo produto
                </Dialog.Title>
                <div>
                  <div>
                    <p className="font-black text-xs mt-4">nome</p>
                    <input
                      type="text"
                      name="nome"
                      onChange={handleChangeValue}
                      className="border-2 border-gray-800"
                    />
                    <p className="font-black text-xs mt-4">Preço</p>
                    <input
                      type="text"
                      name="preco"
                      onChange={handleChangeValue}
                      className="border-2 border-gray-800"
                    />
                    <p className="font-black text-xs mt-2 ">imagem</p>
                    <input
                      type="text"
                      name="imagem"
                      onChange={handleChangeValue}
                      className="border-2 border-gray-800 "
                    />
                  </div>
                  <div>
                    <p className="font-black text-xs mt-2">Cores</p>
                    <input
                      type="text"
                      name="cores"
                      onChange={handleChangeValue}
                      className="border-2 border-gray-800 "
                    />
                    <p className="font-black text-xs mt-2">Tamanhos</p>
                    <input
                      type="text"
                      name="tamanhos"
                      onChange={handleChangeValue}
                      className="border-2 border-gray-800 "
                    />
                  </div>
                  <div>
                    <p className="font-black text-xs  mt-2">Descrição</p>
                    <input
                      type="text"
                      name="descricao"
                      onChange={handleChangeValue}
                      className="border-2 border-gray-800 "
                    />
                    <p className="font-black text-xs mt-2">Detalhes</p>
                    <input
                      type="text"
                      name="detalhes"
                      onChange={handleChangeValue}
                      className="border-2 border-gray-800 "
                    />
                  </div>
                  <div></div>
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
