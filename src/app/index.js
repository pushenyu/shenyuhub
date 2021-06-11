const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const errorHandler = require('../app/error-handle')
const useRoutes = require('../router')

const app = new Koa()

app.useRoutes = useRoutes

app.use(bodyParser())
app.useRoutes()
app.on('error', errorHandler)

module.exports = app