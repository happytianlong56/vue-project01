<template>
	<div class="books">
		<h2>书店</h2>
		<!-- 1,params的方式获取 -->
		{{$route.params.num}}
	</div>
</template>
<script>
	export default {
		name:"Books",
		created(){
			// document.title = "书店";
		  // console.log(this.$route.params.num);
		  // router:通过vue-router实例化路由对象
		  // route:当前被激活的路由对象
		  console.log(this.$route);
		  console.log(this.$router);
		},
	}
</script>