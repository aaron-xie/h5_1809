<template>
    <div class="page cart">
        <ul>
            <li v-for="goods in goodslist" :key="goods.id">
                <h4>{{goods.title}}</h4>
                <p class="price">价格：{{goods.price}} &times; {{goods.qty}}</p>
                <p>库存：{{goods.kucun}}</p>
                <input type="number" :value="goods.qty" @change="change($event,goods.id)">
                <button @click="getKucun(goods.id)">更新库存</button>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapState} from 'vuex';

export default {
    data(){
        console.log('mapState:',mapState(['cartlist','step']))
        return {
            goodslist:[],
            ...mapState({
                cartlist:state=>{
                    console.log('111',state)
                }
            })
        }
    },
    methods:{
        change(e,id){
            // 通过e.target.value获取输入框的值
            // 然后修改vuex中的值
            console.log(e)

            // 在组件中调用mutations：$store.commit()
            this.$store.commit('changeQty',{
                id,
                qty:e.target.value
            });


        },
        getKucun(id){
            // 在组件中调用actions: $store.dispatch()
            this.$store.dispatch('getKuncun',{id})
        }
    },
    mounted(){
        console.log(this.$store.state.cart)
    }
}
</script>
