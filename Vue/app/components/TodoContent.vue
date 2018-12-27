<template>
    <table class="table">
        <thead>
            <tr>
            <th scope="col" width="80"><input type="checkbox" v-model="checkAll">全选</th>
            <th scope="col" width="50">#</th>
            <th scope="col" width="300">待处理事项</th>
            <th scope="col" width="80">状态</th>
            <th scope="col" width="100">操作</th>
            </tr>
        </thead>
        <tbody>
            <tr is="todo-item" v-for="(item,idx) in datalist" :key="item.id" :data="item" :idx="idx"></tr>
        </tbody>
    </table>
</template>

<script>
import bus from './bus';

// 引入todoItem
import TodoItem from './TodoItem';

// 暴露接口，用于其他模块的引入
export default {
    props:{
        datalist:{
            type:Array,
            required:true
        }
    },
    data(){
        return {
            // checkAll:false
        }
    },
    computed:{
        checkAll:{
            get(){
                return this.datalist.every(item=>item.selected)
            },
            set(checked){
                bus.$emit('selectitem',checked);
            }
        }
    },
    components:{
        TodoItem
    }
}
</script>
