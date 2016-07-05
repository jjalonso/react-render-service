
import express from 'express'
import bodyParser from 'body-parser'

import renderComponent from './renderer'
import resolveRoute from './resolver'

import { routes, reducers } from '../../react-client/dist/client-bundle.js'

console.log('ROUTES ES', routes)

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
  app.use((req, res) => {
    let resolved = resolveRoute(req.query.c, routes)
    switch (resolved.code) {
      case 200:
        // Resolving success
        let rendered = renderComponent(resolved.data, reducers, req.body)
        rendered.code = resolved.code
        res.send(rendered)
        break;
      default:
        // Other error
        res.code = resolved.code;
        res.send({code: resolved.code})
    }
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
