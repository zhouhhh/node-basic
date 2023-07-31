const fs = require('fs')
const path = require('path')
const mime = require('mime')
function render(res, path, type = 'text/html') {
    res.writeHead(200, { 'Content-type': `${type};charset=utf-8` })
    res.write(fs.readFileSync(path), 'utf-8')
    res.end()
}
const route = {
    '/login': (req, res) => {
        render(res, './static/login.html')
    },
    '/home': (req, res) => {
        render(res, './static/home.html')
    },
    '/': (req, res) => {
        render(res, './static/home.html')
    },
    '/404': (req, res) => {
        if (readStaticFile(req, res)) {
            return
        }
        res.writeHead(404, { 'Content-type': 'text/html;charset=utf-8' })
        res.write(fs.readFileSync('./static/404.html'), 'utf-8')
        res.end()
    },
    // '/favicon.ico': (req, res) => {
    //     render(res, './static/favicon.ico', 'image/x-icon')
    // },
}
function readStaticFile(req, res) {
    const myURL = new URL(req.url, 'http://127.0.0.1')
    const { pathname } = myURL
    const fullpath = path.join(__dirname, 'static', pathname)
    if (fs.existsSync(fullpath)) {
        render(res, fullpath, mime.getType(pathname.split('.')[1]))
        return true
    } else {
        return false
    }
}
module.exports = route