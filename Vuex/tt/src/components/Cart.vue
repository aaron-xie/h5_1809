<template>
    <div class="page cart">
        <ul>
            <li v-for="goods in goodslist" :key="goods.id">
                <h4>{{goods.title}}</h4>
                <p class="price">价格：{{goods.price}} &times; {{goods.qty}}</p>
                <p>库存：{{goods.kucun}}</p>
                <input type="number" :value="goods.qty" @change="change($event,goods.id)">
                <button @click="getKucun(goods.id)">更新库存</button>
                <button @click="gKucun({id:goods.id})">mapAction</button>
                <button @click="change3({id:goods.id,qty:60})">mapMutaction</button>
            </li>
        </ul>
    </div>
</template>
<script>
// 为了简化代码而引入
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';

export default {
    data(){
        //console.log('mapState:',mapState(['cartlist','step']))
        return {
            // 初始化数据
            // goodslist:[],
        }
    },
    // 把vuex中的state映射到computed属性
    // computed:mapState([
    //     'cart' //把this.cart映射为this.$store.state.cart
    // ]),
    computed:{
        ...mapState({
            // 映射this.goodslist为this.$store.state.cart.cartlist
            goodslist:(state)=>{
                return state.cart.cartlist
            }
        })
    },
    methods:{
        ...mapMutations({
            // 把this.change2(xx)映射为this.$store.commit('changeQty',xx)
            change2:'changeQty',

            // this.change3(xx)
            change3:(commit,payload)=>{
                commit('changeQty',payload)
            }
        }),

        ...mapActions({
            gKucun(dispatch,payload){
                dispatch('getKuncun',payload)
            }
        }),
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
        console.log('this.cart:',this.cart)
    }
}
</script>
