import Vue from "vue";
import VueRouter from "vue-router";
// 第二步:配置路由信息
import Home from "../components/Home";
const Cartgray = ()=>import ("../components/Cartgray");
const About = ()=>import ("../components/About");
const Books = ()=>import ("../components/Books");
const User = ()=>import ("../components/User");
const Banner = ()=>import ("../components/Banner");
const Login = ()=>import ("../components/Login");
Vue.use(VueRouter);

const routes = [
   // 匹配路由加载对应的组件
   {
      path:'/',
      redirect:"/home"
   },
   {
   	 path:"/home",
   	 component:Home,
       // 路由元信息
       meta:{
          title:"首页"
       },
   	 children:[
   	   // {
       //      path:"",
       //      redirect:"catgray"
   	   // },
   	   {
	   	   	path:"catgray",
	   	   	component:Cartgray
   	   },
         {
               path:"banner",
               component:Banner
         }
   	 ]
   },
   {
   	 path:"/about/:num",
       meta:{
          title:"关于",
          requireAuth:true
       },
   	 component:About
   },
   {
       path:"/books",
       meta:{
          title:"书店",
          requireAuth:true
       },
       // 命名路由
       name:"books",
       component:Books
       // ,
       // 路由独享:针对某一个路由的处理
       // beforeEnter: (to, from, next) => {
       //  // ...
       //  // if(to.name!=="target"){
       //  //   next({name:"/Error"});
       //  // }else{
       //  //   next();
       //  // }
       // }
   },
   {
       path:"/user",
       meta:{
          title:"用户",
          requireAuth:true
       },
       component:User
   },
   {
    path:"/login",
       meta:{
          title:"登录"
       },
       component:Login
   }
]

const router = new VueRouter({	
	mode:"history",
	routes
})
// 利用全局导航守卫做登录权限验:
// 如果用户没有登录那么就只能看首页,
// 如果登录过所有的页面都可以跳进去


// 设置全局的前置导航守卫:项目中任何路由的变化都会触发
// 路由一单发生改变会在改变之前触发beforeEach
router.beforeEach((to,from,next)=>{
   // console.log(to,from,"-----");
   // 利用全局导航守卫修改标题

   document.title = to.matched[0].meta.title;
   // 登录验证
   // token:用户第一次登录成功之后由后台返回的用户标识
   var token = window.localStorage.getItem("token");
   //matched 一个数组，包含当前路由的所有嵌套路径片段的路由记录 。路由记录就是 routes 配置数组中的对象副本 (还有在 children 数组)。
  
   if(to.matched.some(record=>record.meta.requireAuth)&&(!token||token===null)){
      next({
        path:"/login",
        query:{redirect:to.fullPath}
      });
   }else{
       console.log("除home页面以外");
       next();
   }
})
router.afterEach((to,from)=>{
   // console.log("----");
})
export default router;
