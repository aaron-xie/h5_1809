<template>
    <tr :class="{'table-success':data.done}" @click="select(!data.selected,idx)">
        <td><input type="checkbox" :checked="data.selected"></td>
        <td>{{idx+1}}</td>
        <td>{{data.text}}</td>
        <td>{{data.done ? '完成':'待办'}}</td>
        <td>
            <div class="btn-group btn-group-sm">
                <Button class="btn-outline-success" :handle-click="complete">完成</Button>
                <Button class="btn-outline-danger" :handle-click="remove">删除</Button>
                <!-- <button class="btn btn-outline-success" @click.stop="complete(idx)">完成</button>
                <button class="btn btn-outline-danger" @click.stop="remove(idx)">删除</button> -->
            </div>
        </td>
    </tr>
</template>

<script>
import bus from './bus';

import Button from './Button.vue';

// 暴露接口，用于其他模块的引入
export default {
    props:{
        data:Object,
        idx:[Number,String]
    },
    methods:{
        complete(){
            bus.$emit('completeitem',this.idx);
        },
        remove(){
            bus.$emit('removeitem',this.idx);
        },
        select(checked){
            bus.$emit('selectitem',checked,this.idx);
        }
    },
    components:{
        Button
    }
}
</script>
