import express from 'express'

const app = express()

app.get('/', (req, res) => {
  console.log('executado no servidor')
  return res.json({ message: 'hello world' })
})

app.listen(3333, () => {
  console.log('server is running on port 3333')
})
