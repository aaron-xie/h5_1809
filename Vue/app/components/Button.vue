<template>
    <!-- 
        组件内容会自动写入模板中的slot中
        普通属性会自动称为模板根节点的属性
     -->
    <button class="btn" @click.stop="handleClick"><slot></slot></button>
</template>
<script>
export default {
    // 把组件的属性变成实例属性
    props:['handleClick'],
    mounted(){
        console.log(this.handleClick);
    }
}

this
</script>
<style>

</style>
