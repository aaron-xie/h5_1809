<template>
    <div class="todolist p-3">
        <!-- 表单 -->
        <todo-form @additem="addItem"></todo-form>
        <!-- 内容 -->
        <todo-content :datalist="datalist"></todo-content>
    </div>   
</template>

<script>
// 引入所需模块
import TodoForm from './TodoFrom.vue';
// import todoContent from './todoContent.vue';

    {
        data(){
            return {
                datalist:[{
                    id:parseInt(Math.random()*1000+1),
                    text:'今晚打老虎',
                    done:false,     //是否完成
                    selected:false, //是否选中
                }]
            }
        },
        methods:{
            // 添加待办事项
            addItem(item){
                // 传入的格式：{text}
                // 修改成所需格式：{text,id,done}
                item.id = parseInt(Math.random()*1000+1);
                item.done = false;
                item.selected = false;

                this.datalist.push(item);
            },

            // 完成待办事项
            completeItem(idx){
                this.datalist[idx].done = true;
            },

            // 删除待办事项
            removeItem(idx){
                this.datalist.splice(idx,1);
            },

            // 修改selected属性（选中或不选）
            selectItem(checked,idx){
                // 全部操作
                if(idx===undefined){

                    this.datalist.forEach(item=>{
                        item.selected = checked;
                    });
                }
                
                // 单个操作
                else{
                    this.datalist[idx].selected = checked;
                }
            }
        },

        // 局部组件
        components:{
            todoForm,
            todoContent,
        },

        // 生命周期函数
        mounted(){
            // 给中间桥梁bus添加z自定义事件
            bus.$on('additem',item=>{
                this.addItem(item);
            });

            bus.$on('completeitem',idx=>{
                this.completeItem(idx)
            });

            bus.$on('removeitem',idx=>{
                this.removeItem(idx)
            });

            bus.$on('selectitem',(checked,idx)=>{
                this.selectItem(checked,idx)
            });
        }
    }
</script>
<style>

</style>

