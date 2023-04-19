
import axios from "./axios.js"
import ajax from "./api"
// 首页列表

const baseUrl = "http://47.113.230.184:5566"
export function getHome() {
	return ajax({
		url: baseUrl,
		method: 'GET'
	})
};
// 首页列表
export function getHomeList (page){
    return axios({
        method: 'get',
        url: "/hotList?page=" + page
    })
}



