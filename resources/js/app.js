require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
Vue.use(VueRouter)

let routes = [
    { path: '/dashboard', component: require('./components/Dashboard') },
    { path: '/profile', component: require('./components/Profile') }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#app',
    router
});
