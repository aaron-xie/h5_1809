import Vue from 'vue';

import App from './App';

// 引入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css';

new Vue({
    el:'#app',
    // template:`<Todolist/>`,
    // components:{
    //     Todolist
    // }
    render(create){
        return create(App);
    }
});