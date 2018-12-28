<template>
    <div>
        <button class="btn btn-success" @click="show">显示</button>
        <transition>
            <img :src="img" v-show="display" class="girl"/>
        </transition>
    </div>
</template>
<script>
import Home from './Home';
import Mine from './Mine';
import Discover from './Discover';

import img from '@/img/g1.jpg';

export default {
    data(){
        return {
            img,
            current:'',
            tabs:[{
                name:'Home',
                component:Home
            },{
                name:'Discover',
                component:Discover
            },{
                name:'Mine',
                component:Mine
            }],
            display:true
        }
    },
    methods:{
        change(tab){
            this.current = tab;
        },
        show(){
            this.display = !this.display;
        }
    },

    // 在挂载前高亮第一个tab
    beforeMount(){
        this.current = this.tabs[0];
    }
    // components:{
    //     Home,
    //     Mine,
    //     Discover
    // }
}
</script>
<style lang="scss" scoped>
    .girl{display:block;width:150px;}
    .v-enter{
        
    }
</style>
