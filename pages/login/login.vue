<template>
	<div class="box">
	<div class="formBox">
	<h2 class="title">欢迎加入大狗蛋商城</h2>
	<Form @submit="onSubmit" class="form" id="loginForm">
	  <CellGroup inset>
	    <Field
	      v-model="username"
	      name="username"
	      label="用户名"
	      placeholder="用户名"
	      :rules="[{ required: true, message: '请填写用户名' }]"
	    />
	    <Field
	      v-model="password"
	      type="password"
	      name="password"
	      label="密码"
	      placeholder="密码"
	      :rules="[{ required: true, message: '请填写密码' }]"
	    />
	  </CellGroup>
	  <div style="margin: 16px;" class="bottom">
	    <Button round  type="primary" native-type="submit" :loading="loadFlag" loading-text="正在登录..." color="linear-gradient(to right, #ff6034, #ee0a24)" class="button">
	      登录
	    </Button>
	    <Button type="primary" round class="button" native-type="" @click="onRegister" :loading="loadFlag_reg" loading-text="正在注册...">
	      注册
	    </Button>
	  </div>
	</Form>	
		
	</div>
	</div>
</template>

<script setup>
	import {ref,reactive} from 'vue'
	import {Field,Button,CellGroup,Form,showNotify,showToast} from 'vant'
	import {goLogin,goRegister} from '@/api/api_method.js'
	const username = ref('');
	const password = ref('');
	const loadFlag = ref(false);
	const loadFlag_reg = ref(false);
	const method = ref('login')
	const onSubmit = async (values) => {
		loadFlag.value = true
		let temp = await goLogin(values)
		loadFlag.value = false
		if(temp.data.code == 1){
			showToast('登录成功')
			showNotify({ type: 'success', message: '登陆成功' });
			uni.setStorageSync('user_info',temp.data)
			uni.setStorageSync('token',temp.data.token)
			setTimeout(()=>{uni.navigateBack({
				success:()=>{setTimeout(()=>{location.reload()},500)}
			})},1000)
		}else{ showNotify({ type: 'success', message: '登陆失败' }); }
		
	};
	
	const onRegister = async() =>{
		let values = {
			username:loginForm.username.value,
			password:loginForm.password.value,
		}
		loadFlag_reg.value = true
		let temp = await goRegister(values)
		loadFlag_reg.value = false
		console.log(temp)
		if(temp.data.code == 1){
			showNotify({ type: 'success', message: '注册成功' });
		}else{
			showNotify({ type: 'danger', message: '注册失败' });
		}
	}
</script>

<style scoped>
	.box{
		padding: 3vh 0;
	}
	.formBox{
		margin: 8vh 5vw;
		padding: 2vh 0;
		border: 1px solid #333;
		border-radius: 10px;
		
	}
	.title{
		text-align: center;
	}
	.form{
		margin: 20px;
		padding: 10px 0 0;
	}
	.bottom{
		margin: 0;
		padding: 0 10px;
		position: relative;
		display: flex;
		justify-content:space-between;
		.button{
			width: 48%;
			vertical-align: top;
		}
	}
</style>