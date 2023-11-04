const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = (app: { use: (arg0: any) => void; }) => {
  app.use(
     createProxyMiddleware("/update-post/:id", {
       target: 'https://cloud.appwrite.io/v1',
       changeOrigin: true,
     })
  )
}