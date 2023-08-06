const ologin = document.querySelector('#login')
const ologinpost = document.querySelector('#loginpost')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
ologin.onclick = () => {
    //get请求
    fetch(`/user?username=${username.value}&password=${password.value}`)
        .then(res => res.text()).then(res => {
            console.log(res);
        })
}
ologinpost.onclick = () => {
    //post请求
    fetch(`/user`, {
        method: 'POST',
        // body: JSON.stringify({ //传json格式的参数
        //     username: username.value,
        //     password: password.value
        // }),
        body: `username=${username.value}&password=${password.value}`,//传form格式的参数
        headers: {
            // 'Content-type': 'application/json'//json格式
            'Content-type': 'application/x-www-form-urlencoded'//json格式
        }
    })
        .then(res => res.text()).then(res => {
            console.log(res);
        })
}