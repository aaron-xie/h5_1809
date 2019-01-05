import Vue from 'vue';
// 1.安装 npm install -D vue-router
// 2.引入Vue-Router
import VueRouter from 'vue-router';//console.dir(VueRouter)
// 3. 使用插件
Vue.use(VueRouter);


// 引入路由组件
import Home from '@com/Home';
import List from '@com/List';
  import In_theaters from '@com/list/In_theaters';
  import Coming_soon from '@com/list/Coming_soon';
  import New_movies from '@com/list/New_movies';
  // import Weekly from '@com/list/Weekly';
  import Top250 from '@com/list/Top250';
import Mine from '@com/Mine';
import Search from '@com/Search';
import Detail from '@com/Detail';
import CityList from '@com/CityList';
import Login from '@com/Login';

// 4.实例化路由
const routes = [
    // { path: '/', component: Home },
    { name:'Home', path: '/home', component: Home },
    { 
      // name:'List', 
      path: '/list', 
      component: List,
      children:[
        {
          path:'',//默认子路由
          redirect:{name:'In_theaters'}
        },
        {
          path:'in_theaters',//当url为/list/in_theaters匹配这个子路由
          name:'In_theaters',
          component:In_theaters,
          meta:{
              requireAuth:true
          }
        },
        {
          path:'coming_soon',
          name:'Coming_soon',
          component:Coming_soon
        },
        {
          path:'new_movies',
          name:'New_movies',
          component:New_movies
        },
        // {
        //   path:'weekly',
        //   name:'Weekly',
        //   component:Weekly
        // },
        {
          path:'top250',
          name:'Top250',
          component:Top250
        }
      ]
    },
    // { name:'List', path: '/list/:type', component: List },
    { 
      name:'Mine', 
      path: '/mine', 
      component: Mine,
      meta:{
          requireAuth:true
      }
    },
    { 
      name:'Search', 
      path: '/search', 
      component: Search,
      
      // Boolean模式：把pramas中的参数写入Search组件的属性
      // 等效于：<Search {...params} />
      props:true 

      // Function模式
      // 等效于：<Search :keywordk="route.query.keyword"/>
      // props:(route)=>{
      //   return {keyword:route.query.keyword}
      // }

      // Object模式：静态属性
      // 等效于：<Search name="tiantian" age="28"/>
      // props:{name:'tiantian',age:28}
    },
    { name:'Detail', path: '/detail/:id', component: Detail },
    { name:'Login', path: '/login', component: Login },
    { 
      name:'CityList', 
      path: '/citylist', 
      component: CityList,
      
      // 路由独享守卫
      // beforeEnter(to,from,next){
      //   console.log(666);
      //   if(to.params.go==true){
      //     next()
      //   }
        
      // }
    },
    { path:'/',redirect:{name:'Home'}}
  ]
let router = new VueRouter({
    // mode:'history',
    routes
});

// 全局路由守卫
// 在进入某个路由前执行的代码
router.beforeEach((to,from,next)=>{
  if(to.meta.requireAuth){
    // 判断是否登录
    if(sessionStorage.getItem('token')){
      // if(router.app.$store.state.token){
          next();
      }else{
          next({
              path:'/login'
          })
      }
  }else{
    // 要进入to路由，必须调用next()方法
      next();
  }
});
router.afterEach((to,from)=>{
  console.log('after')
})

export default router;