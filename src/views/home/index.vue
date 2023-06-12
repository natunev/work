<template>
    <div class="home">
        <!-- 搜索框-->
        <div class="search">
            <i class="iconfont">&#xe6b0;</i>
            <div class="input">
                <van-search v-model="searchValue" placeholder="请输入搜索关键词" />
            </div>
            <i class="iconfont">&#xe689;</i>
        </div>
    </div>

</template>
<script>

/**导出该组件 */
export default{
    name:'Home', //组件名称
    data(){
        return{
            searchValue:'',
            loading:false,
            finished:true,
            visible:false,//回到顶部展示/隐藏
        }
    },
    methods:{
        //当菜单被切换调用此方法

    },
    created(){
   
    },
    mounted(){

    },

}
</script>
<!-- scoped: 作用域，当前css只当前的组件生效-->
<style lang="less" scoped>
.iconfont{
    font-size: 24px;
    color: #666;
}
.search{
    display: flex; //flex布局
    height: 50px;
    align-items: center;
    padding: 0 12px;
}
.input{
    flex: 1;
}
</style>
