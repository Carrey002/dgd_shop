
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
export function getshopxq(id){
	return axios({
		url: '/detail?goodId='+id,
		method: 'GET'
	})
}

// 一级分类
export const getTypeOne = () => {
	return axios({
			method: 'get',
			url: "/getTypeOne/"
	})
}

// 二级分类
export const getTypeTwo = (param) => {
	return axios({
			method: 'get',
			url: "/getTypeTwo?type_one=" + param
	})
}

// 获取二级商品列表
export const getTypeTwoGoods = (param1, param2) => {
	return axios({
			method: 'get',
			url: `/getTypeTwoList?type_one=${param1}&type_two=${param2}`
	})
}

// 登录
export const goLogin = (data) => {
	return axios({
			method: 'get',
			url: `/login?userName=${data.username}&password=${data.password}`
	})
}

// 注册
export const goRegister = (data) => {
	return axios({
			method: 'get',
			url: `/register?userName=${data.username}&password=${data.password}`
	})
}
// 购物车列表
export const getShopCar = () => {
	let param = uni.getStorageSync('token')
	return axios({
			method: 'get',
			url: `/shopList`,
			params: { token: param }
	})
}


