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
    { name:'Search', path: '/search', component: Search },
    { name:'Detail', path: '/detail/:id', component: Detail },
    { path:'/',redirect:{name:'Home'}}
  ]
let router = new VueRouter({
    routes
});

export default router;