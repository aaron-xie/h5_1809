<template>
    <tr :class="{'table-success':data.done}" @click="select(!data.selected,idx)">
        <td><input type="checkbox" :checked="data.selected"></td>
        <td>{{idx+1}}</td>
        <td>{{data.text}}</td>
        <td>{{data.done ? '完成':'待办'}}</td>
        <td>
            <div class="btn-group btn-group-sm">
                <button class="btn btn-outline-success" @click.stop="complete(idx)">完成</button>
                <button class="btn btn-outline-danger" @click.stop="remove(idx)">删除</button>
            </div>
        </td>
    </tr>
</template>

<script>

// 暴露接口，用于其他模块的引入
export default {
    props:{
        data:Object,
        idx:[Number,String]
    },
    methods:{
        complete(idx){
            // bus.$emit('completeitem',idx);
        },
        remove(idx){
            // bus.$emit('removeitem',idx);
        },
        select(checked,idx){
            // bus.$emit('selectitem',checked,idx);
        }
    }
}
</script>
