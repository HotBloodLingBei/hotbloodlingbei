// store.js
import { reactive } from 'vue'

export default reactive({
        testType: "",//conciseVersion 或者 accurateVersion
        Scores: [],//{dimension:'I/E',value:0,valid:0}
        initialIdx: 0,
        mbtiType: "",//最终的mbti人格类型，小写
        selectedmbtiType: "entj",
        // 0代表没有在截图，1表示在截图，该值用于导航栏是否渲染，来帮助截图
        screenshotStatus: 0,
        isModalVisible: false,
        ishidden: 0
    }
)