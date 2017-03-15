import Login from './pages/Login.vue'
import NotFound from './pages/404.vue'
import Home from './pages/Home.vue'
import Main from './pages/Main.vue'
import listArticle from './pages/article/List.vue'
import addArticle from './pages/article/Add.vue'

import Table from './pages/nav1/Table.vue'
import Form from './pages/nav1/Form.vue'
import user from './pages/nav1/user.vue'
import Page4 from './pages/nav2/Page4.vue'
import Page5 from './pages/nav2/Page5.vue'
import Page6 from './pages/nav3/Page6.vue'
import echarts from './pages/charts/echarts.vue'
import Web from './pages/web/Web.vue'
import WebAdd from './pages/web/add.vue'


let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/web',
        component: Web,
        name: '',
        hidden: true
    },
    {
        path: '/webadd',
        component: WebAdd,
        name: 'webadd',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '文章管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/user', component: user, name: '采集' },
            { path: '/main', component: Main, name: '', hidden: true },
            { path: '/add', component: addArticle, name: '添加文章' },
            { path: '/list', component: listArticle, name: '文章列表' },
            { path: '/user', component: user, name: '标签管理' },
        ]
    },
    // {
    //     path: '/',
    //     component: Home,
    //     name: '常用',
    //     iconCls: 'el-icon-message',//图标样式class
    //     children: [
    //         { path: '/main', component: Main, name: '主页', hidden: true },
    //         { path: '/table', component: Table, name: 'Table' },
    //         { path: '/form', component: Form, name: 'Form' },
    //         { path: '/user', component: user, name: '列表' },
    //     ]
    // },
    {
        path: '/',
        component: Home,
        name: '所有网站',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: '英雄联盟' },
            { path: '/page5', component: Page5, name: '新闻' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '网站设置',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Page4, name: '英雄联盟' },
            { path: '/page5', component: Page5, name: '新闻' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/page6', component: Page6, name: '导航三' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;