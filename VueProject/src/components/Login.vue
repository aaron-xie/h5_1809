<template>
  <div class="page">
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-button type="primary" @click="login">登录</mt-button>
  </div>
</template>
<script>
import CityList from "@/mock/citylist";

export default {
  data() {
    return {
        username:'',
        password:''
    };
  },
  methods:{
      login(){console.log(666)
          sessionStorage.setItem('token','11');
          this.$router.push({name:'Home'})
      }
  }
};
</script>
