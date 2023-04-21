<template>
	<div :style="{textAlign:'center'}">
		<Button @click="logout">退出登录</Button>
	</div>
</template>

<script setup>
	import {Button,showDialog} from 'vant'
	import { showConfirmDialog } from 'vant';
	const logout = ()=>{
		showConfirmDialog({
			title: '退出登录',
			message: '确定退出登录吗？',
		})
		.then(() => {
			// on confirm
			uni.removeStorageSync('user_info')
			uni.removeStorageSync('token')
			uni.switchTab({url:"/pages/tabbar/home/home",success:()=>{location.reload()}})
		})
		.catch(() => {
			// on cancel
			console.log('取消退出登录')
		});
	}
</script>

<style>
</style>