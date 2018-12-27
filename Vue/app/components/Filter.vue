<template>
  <table class="table">
    <thead>
        <th>#</th>
        <th>id</th>
        <th>分类名</th>
        <th>添加时间</th>
        <th>修改时间</th>
        <th>操作</th>
    </thead>
    <tbody>
        <tr v-for="(cate,idx) in categories" :key="cate._id">
            <td>{{idx}}</td>
            <td>{{cate._id}}</td>
            <td>{{cate.name}}</td>
            <td>{{cate.add_time | formatDate}}</td>
            <td>{{cate.edit_time | formatDate('YYYY/MM/DD hh:mm:ss')}}</td>
            <td><div class="btn-group btn-group-sm">
                <button class="btn btn-success">编辑</button>
                <button class="btn btn-danger">删除</button>
            </div></td>
        </tr>
    </tbody>
  </table>
</template>
<script>
// 引入全局过滤器
// import '../filter';

// 引入局部过滤器
import formatDate from '../filter';


// axios
// 基于promise的ajax请求模块
import axios from 'axios';

export default {
  data() {
    return {
      categories: []
    };
  },
  filters:{
      formatDate
  },
  beforeMount(){
      axios.get('http://localhost:18090/category').then(res=>{
          let data = res.data;
          console.log(data);

          this.categories = data.data;
      })
  }
};
</script>
