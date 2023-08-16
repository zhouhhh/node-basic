const express = require('express')
const app = express()

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.send({ ok: 1 })
})
app.listen(3001)

//websocket响应
const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 8080 });
wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });

    ws.send('欢迎来到聊天室');
});