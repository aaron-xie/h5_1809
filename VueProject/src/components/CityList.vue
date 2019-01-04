<template>
  <div class="page">
    <mt-index-list>
      <mt-index-section v-for="(cities,letter) in indexCity" :key="letter" :index="letter" v-if="cities.length>0">
        <mt-cell v-for="city in cities" :key="city.id" :title="city.name"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<script>
import CityList from '@/mock/citylist';

export default {
  data() {
    return {
      indexCity:{},//{A:[澳门],B:[北京],C:[长沙,成都],D:[东莞,大连..]}
    };
  },
  created(){
    console.log('citylist',this.$route.params)
    CityList.then(res=>{
      this.indexCity = res;
    })
    
  },

  // 组件守卫：只能写在组件中
  
};
</script>
