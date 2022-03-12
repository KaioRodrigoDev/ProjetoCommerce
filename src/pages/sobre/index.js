import Axios from 'axios'
import { useState, useEffect } from 'react'
import Card from '../../components/Card'
import Dialog from '../../components/Dialog'
export default function sobre() {
  //
  //
  const [value, setValue] = useState()
  const [listIdades, setListIdades] = useState()
  console.log(listIdades)
  const handlechangevalues = value => {
    setValue(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value
    }))
  }

  const handleClickButton = () => {
    Axios.post('http://localhost:3001/register', {
      Idade: value.Idade,
      Idade1: value.Idade1
    }).then(response => {
      console.log(response)
    })
  }

  useEffect(() => {
    Axios.get('http://localhost:3001/getIdade').then(response => {
      console.log(response)
      setListIdades(response.data)
    })
  }, [])

  return (
    <>
      <div className="flex justify-center">
        <div className="">
          <div>
            <h1 className="flex font-black justify-center">Sobre</h1>
          </div>
          <div className="flex flex-col">
            <input
              type="number"
              name="Idade"
              onChange={handlechangevalues}
              className="border-2"
            />
            <input
              type="number"
              name="Idade1"
              onChange={handlechangevalues}
              className="border-2"
            />
          </div>
          <div className="text-center">
            <button
              className="mt-4 bg-slate-600 p-2 w-28 rounded-lg text-slate-200 "
              onClick={handleClickButton}
            >
              Send
            </button>
          </div>
          {typeof listIdades !== 'undefined' &&
            listIdades.map(value => {
              return (
                <Card
                  key={value.id}
                  listIdades={listIdades}
                  setListIdades={setListIdades}
                  id={value.id}
                  idade={value.Idade}
                  idade1={value.idade1}
                >
                  OLA
                </Card>
              )
            })}
        </div>
      </div>
    </>
  )
}
