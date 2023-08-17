const express = require('express')
const app = express()

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.send({ ok: 1 })
})
app.listen(3001)

//websocket响应
const WebSocket = require('ws');
const WebSocketServer = WebSocket.WebSocketServer
const wss = new WebSocketServer({ port: 8080 });
wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data, isBinary) {
        console.log('received: %s', data);

        //转发给所有人
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN && client !== ws) {//不给自己发
                client.send(data, { binary: isBinary });
            }
        })
    });

    ws.send('欢迎来到聊天室');
});