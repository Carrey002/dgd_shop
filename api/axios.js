import axios from "axios"

const app = axios.create({
    // baseURL: process.env.VUE_APP_base_url,
    baseURL: '/by',
    timeout: 5000
})

// 请求拦截
// app.interceptors.request.use(config => {
//     if (localStorage.getItem("token")) {
//         config.headers.token = localStorage.getItem("token")
//     }
//     return config
// },
//     error => {
//         console.log('axios出了一个错误');
//         return Promise.reject(error)
//     }
// )
// 响应拦截 
// app.interceptors.response.use(response => {
//     // response 请求成功之后的 结果
//     if (response.code !== 200) {
//         console.log(response);
//         return ('什么都没有')
//     } else {
//         return response
//     }
// })




export default app