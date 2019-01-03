<template>
  <div class="page">
    <mt-header title="豆瓣电影">
      <mt-button slot="left" @click="goto('City')">[广州]</mt-button>
      <mt-button icon="search" slot="right" @click="goto('Search')"></mt-button>
    </mt-header>
    <div class="carousel">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in recommend" :key="item.id">
          <img :src="item.images.large">
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      recommend: []
    };
  },
  methods:{
    goto(name){
      // 编程式路由导航：获取router实例
      // this.$router  路由实例（包含跳转等方法）
      // this.$route   当前路由信息
      // console.log(this.$route,this.$router)
      this.$router.push({name})
    }
  },
  created() {
    // 以/dbapi开头的请求，进入到代理服务器（webpack配置）
    // /dbapi/in_theaters  -> http://api.douban.com/v2/movie/dbapi/in_theaters -> http://api.douban.com/v2/movie/in_theaters
    this.$axios.get("/dbapi/in_theaters").then(res => {
      // 热映电影
      let data = res.data;
      console.log(data);

      // 获取热映top5
      this.recommend = data.subjects
        .sort((a, b) => b.collect_count - a.collect_count)
        .slice(0, 5);
    });
  }
};
</script>
<style>
.mint-swipe img {
  width: 100%;
}
.carousel {
  height: 160px;
}
</style>
