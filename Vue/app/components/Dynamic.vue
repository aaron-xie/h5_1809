<template>
    <div class="p-3">
        <div class="btn-group">
            <button class="btn btn-outline-secondary" :class="{'btn-outline-success':tab.name==current.name}" v-for="tab in tabs" :key="tab.name" @click="change(tab)">{{tab.name}}</button>
        </div>
        <div class="p-3 border">
            <keep-alive>
                <component :is="current.component"></component>
            </keep-alive>
        </div>
    </div>
</template>
<script>
import Home from './Home';
import Mine from './Mine';
import Discover from './Discover';

export default {
    data(){
        return {
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
            }]
        }
    },
    methods:{
        change(tab){
            this.current = tab;
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

</style>
