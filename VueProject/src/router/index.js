import Vue from 'vue';
// 1.安装 npm install -D vue-router
// 2.引入Vue-Router
import VueRouter from 'vue-router';//console.dir(VueRouter)
// 3. 使用插件
Vue.use(VueRouter);


// 引入路由组件
import Home from '@com/Home';
import List from '@com/List';
import Mine from '@com/Mine';

// 4.实例化路由
const routes = [
    // { path: '/', component: Home },
    { name:'Home', path: '/home', component: Home },
    { name:'List', path: '/list', component: List },
    { name:'Mine', path: '/mine', component: Mine },
    { path:'/',redirect:{name:'Home'}}
  ]
let router = new VueRouter({
    routes
});

export default router;