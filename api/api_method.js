import axios from "./axios.js"
// 首页列表
export function getHomeList (page =1){
    return axios({
        method: 'get',
        url: "/hotList?page=" + page
    })
}