<!-- 第一步:创建路由所对应的组件 -->
<!-- 路由的切换实质就是切换路由所对应的组件 -->
<template>
	<div class="home">
		<h2>首页</h2>
		<router-link to="/home/banner">轮播图</router-link>
		<router-link to="/home/catgray">分类</router-link>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>
<script>
	export default {
		name:"Home",
		data(){
			return{
				path:"/home/catgray"
			}
		},
		created(){
			// document.title = "首页";
			console.log("home组件被创建");
		},
		activated(){
			// this.$router:路由对象
			this.$router.replace(this.path);
            console.log("home组件激活");
		},
		deactivated(){
            
		},
		destroyed(){
            console.log("home组件被销毁");
		},
		// 路由进入之前
		beforeRouteEnter (to, from, next) {
	    // 在渲染该组件的对应路由被 confirm 前调用
	    // 不！能！获取组件实例 `this`
	    // 因为当守卫执行前，组件实例还没被创建
	    console.log("进入home路由之前");
	    next();
	    },
	    // 路由更新之前
	    beforeRouteUpdate (to, from, next) {
	    // 在当前路由改变，但是该组件被复用时调用
	    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
	    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
	    // 可以访问组件实例 `this`
	    console.log("更新home路由之前");
	    next();
	    },
	    // 路由离开之前
		beforeRouteLeave (to, from, next) {
		    // 导航离开该组件的对应路由时调用
		    // 可以访问组件实例 `this`
		    console.log("离开home路由之前");
		    this.path = from.path;
		    next();
		}
	}
</script>




















