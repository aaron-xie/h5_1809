<template>
  <div class="page">
    <mt-search 
    v-model="keyword" 
    cancel-text="取消" 
    placeholder="搜索"
    autofocus
    ></mt-search>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword:''
    };
  },
  created() {}
};
</script>
<style>
</style>
