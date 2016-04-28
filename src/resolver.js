import { match } from 'react-router'


function resolveRoute(url, routes) {
  let status = {}
  match({routes, location: url}, (error, redirectLocation, renderProps) => {
    if (error) {
      status.code = 500
    } else if (redirectLocation) {
      status.code = 302
      status.data = redirectLocation.pathname + redirectLocation.search
    } else if (renderProps) {
      status.code  = 200
      status.data = renderProps
    } else {
      status.code = 404
    }
  })
  return status
}

export default resolveRoute
