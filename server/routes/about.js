import express from 'express'

const app = express.Router()

app.get('/', (req, res) => {
  res.send('Hola desde about')
})

export default app
