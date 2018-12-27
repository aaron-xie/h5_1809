<template>
    <div>
        <Todolist/>
        <myFilter/>
    </div>
</template>
<script>
// 引入TodoList
import Todolist from './components/Todolist';
import myFilter from './components/Filter';

export default {
    components:{
        Todolist,
        myFilter
    }
}
</script>
