<template>
    <div class="input-group mb-3">
        <input type="search" ref="form" class="form-control" @keyup.13="add" v-model="text">
        <div class="input-group-append">
            <button class="btn btn-success" @click="add">添加</button>
        </div>
    </div>
</template>

<script>
// 暴露接口，用于其他模块的引入
let TodoForm = {
    data(){
        return {
            text:''
        }
    },
    methods:{
        add(){console.log(this.$refs)
            // console.log(6666)
            // this.handlerAdd({text:'xxx'})

            // 触发自定义事件：this.$emit(type,data)
            //  * type： 自定义事件名
            //  * data： 传输的数据

            this.$emit('additem',{
                text:this.text
            });

            // 清空并自动获得焦点
            this.text = '';
            this.$refs.form.focus();
        }
    },
    template:`#tempTodoForm`,

    mounted(){
        // 进入页面，自动获得焦点
        this.$refs.form.focus();
    }
}

export {TodoForm}

// 等效于 export let TodoForm = {}
</script>
