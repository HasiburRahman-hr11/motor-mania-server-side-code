const homeRoute = require('./homeRoute');
const userRoute = require('./userRoutes');
const productRoute = require('./productRoutes');
const orderRoute = require('./orderRoutes');
const reviewRoutes = require('./reviewRoutes');

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
        handler: productRoute,
        path: '/products'
    },
    {
        handler: orderRoute,
        path: '/orders'
    },
    {
        handler: reviewRoutes,
        path: '/reviews'
    }
]

const useRoutes = (app) => {
    routes.map(route => {
        app.use(route.path, route.handler)
    })
}

module.exports = useRoutes;