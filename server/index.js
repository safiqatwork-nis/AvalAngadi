import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/api/health', (_request, response) => {
  response.json({ name: 'Aval Angadi', status: 'ok' })
})

app.listen(port, () => {
  console.log(`Aval Angadi API listening on port ${port}`)
})