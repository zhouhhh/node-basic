//jsonwebtoken 封装
const jwt = require("jsonwebtoken")
const secret = "zhh"

const JWT = {
    //生成签名
    //expiresIn是过期时间，例'24h'
    //value是要传入的数据
    generate(value, expiresIn) {
        return jwt.sign(value, secret, { expiresIn })
    },
    verify(token) {
        try {
            return jwt.verify(token, secret)//返回的是解析后的token，原始数据+自带的数据构成的对象
        } catch (e) {
            return false//通过上面按个方法会自动解出是否过期，可是会报错，所以用try-catch
        }
    }
}

module.exports = JWT