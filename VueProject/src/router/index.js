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
import City from '@com/City';

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
          component:In_theaters
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
    { name:'Mine', path: '/mine', component: Mine },
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
    { name:'City', path: '/city', component: City },
    { path:'/',redirect:{name:'Home'}}
  ]
let router = new VueRouter({
    routes
});

export default router;