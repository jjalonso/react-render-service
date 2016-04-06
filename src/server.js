import express from 'express'
import bodyParser from 'body-parser'

import renderer from './renderer'


let arg = process.argv[2]
let argParsed = Number.parseInt(arg)

if (arg === '--help' || arg === '-h') {
  console.log(`
    react-render-service.
    A simple microservice to render React/Redux components.

    Usage:
      react-render.js [port] : Use specified port. Default 8080.

  `)
} else if (!argParsed) {
  console.log(`
    ERROR: Invalid argument.

    Use react-render.js --help or -h for usage help.
  `)
} else {
  main()
}


function main() {
  let app = express()
  app.use(bodyParser.json())
  app.post('/', (req, res) => {
    // console.log(req.body)
    let render = renderer(req.body.compPath, req.body.reducerPath)
    res.json(render)
  })

  app.listen(argParsed, function () {
    console.log(`
      **********************************************
      react-render-service listening on port ${argParsed}
      **********************************************
                  - Happy Rendering -
      `)
  })
}
