import Vue from 'vue/dist/vue';

// 引入TodoList
import Todolist from './components/Todolist.vue';

// 引入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css';

new Vue({
    el:'#app',
    // template:`<Todolist/>`,
    // components:{
    //     Todolist
    // }
    render(create){
        return create(Todolist);
    }
});