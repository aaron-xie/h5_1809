<template>
    <div class="p-3">
        <!-- <Todolist/>
        <myFilter/>
        <Dynamic/> -->
        <Transition/>
    </div>
</template>
<script>
// 引入TodoList
import Todolist from './components/Todolist';
import myFilter from './components/Filter';
import Dynamic from './components/Dynamic';
import Transition from './components/Transition';

export default {
    components:{
        Todolist,
        myFilter,
        Dynamic,
        Transition
    }
}
</script>
