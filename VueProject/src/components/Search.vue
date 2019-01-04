<template>
  <div class="page search-list">
    <mt-search
      v-model="keyword"
      cancel-text="取消"
      placeholder="搜索"
      autofocus
      @input="search"
    >
      <mt-cell v-for="item in result" :key="item.id" @click.native="goto(item.id)">
        <span class="pic"><img :src="item.images.small"/></span>
        <div>
          <h4>{{item.title}}</h4>
          <p>年份：{{item.year}}</p>
          <p>类型：{{item.genres.join()}}</p>
          <p>导演：{{item.directors.map(item=>item.name).join()}}</p>
          <p>主演：{{item.casts.map(item=>item.name).join()}}</p>
        </div>
      </mt-cell>
    </mt-search>
  </div>
</template>
<script>
export default {
  props:['keyword'],
  data() {
    return {
      // keyword: "",
      timer: null,
      result: []
    };
  },
  methods: {
    search() {
      // 海->海王
      clearTimeout(this.timer);

      if (!this.keyword) return;

      this.timer = setTimeout(() => {
        this.$axios
          .get("/dbapi/search", {
            params: {
              q: this.keyword
            }
          })
          .then(res => {
            let data = res.data;
            console.log(data);

            this.result = data.subjects;
          });
      }, 1000);
    },
    goto(id){
      this.$router.push({path:'/detail/'+id})
      // this.$router.push({name:'Detail',params:{id},query:{keyword:'xxx'}})
    }
  },
  created() {
    console.log(this.keyword);
    // 路由传参：缺点：获取繁琐
    // this.keyword = this.$route.params.keyword;
  }
};
</script>
<style lang="scss">
.search-list{
  .pic{margin-right:10px;}
  img{height:80px;width:60px;}
  .mint-cell-value{
    width:100%;font-size:12px;
    p{margin:2px 0;}
  }
}
</style>
