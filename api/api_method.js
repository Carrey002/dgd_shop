import axios from "./api"
// const baseUrl = "http://47.113.230.184:5566"
export function getHomeList() {
	return axios({
		url: '/by/hotList?page=1',
		method: 'GET'
	})
	
};