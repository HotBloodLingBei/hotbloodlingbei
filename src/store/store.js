// store.js
import { reactive } from 'vue'

export default reactive({
    testType:"",//conciseVersion 或者 accurateVersion
    Scores:[],//{dimension:'I/E',value:0,valid:0}
    initialIdx:0
}
)