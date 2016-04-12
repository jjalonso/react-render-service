
import express from 'express'
import bodyParser from 'body-parser'

import renderComponent from './renderer'
import { ModuleResolver } from '../symlink-reactnet/client-bundle.js'


let arg = process.argv[2]
// let argParsed = Number.parseInt(arg2)

if (arg === '--help' || arg === '-h') {
  console.log(`
    react-render-service.
    A simple microservice to render React/Redux components.

    Usage:
      react-render.js [routes] [port]

    routes    JSON file mapping routes to components. Required.
    port      Use specified port. Optional.

  `)
}
else if (!arg) {
  console.log(`
    ERROR: Missing routes filepath.

    Use react-render.js --help or -h for usage help.
  `)
}
else {
  main()
}

function main() {
  // Create app
  let app = express()
  app.use(bodyParser.json())
  // render http end-point
  app.post('/', (req, res) => {
    let modules = ModuleResolver.resolvePath(req.query.path)
    if (modules === null) {
      res.status(404).send('Path not found in routes')
    }
    let rendered = renderComponent(modules.component, modules.reducer, req.body)
    res.send(rendered)
  })

  let port = process.argv[3] || 8080
  app.listen(port, function () {
    console.log(`
      *******************************************
      react-render-service listening on port ${port}
      *******************************************
                  - Happy Rendering -
      `)
  })
}
