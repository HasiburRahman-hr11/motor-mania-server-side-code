const homeRoute = require('./homeRoute');

const routes = [
    {
        handler: homeRoute,
        path: '/'
    }
]

const useRoutes = (app) => {
    routes.map(route => {
        app.use(route.path, route.handler)
    })
}

module.exports = useRoutes;