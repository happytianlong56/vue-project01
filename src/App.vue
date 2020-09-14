<template>
  <div id="app">
     hell vue!
     <!-- 使用路由 -->
     <router-link to="/home">首页</router-link>
     <!-- 表达式 -->
     <!-- <router-link :to="test">首页</router-link> -->
     <!-- 字符串 -->
     <!-- <router-link to="/about/666">关于</router-link> -->
     <!-- <button @click="jumpInAbout">跳转关于</button> -->
     <!-- 对象方式 -->
     <router-link :to="{path:'/about/999'}">关于</router-link>
     <!-- <button @click="jumpInAbout">跳转关于</button> -->

     <!-- 命名路由 -->
     <router-link :to="{name:'books',params:{num:666}}">书店</router-link>
     <!-- <button @click="jumpInBooks">跳转书店</button> -->

     <!-- 带查询参数:query -->
     <!-- <router-link :to="{path:'/user',query:{userid:101}}">用户</router-link> -->
     <button @click="jumpInUser">跳转用户</button>
     <!-- keep-alive:缓存组件 -->
     <!-- 被keep-alive缓存的组件,只会在第一次使用时创建并激活,以后切换的话就会触发activated,deactivated.不会被销毁 -->
     <!-- include="Home":指定某个组件被缓存
     Home:组件的名称 -->
     <!-- exclude:指定某个组件不被缓存 -->
     <keep-alive include="Home,About">
        <!-- 所有组件都会被缓存 -->
        <router-view></router-view>
     </keep-alive>
     <h3>总结:</h3>
     <p>
      路由传参两种方式:<br>
      1:params:3种:字符串,对象,命名路由
      2:query:跳转路由时通过query传递参数
     </p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
       test:"/home"
    }
  },
  components: {
   
  },
  methods:{
    jumpInAbout(){
      // 字符串
      // this.$router.push("/about/888");
      // 对象
      this.$router.push({
        path:"/about/111"
      });
    },
    jumpInBooks(){
      this.$router.push({
        name:"books",
        params:{num:333}
      });
    },
    jumpInUser(){
      this.$router.replace({
        path:"/user",
        query:{userid:2222}
      },function(){

      },function(){
        
      });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
