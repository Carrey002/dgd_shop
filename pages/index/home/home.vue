<template>
	<view>
		<home-search></home-search>
		<home-swiper></home-swiper>
		<home-grid></home-grid>
		<image class="bar_box" src="http://www.liwanying.top/applate-icon/bar.png" mode="widthFix"></image>
		<view class="tabs_box">
			<lyz-tabs type="scroll" v-model="tabIndex" @change="(item) => getTab(item.id)" :columns="[{title:'猜你喜欢',id:'4'},{title:'休闲鞋',id:'5'},{title:'内衣',id:'2'},{title:'男装',id:'3'},{title:'女装',id:'6'},{title:'家用电器',id:'7'}]"></lyz-tabs>
		</view>
		<home-flow></home-flow>
	</view>
</template>

<script setup>
	import homeSearch from './components/home-search.vue'
	import homeSwiper from './components/home-swiper.vue'
	import homeGrid from './components/home-grid.vue'
	import homeFlow from './components/home-flow.vue'
	import {ref} from 'vue'
	
	
	import { getHomeList} from '@/api/api_method.js'
	const getHome = async ()=>{
		console.log('getHomeList')
		let arr = await getHomeList()
		console.log(arr)	
	}
	getHome()
	let tabIndex = ref(0)
	const getTab = (id) => {
		console.log(id)
	}
</script>

<style lang="scss" scoped>
.bar_box {
	width: 100%;
	height: 140rpx;
}
.tabs_box {
	padding: 24rpx 0;
}
</style>
