import Axios from 'axios'
import { useState, useEffect } from 'react'
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
        <div>
          <h1 className="font-black ">Sobre</h1>
          <div className="flex bg-cyan-600 w-64 place-content-around">
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
            <button onClick={handleClickButton}> Send</button>
          </div>
          {typeof listIdades !== 'undefined' &&
            listIdades.map(value => {
              return <h1>OLA</h1>
            })}
        </div>
      </div>
    </>
  )
}
