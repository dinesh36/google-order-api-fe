const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require("http-proxy-middleware")
const NODE_ENV = process.env.NODE_ENV || 'development';
const port = 3001;
const isDevelopment = process.env.NODE_ENV !== 'production';
const app = next({ dev: isDevelopment });
const handle = app.getRequestHandler();

const apiServer = `http://localhost:3000`;


app.prepare().then(() => {
    const server = express()

    if (isDevelopment) {
        // Set the API proxy
        server.use('/api', createProxyMiddleware({
            target: apiServer,
            pathRewrite: {'^/api': '/api'},
            changeOrigin: true
        }));

        //Set the download image proxy
        const environmentPrefix = NODE_ENV === 'production' ? '': NODE_ENV;
        const siteContentUrlPrefix = environmentPrefix ?`/${environmentPrefix}/site-content`: `/site-content`;
        server.use(siteContentUrlPrefix, createProxyMiddleware({target: apiServer}));
    }

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
}).catch(err => {
    console.log('Error:::::', err)
})


