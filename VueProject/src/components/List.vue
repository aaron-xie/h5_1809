<template>
    <div class="page">
        <mt-navbar v-model="selected">
            <mt-tab-item :id="tab.name" v-for="tab in tabs" :key="tab.name" @click.native="goto(tab.name)">{{tab.title}}</mt-tab-item>
        </mt-navbar>
        <router-view/>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        {
          title: "正在热映",
          name: "in_theaters"
        },
        {
          title: "即将上映",
          name: "coming_soon"
        },
        {
          title: "新片榜",
          name: "new_movies"
        },
        // {
        //   title: "口碑榜",
        //   name: "weekly"
        // },
        {
          title: "Top250",
          name: "top250"
        }
      ],
      selected:'in_theaters'
    };
  },
  methods:{
      goto(name){
          this.$router.push({path:'/list/'+name})
      }
  },

//   监听数据：数据有修改自动执行
  watch:{
    //   selected(newValue,oldValue){
    //       console.log(newValue,oldValue)
    //   },
      $route(newValue,oldValue){
          console.log(newValue,oldValue)
      }
  },
  mounted(){
      console.log(this.$route.params.type)
  }
};
</script>
