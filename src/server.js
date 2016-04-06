import express from 'express'
import bodyParser from 'body-parser'
import renderer from './react'


let app = express()
let port = process.argv[2]

app.use(bodyParser.json())

app.post('/', (req, res) => {
  // let component = eval(req)
  console.log(req.body)
  res.send('X')
})

app.listen(port, function () {
  console.log(`
    **************************************
    react-render listening on port ${port}
    **************************************
    `)
})
