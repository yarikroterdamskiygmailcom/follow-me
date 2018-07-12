import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './componets/App.vue'
import registration from './componets/registration.vue'
import login from './componets/login.vue'
import recovery from './componets/recovery.vue'
import profil from './componets/profil/profil.vue'
import settings from './componets/profil/settings.vue'
import friends from './componets/profil/friends.vue'
import friendsGlobal from './componets/profil/friendsgloball.vue'
Vue.use(VueRouter)

const router = new VueRouter({
    base: "/login",
    routes:[
        {path: '/login',name:'login', component: login},
        {path: '/registration',name:'registration', component: registration},
        {path: '/recovery',name:'recovery', component: recovery},
        {path: '/profil/:id',name:'profil', component: profil, props: true},
        {path: '/settings/:id',name:'settings', component: settings, props: true},
        {path: '/friends',name:'friends', component: friends, props: true},
        {path: '/friends_globall',name:'friends_globall', component: friendsGlobal}
    ],
})

new Vue({
    el:"#app",
    render: h => h(App),
    router
})