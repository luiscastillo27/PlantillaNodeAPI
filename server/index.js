import Debug from 'debug'
import app from './app'

const PORT = 2715
const debug = new Debug('events-api:root')

app.listen(PORT, () => {
  debug(`Server running at port ${PORT}`)
})
