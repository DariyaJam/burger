import {createWebHistory, createRouter} from 'vue-router'
import AppVue from '../App.vue';


const routes = [
    {path: '/', component: AppVue},
]

const routerConfig = createRouter({
    history: createWebHistory(),
    routes
})
export default routerConfig