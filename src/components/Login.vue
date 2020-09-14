<template>
	<div class="login">
		<h2>登录页面</h2>
	    <p>请先登录</p>
	    <p>{{$route.query.redirect}}</p>
		账号：<input type="text">
		密码：<input type="passworld">
		<button @click="loginIn">提交</button>
	</div>
</template>
<script>
	export default {
		name:"Login",
		methods:{
			loginIn(){
				// var that = this;
				// $.ajax(){
				// 	success:function(){
				// 		that.$router.replace($route.query.redirect);
				// 	}
				// }
			}
		},
		created(){
			// document.title = "用户";
            console.log("Login组件被创建");
		},
		activated(){
			console.log("组件被激活时调用");
		},
		deactivated(){
			console.log("组件失活时调用");
		},
		destroyed(){
            console.log("Login组件被销毁");
		}
	}
</script>