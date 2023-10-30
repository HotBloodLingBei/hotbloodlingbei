//导入命名导出：使用 import { name1, name2 } from 'module' 可以导入一个模块的命名导出。
import { createApp } from 'vue'
//导入默认导出：使用 import name from 'module' 可以导入一个模块的默认导出。
import App from './App.vue'

//把应用程序渲染到具有 id 为 app 的 HTML 元素上。（根节点上）
createApp(App).mount('#app')
