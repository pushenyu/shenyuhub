const app = require('./app')
require('./app/database')

const config = require('./app/config')

// 路径 - 中间件映射

app.listen(config.APP_PORT, () => {
  console.log(`服务器在${config.APP_PORT}启动成功~`);
})