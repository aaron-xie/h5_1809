<template>
  <div>
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.name)">
        <myicons :type="tab.icon"/>
        {{tab.text}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import Vue from "vue";

// 引入并使用插件
import myicons from "@/plugins/icons";
Vue.use(myicons);

// 引入并使用MintUI
import MintUI from "mint-ui";
Vue.use(MintUI);
import "mint-ui/lib/style.css";

// 按需引入
// 1.配置webpack
// 2.引入某个组件
// import { Button, Cell } from 'mint-ui';
// Vue.use(Button);
// Vue.use(Cell);
// Vue.component(Button.name,Button);

export default {
    data(){
        return {
            tabs:[
                {
                    text:'首页',
                    icon:'home',
                    path:'/home',
                    name:'Home'
                },{
                    text:'列表',
                    icon:'list-unordered',
                    path:'/list',
                    name:'List'
                },{
                    text:'我的',
                    icon:'person',
                    path:'/mine',
                    name:'Mine'
                }
            ],
            selected:'Home'
        }
    },
    methods:{
        goto(name){
            // 编程式导航：利用js实现路由跳转
            // 通过this.$router获取到路由实例对象
            // this.$router.push({name});//等效于<router-link :to="{name:xxx}"/>
           this.$router.replace({name});////等效于<router-link :to="{name:xxx}" replace/>
        }
    }
};
</script>
<style lang="scss">
.current {
  color: #f00;
  font-weight: bold;
}
.mint-tabbar{

    .is-selected{
        color:#58bc58;
        svg{color:#58bc58;fill:#58bc58}
        .mint-tab-item-label{color:#58bc58}
    }
}
</style>
