<template>
	<div class="user">
		<h2>用户</h2>
		<!-- 2,query的方式获取 -->
		{{$route.query.userid}}
	</div>
</template>
<script>
	export default {
		name:"User",
		created(){
			// document.title = "用户";
            console.log("user组件被创建");
		},
		activated(){
			console.log("组件被激活时调用");
		},
		deactivated(){
			console.log("组件失活时调用");
		},
		destroyed(){
            console.log("user组件被销毁");
		}
	}
</script>