<template>
	<view>
		<swiper class="swiper" circular indicator-active-color="#fff" indicator-color="rgba(255,255,255,0.6)"
			:indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item class="swiper-item flexr-jsc flex-aic" v-for="(item,index) in bannerlist" key="item">
				<image mode="aspectFill" class="swiper-item-img"
					:src="item.image">
				</image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	import {ref} from "vue"
	import {getHome} from "../../../../api/api_method.js"
	let bannerlist = ref([])
	let getdata = async()=>{
		let obj = await getHome()
		bannerlist.value = obj.data.homeData.banners
	}
	getdata()
</script>

<style lang="scss" scoped>
.swiper {
		height: 304rpx;
		.swiper-item {
			width: 100%;
			height: 100%;
		}
		.swiper-item-img {
			width: 686rpx;
			height: 100%;
		}
	}
</style>