<template>
  <div class="page">
    ddd
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },
  mounted() {
    console.log(this.$route)

      this.$axios.get(`/dbapi/subject/${this.$route.params.id}`,{
        apikey:'0b2bdeda43b5688921839c8ecb20399b'
      }).then(res=>{
        let data = res.data;
        console.log(res)
      })
      
  }
};
</script>
<style>

</style>
