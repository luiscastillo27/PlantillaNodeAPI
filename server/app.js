import express from 'express'
import { about, help, places, privacy, report, users } from './routes'

const app = express()
app.use('/api/about', about)
app.use('/api/help', help)
app.use('/api/place', places)
app.use('/api/privacy', privacy)
app.use('/api/report', report)
app.use('/api/user', users)

export default app
