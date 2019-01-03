<template>
  <div class="page search-list">
    In_theaters
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  created(){
    this.$axios({
      url:'/dbapi/in_theaters',
      params:{
        city:'广州'
      }
    }).then(res=>{
      let data = res.data;
      console.log(data);
    })
  }
};
</script>
<style lang="scss">

</style>
