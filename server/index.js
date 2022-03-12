import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'

const app = express()

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
})

app.use(cors())
app.use(express.json())

app.get('/test', (req, res) => {
  res.send('Tudo OKAY')
})

app.post('/register', (req, res) => {
  const { Idade } = req.body
  const { Idade1 } = req.body

  console.log(Idade)

  let SQL = 'INSERT INTO tabela ( Idade , Idade1) VALUES (?,?)'

  db.query(SQL, [Idade, Idade1], (err, result) => {
    console.log(err)
  })
})

app.get('/getIdade', (req, res) => {
  let SQL = 'SELECT * from tabela'
  db.query(SQL, (err, result) => {
    if (err) console.log(err)
    else res.send(result)
  })
})

app.listen(3001, () => {
  console.log('SERVIDOR RODANDO')
})
