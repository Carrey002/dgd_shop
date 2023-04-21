<template>
	<view>
		<TreeSelect
		  v-model:main-active-index="activeIndex"
		  height="calc(100vh - 100rpx - 44px)"
		  :items="items"
		>
			<template #content>
				<template class="cc" v-for="(item,index) in items">
					<classContent :typeOne="item" v-if="activeIndex == index" />
				</template>
			</template>
		</TreeSelect>
	</view>
</template>

<script setup>
	import { ref, onBeforeMount, watchEffect } from 'vue';
	import { TreeSelect	} from 'vant';
	import { getTypeOne	} from '@/api/api_method.js'
	import classContent from './components/classContent.vue'

	const activeIndex = ref(0);
	
	const items = ref([])
	onBeforeMount(async () => {
		let temp = await getTypeOne()
		temp.data.forEach(item =>{ items.value.push({text:item}) })
	})
	watchEffect(()=>{
		console.log(activeIndex.value)
	})
	
</script>

<style lang="scss" scoped>
	.cc{
		background-color: #035;
		border: 1px solid #333;
		padding: 20px;
	}
	.active{
		font-size: 30px;
	}
</style>