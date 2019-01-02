import Vue from 'vue';
// 1.安装 npm install -D vue-router
// 2.引入Vue-Router
import VueRouter from 'vue-router';
// 3. 使用插件
Vue.use(VueRouter);


// 引入路由组件
import Home from '@com/Home';
import Cart from '@com/Cart';
import Mine from '@com/Mine';

// 4.实例化路由
const routes = [
    // { path: '/', component: Home },
    { name:'Home', path: '/home', component: Home },
    { name:'Cart', path: '/cart', component: Cart },
    { name:'Mine', path: '/mine', component: Mine },
    { path:'/',redirect:{name:'Home'}}
  ]
let router = new VueRouter({
    routes
});

export default router;