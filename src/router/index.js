import { createRouter, createWebHistory } from 'vue-router'
import startTestPage from '../views/startTestPage.vue'
import mbtiInstruction from '../views/mbtiInstructionPage.vue'
import test1 from '../views/testPage1.vue'
import test2 from '../views/testPage2.vue'
import kindsOfMbti from '../views/kindsOfMbtiPage.vue'
import result from '../views/resultPage.vue'


const routes = [
    {
        path: '/',   // 跳转路径
        name: 'startTestPage',    // 名称
        component: startTestPage  // 组件
    },
    {
        path: '/mbtiInstructionPage',
        name: 'mbtiInstruction',
        component: mbtiInstruction
    },
    {
        path: '/testPage1',
        name: 'test1',
        component: test1
    },    {
        path: '/testPage2',
        name: 'test2',
        component: test2
    },    {
        path: '/kindsOfMbtiPage',
        name: 'kindsOfMbti',
        component: kindsOfMbti
    },{
        path: '/resultPage',
        name: 'result',
        component: result
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router