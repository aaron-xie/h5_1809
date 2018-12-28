<template>
    <div>
        <div class="form-group">
            <label for="username">用户名：</label>
            <input type="text" v-model="username" class="form-control"/>
        </div>
        <div class="form-group">
            <label for="username">密码：</label>
            <input type="text" v-model="password" class="form-control"/>
        </div>
        <button class="btn btn-success">登录</button>
    </div>
</template>
<script>
export default {
    data:()=>({
        username:'',
        password:''
    }),
    beforeCreate(){
        console.log('beforeCreate');
    },
    mounted(){
        console.log('mounted');
    },
    beforeDestroy(){
        console.log('beforeDestroy');
    },
    destroyed(){
        console.log('destroyed');
    },

    // 针对keep-alive的生命周期
    activated(){
        // 面试题：如何保持搜索结果与滚动条位置
        // 答案：<keep-alive>+activated+deactivated
        // 在此重置滚动条位置：window.scrollTo(x,y)
        console.log('activated')
    },
    deactivated(){
        // 保留滚动条位置：window.scrollY
        console.log('deactivated')
    }
}
</script>
