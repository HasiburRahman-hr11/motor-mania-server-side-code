const homeRoute = require('./homeRoute');
const userRoute = require('./userRoutes');
const productRoute = require('./productRoutes');

const routes = [
    {
        handler: homeRoute,
        path: '/'
    },
    {
        handler: userRoute,
        path: '/users'
    },
    {
        handler:productRoute,
        path:'/products'
    }
]

const useRoutes = (app) => {
    routes.map(route => {
        app.use(route.path, route.handler)
    })
}

module.exports = useRoutes;