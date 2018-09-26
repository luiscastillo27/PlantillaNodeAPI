import express from 'express'

const app = express.Router()

app.get('/', (req, res) => {
  res.send('Hola desde help')
})

export default app
