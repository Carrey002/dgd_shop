<template>
	<div class="box">
		<div class="goodBox" v-for="(item,index) in typeTwoList">
			<h3>{{item}}</h3>
			<goods :typeOne="typeOne" :typeTwo="item" />
		</div>
	</div>
</template>

<script setup>
	import {ref,onBeforeMount} from 'vue'
	import {getTypeTwo} from '@/api/api_method.js'
	import goods from './goods.vue'
	const props = defineProps({typeOne:String,typeTwo:String})
	const typeOne = ref(props.typeOne.text)
	const typeTwoList = ref([])
	
	
	// 根据typeOne获取typeTwo
	onBeforeMount(async()=>{
		let temp = (await getTypeTwo(typeOne.value)).data
		console.log(temp)
		typeTwoList.value = temp
	})

</script>

<style scoped lang="scss">
	.goodBox{
		// width: 100%;
		h3{
			text-align: center;
			margin: 0 2%;
			padding: 2% 0;
			background-color: #eee;
		}
	}
</style>