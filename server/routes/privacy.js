import express from 'express'

const app = express.Router()

app.get('/', (req, res) => {
  res.send('Hola desde privacidad')
})

export default app
