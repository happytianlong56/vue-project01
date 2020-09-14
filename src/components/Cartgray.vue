<template>
	<div class="catgray">
		<h2>分类</h2>
	</div>
</template>
<script>
	export default {
		name:"Catgray",
		created(){
          console.log("分类组件被创建");
		},
		destroyed(){
          console.log("分类组件被销毁");
		},
		activated(){
		  console.log("分类组件被激活");
		},
		deactivated(){
		  console.log("分类组件被失活");
		}
	}
</script>