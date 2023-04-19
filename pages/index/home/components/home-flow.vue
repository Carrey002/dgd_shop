<template>
	<view class="flow_box">
		
	</view>
</template>
<script setup>
	import {
		ref,
		reactive,
		computed
	} from 'vue';
	const data = reactive({
		list: []
	})
	const column = ref(2);

	function add() {
		const newArr = [{
				image: 'https://via.placeholder.com/58x100.png/FF7F50',
				title: '我是标题8',
			},
			{
				image: 'https://via.placeholder.com/59x100.png/C0C0C0',
				title: '我是标题9',
			},
			{
				image: 'https://via.placeholder.com/60x100.png/FAEBD7',
				title: '我是标题10',
			}
		]
		data.list = data.list.concat(newArr);
	}
	const tapClick = (item) => {
		console.log(item)
		uni.navigateTo({
			url: '/pages/goodsDetails/goodsDetails'
		})
	}
</script>
<style lang="scss" scoped>
	.flow_box {
		padding: 0 32rpx;
	}
	.item {
		padding-top: 16rpx;
		.title {
			max-height: 72rpx;
			line-height: 28rpx;
		}
	}
</style>
