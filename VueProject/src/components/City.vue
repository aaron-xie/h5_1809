<template>
  <div class="page">
    <mt-index-list>
      <mt-index-section v-for="(citylist,key) in indexCity" :key="key" :index="key">
        <mt-cell :title="city.name" v-for="city in citylist" :key="city.id"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<script>
import City from "@/mock/citylist.js";

export default {
  data() {
    return {
        indexCity:[]
    };
  },
  methods: {
    goto(name) {
      this.$router.push({ path: "/list/" + name });
    }
  },
  mounted() {
    City.then(res => {
      this.indexCity = res;
    });
  }
};
</script>
