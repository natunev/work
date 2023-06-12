<template>
    <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
  <van-tabbar-item icon="search" to="/dishesy">推荐</van-tabbar-item>
  <van-tabbar-item icon="friends-o" to="/order" badge="5">订单</van-tabbar-item>
  <van-tabbar-item icon="setting-o" to="/personal"  badge="20">个人中心</van-tabbar-item>
</van-tabbar>
</template>
<script>


export default (await import('vue')).defineComponent({
    name:'TabBar',//组件名称
    data(){
        return{
            active:0,
        }
    },
    methods:{

},
})
</script>

</script>
<style lang="less" scoped>

</style>
