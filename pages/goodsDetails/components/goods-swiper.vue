<template>
	<view style="padding: 24rpx 0 20rpx;" class="bgc_fff">
		<swiper class="swiper" circular indicator-active-color="#fff" indicator-color="rgba(255,255,255,0.6)"
			:indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item class="swiper-item flexr-jsc flex-aic" v-for="(item,index) in arr" key="index">
				<image mode="aspectFill" class="swiper-item-img"
					:src="item">
				</image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	import {
		onReachBottom,
		onLoad,
	} from '@dcloudio/uni-app';
	import {
		getshopxq
	} from '@/api/api_method.js'
	import {
		ref
	} from "vue";
	let arr = ref([])
	onLoad(async (options) => {
		console.log(options);
		let res = await getshopxq(options.id)
		arr.value = JSON.parse(res.data[0].imgs)
		console.log(arr.value);
	})
</script>

<style lang="scss" scoped>
.swiper {
		height: 560rpx;
		.swiper-item {
			width: 100%;
			height: 100%;
		}
		.swiper-item-img {
			width: 686rpx;
			border-radius: 10rpx;
			height: 100%;
		}
	}
</style>