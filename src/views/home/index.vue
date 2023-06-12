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

        <van-grid :gutter="10">
            <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
        </van-grid>

<!-- 首页店铺列表 -->
        <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        >
        <template #tags>
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
        </template>
        </van-card>
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
