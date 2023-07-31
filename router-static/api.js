
function render(res, data, type = 'application/json') {
    res.writeHead(200, { 'Content-type': `${type};charset=utf-8` })
    res.write(data)
    res.end()
}
const api = {
    '/api/login': (req, res) => {
        const myURL = new URL(req.url, 'http://127.0.0.1')
        if (myURL.searchParams.get('username') === 'zhouhang' && myURL.searchParams.get('password') === '123') {
            render(res, `{"ok":1}`)
        } else {
            render(res, `{"ok":0}`)
        };
    },
    '/api/loginpost': (req, res) => {
        let params = ''
        req.on('data', chunk => {
            params += chunk
        })
        req.on('end', () => {
            params = JSON.parse(params)
            if (params.username === 'zhouhang' && params.password === '123') {
                render(res, `{"ok":1}`)
            } else {
                render(res, `{"ok":0}`)
            };
        })
    },
}
module.exports = api