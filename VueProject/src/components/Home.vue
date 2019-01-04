<template>
  <div class="page">
    <mt-header title="豆瓣电影">
      <mt-button slot="left" @click="goto('CityList')">[广州]</mt-button>
      <mt-button icon="search" slot="right" @click="goto('Search')"></mt-button>
    </mt-header>
    <div class="carousel">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in recommend" :key="item.id" @click.native="goto('Detail',item.id)">
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
      recommend: [],
      hotmovie:'大黄蜂',
      currentCity:''
    };
  },
  methods:{
    goto(name,id){
      // 编程式路由导航：获取router实例
      // this.$router  路由实例（包含跳转等方法）
      // this.$route   当前路由信息
      // console.log(this.$route,this.$router)


      // 路由传参
      let obj = {name}
      if(name === 'Search'){
        obj.params = {keyword:this.hotmovie,a:100,name:'tiantian'}
        // obj.query = {keyword:this.hotmovie};//保存在url地址中，刷新后还存在
      }else if(id){
        obj.params = {id}
      }
      // else{
      //   obj.params = {go:true}
      // }
      this.$router.push(obj);
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

    // 通过geolocation获取当前位置
    let res = navigator.geolocation.getCurrentPosition(position=>{
      

      // 根据经纬度获取城市
      let {latitude,longitude} = position.coords;
      alert(latitude,longitude);

      // 通过接口获取城市

      // this.currentCity = city;
    },error=>{
      console.log(error)
    },{
          //是否使用高精度设备，如GPS。默认是true
          enableHighAccuracy:true,
          //超时时间，单位毫秒，默认为0
          timeout:1000,
          //使用设置时间内的缓存数据，单位毫秒
          //默认为0，即始终请求新数据
          //如设为Infinity，则始终使用缓存数据
          maximumAge:0
     });
    // console.log(res);
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
