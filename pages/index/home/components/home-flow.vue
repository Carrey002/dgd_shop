<template>
	<view class="flow_box">
		<view class="shop_list" v-for="(item,index) in list" key="index" @click="todetail(item.Id)">
			<img :src="item.imageUrl" alt="" class="img">
			<p class="price">
				<span class="price-tb">￥</span>
				<span>{{item.priceStr}}</span>
			</p>
			<p class="bq">
				<span class="bp">爆品</span>
				<span class="yqp">一起拼</span>
			</p>
			<p class="title">{{item.title}}</p>
			<p class="hp">{{item.evaluate}}条好评</p>
		</view>
	</view>
</template>
<script setup>
	import {
		ref,
		reactive,
		computed
	} from 'vue';
	import {
		getHomeList
	} from "@/api/api_method.js"
	import {
			onReachBottom,
			onLoad,
		 } from '@dcloudio/uni-app';
	let page = ref(1)
	let list = ref([])
	let getlist = async () => {
		let zt = await getHomeList(page.value)
		console.log(zt.data);
		list.value = zt.data
	}
	let todetail = (e)=>{
		console.log(e);
		uni.navigateTo({
			url:'/pages/goodsDetails/goodsDetails?id='+e
		})
	}
	onLoad(()=>{
		getlist()
	})
	onReachBottom(()=>{
		console.log("触底了");
	})
</script>
<style lang="scss" scoped>
	.flow_box {
		padding: 0 32rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.shop_list {
		width: 343rpx;
		height: 380rpx;
		margin-top: 30rpx;

		.img {
			width: 100%;
		}

		.price {
			font-size: 32rpx;
			color: #F7A701;

			.price-tb {
				font-size: 22rpx
			}
		}

		.bq {
			font-size: 18rpx;

			.bp {
				border: none;
				background-color: #AB7FD1;
				color: white;
				padding: 3rpx 8rpx;
				display: inline-block;
				vertical-align: middle;
			}

			.yqp {
				border: 1rpx solid #FC6291;
				color: #FC6291;
				display: inline-block;
				vertical-align: middle;
				margin-left: 10rpx;
			}
		}

		.title {
			font-size: 28rpx;
			margin-top: 8rpx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis
		}

		.hp {
			font-size: 18rpx;
			color: #666;
			margin-top: 12rpx;
		}
	}
</style>