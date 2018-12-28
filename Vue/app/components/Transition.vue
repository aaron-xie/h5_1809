<template>
    <div>
        <button class="btn btn-success" @click="show">显示</button>
        <transition name="slide"
        enter-active-class="animated"
        leave-active-class="animated"
        enter-class="bounceOutUp"
        enter-to-class="bounceInDown"
        leave-class="bounceInDown"
        leave-to-class="bounceOutUp"

        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
        >
            <img :src="img" v-show="display" class="girl"/>
        </transition>

        <div class="group">
            <transition-group tag="ul"
                enter-active-class="animated"
                leave-active-class="animated"
                enter-class="bounceOut"
                enter-to-class="bounceIn"
                leave-class="bounceIn"
                leave-to-class="bounceOut"
            >
                <li key="1" v-if="display"><img src="img/laoxie.jpg"/></li>
                <li key="2" v-else><img src="img/tiantian.jpg"/></li>
            </transition-group>
        </div>
    </div>
</template>
<script>
/*
    transition过渡动画阶段
        * Enter进入
            * enter
            * enter-active
            * enter-to
        * Leave离开
            * 
            * 
    
        * name属性
            * 把默认样式v-*  变成  [name]-*
        * 利用第三方动画库
            * animate.css
*/
import Home from './Home';
import Mine from './Mine';
import Discover from './Discover';

import img from '@/img/g1.jpg';

// 引入animate.css
import 'animate.css';

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
        },
        // 过渡进入
        // 设置过渡进入之前的组件状态
        beforeEnter: function (el) {console.log('beforeEnter',el)
            // ...
        },
        // 设置过渡进入完成时的组件状态
        enter: function (el, done) {console.log('enter')
            // ...
            done()
        },
        // 设置过渡进入完成之后的组件状态
        afterEnter: function (el) {console.log('afterEnter')
            // ...
        },
        enterCancelled: function (el) {console.log('enterCancelled')
            // ...
        },
        // 过渡离开
        // 设置过渡离开之前的组件状态
        beforeLeave: function (el) {console.log('beforeLeave')
            // ...
        },
        // 设置过渡离开完成时地组件状态
        leave: function (el, done) {console.log('leave')
            // ...
            done()
        },
        // 设置过渡离开完成之后的组件状态
        afterLeave: function (el) {console.log('afterLeave')
            // ...
        },
        // leaveCancelled 只用于 v-show 中
        leaveCancelled: function (el) {console.log('leaveCancelled')
            // ...
        }
    },

    // 在挂载前高亮第一个tab
    beforeMount(){
        this.current = this.tabs[0];
    }
}
</script>
<style lang="scss" scoped>
    .girl{display:block;width:150px;}
    .group img{width:100px;}
    .a,.b{transition:all 5s;}
    .v-enter-active,.v-leave-active{
        transition:all 5s;
    }

    //进入动画(初始状态和结束状态)
    .v-enter{
        //opacity:0
        width:0
    }
    .v-enter-to{
        //opacity: 1;
        width:200px
    }

    // 离开动画(初始状态和结束状态)
    .v-leave{
        // opacity:1;
        width:200px;
    }
    .v-leave-to{
        // opacity: 0;
        width:0;
    }


    // 下拉上拉
    .slide-enter-active,.slide-leave-active{
        transition:all 2s;
    }

    //进入动画(初始状态和结束状态)
    .slide-enter{
        transform:translateY(0)
    }
    .slide-enter-to{
        transform:translateY(100px)
    }

    // 离开动画(初始状态和结束状态)
    .slide-leave{
        transform:translateY(100px)
    }
    .slide-leave-to{
        transform:translateY(0)
    }
</style>
