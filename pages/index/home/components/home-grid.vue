<template>
		<swiper class="swiper" :style="{
			height: 4 <= 4 ? '170rpx' : '360rpx'
		}" >
			<swiper-item class="swiper-item">
				<lyz-grid @tapGrid="tapGrid" :border="false" :columnNum="5"
					:columns="listarr">
				</lyz-grid>
			</swiper-item>
		</swiper>
</template>

<script setup>
	import {ref} from "vue"
	import {getHome} from "../../../../api/api_method.js"
	const tapGrid = () => {
		
	}
	let listarr = ref([])
	let fn =async()=>{
		let list =await getHome()
		listarr.value = list.data.homeData.operationNavigation
	}
	fn()
</script>

<style lang="scss" scoped>
</style>
