<template>
	<div class="box">
		<div class="good" v-for="(item,index) in goodList" :data-id="item.Id" @click="goDetail(item.Id)">
			<img :src="item.imageUrl" alt="">
			<p>{{item.title}}</p>
		</div>
	</div>
</template>

<script setup>
	import {ref,onBeforeMount} from 'vue'
	import {getTypeTwoGoods} from '@/api/api_method.js'
	const props = defineProps({typeOne:String,typeTwo:String})
	const typeOne = ref(props.typeOne)
	const typeTwo = ref(props.typeTwo)
	const goodList = ref([])
	// 获取商品列表
	onBeforeMount(async()=>{
		let temp = (await getTypeTwoGoods(typeOne.value,typeTwo.value)).data
		temp.forEach(item=>{
			goodList.value.push(item)
		})
	})
	
	const goDetail = (id)=>{
		uni.navigateTo({ url:'/pages/goodsDetails/goodsDetails?id='+id })
	}
</script>

<style scoped lang="scss">
	.good{
		display: inline-block;
		vertical-align: top;
		width: 46%;
		margin: 2%;
		border: 3px solid #f5f5f5;
		overflow: hidden;
		background-color: #f5f5f5;
		position: relative;
		box-sizing: border-box;
		
		img{
			width: 100%;
		}
		p{
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
</style>