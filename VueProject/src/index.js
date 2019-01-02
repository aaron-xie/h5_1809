import Vue from 'vue';
import App from './App';

import router from './router';

// 实例化Vue
new Vue({
    el:'#app',
    render:h=>h(App),

    // template:'<router-view/>',

    // 5.注入router实例到vue实例
    router
})