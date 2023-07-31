const ologin = document.querySelector('#login')
const ologinpost = document.querySelector('#loginpost')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
ologin.onclick = () => {
    //get请求
    fetch(`/api/login?username=${username.value}&password=${password.value}`)
        .then(res => res.text()).then(res => {
            console.log(res);
        })
}
ologinpost.onclick = () => {
    //post请求
    fetch(`/api/loginpost`, {
        method: 'POST',
        body: JSON.stringify({
            username: username.value,
            password: password.value
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(res => res.text()).then(res => {
            console.log(res);
        })
}