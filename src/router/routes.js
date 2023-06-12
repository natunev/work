import Home from '../views/home/index'
import Tabbar from '../components/tab-bar/index'
import Navbar from '../components/nav-bar/index'
import Dishes from '../views/dishes/index'
import Order from '../views/order/index'
import Personal from '../views/personal/index'

const routes =[
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        name:'home',
        components:{
            //header: Navbar, //告知该路由头部应该展示那个组件
            default:Home,
            footer:Tabbar,
        },
        meta:{ //路由其它基本信息 
            //这里面的其它信息都可以进行在定义。
            icon:'wap-home-o',
            title:'首页',
            inTabbar: true ,
        }
    },
    {
        path:'/dishes',
        name:'dishes',
        components:{
            header: Navbar, //告知该路由头部应该展示那个组件
            default:Dishes,
            //footer:Tabbar,
        },
        meta:{ //路由其它基本信息 
            //这里面的其它信息都可以进行在定义。
            icon:'wap-home-o',
            title:'推荐菜',
            inTabbar: false ,
        }
    },
    {
        path:'/order',
        name:'order',
        components:{
            //header: NavBar //告知该路由头部应该展示那个组件
            header:Navbar,
            default:Order,
            footer:Tabbar,
        },
        meta:{ //路由其它基本信息 
            //这里面的其它信息都可以进行在定义。
            icon:'wap-home-o',
            title:'订单',
            inTabbar: true ,
        }
    },
    {
        path:'/personal',
        name:'personal',
        components:{
            //header: NavBar //告知该路由头部应该展示那个组件
            header:Navbar,
            default:Personal,
           // footer:Tabbar,
        },
        meta:{ //路由其它基本信息 
            //这里面的其它信息都可以进行在定义。
            icon:'wap-home-o',
            title:'个人中心',
            inTabbar: true ,
        }
    },
 
]
export default routes