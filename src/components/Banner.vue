<template>
	<div class="banner">
		<h2>轮播图组件</h2>
	</div>
</template>
<script>
	export default {
		name:"Banner",
		created(){
          console.log("轮播图组件被创建");
		},
		destroyed(){
          console.log("轮播图组件被销毁");
		},
		activated(){
		  console.log("轮播图组件被激活");
		},
		deactivated(){
		  console.log("轮播图组件被失活");
		}
	}
</script>