<template>
	<view>
		<home-search></home-search>
		<home-swiper></home-swiper>
		<home-grid></home-grid>

		<image class="bar_box" src="http://www.liwanying.top/applate-icon/bar.png" mode="widthFix"></image>
		<view class="tabs_box">
			<lyz-tabs type="scroll" v-model="tabIndex" @change="(item) => getTab(item.id)"
				:columns="arrlist"></lyz-tabs>
		</view>
		<home-flow></home-flow>
	</view>
</template>

<script setup>
	import homeSearch from './components/home-search.vue'
	import homeSwiper from './components/home-swiper.vue'
	import homeGrid from './components/home-grid.vue'
	import homeFlow from './components/home-flow.vue'


	import {
		ref
	} from 'vue'
	import {
		getHome
	} from "../../../api/api_method.js"

	let tabIndex = ref(0)
	const getTab = (id) => {
		console.log(id)
	}
	let list = ref([])
	let arrlist = ref([])
	let getdata = async () => {
		let obj = await getHome()
		console.log(obj);
		list.value = obj.data.homeData.oneLevelCategoryList
		arrlist.value = list.value.map((ele, index) => {
			return {
				title: ele.categoryName,
				id: ele.categoryId
			}
		})
		let obj1 = {
			title: "热门",
			id: ""
		}
		arrlist.value.unshift(obj1)
	}
	getdata()
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