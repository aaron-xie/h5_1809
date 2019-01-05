import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import cart from './cart';
import goods from './goods';

// vuex的使用
// 1.创建一个store
export default new Vuex.Store({
  // 2. 创建state数据交由store来管理
  modules:{
    cart,
    goods
  },
  state:{
      a:100,
      b:[1,2,3,4,5]
  }
});