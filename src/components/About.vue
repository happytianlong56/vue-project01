<template>
	<div class="about">
		<h2>关于</h2>
		<!-- 1,params的方式获取 -->
		{{$route.params.num}}
	</div>
</template>
<script>
	export default {
		name:"About",
		created(){
			// document.title = "关于";
		  // console.log(this.$route.params.num);
		  // router:通过vue-router实例化路由对象
		  // route:当前被激活的路由对象
		  // console.log(this.$route);
		  // console.log(this.$router);
		  console.log("About组件被创建");
		},
		mounted(){
           console.log("+++++");
		},
		destroyed(){
			console.log("About组件被销毁");
		}
	}
</script>