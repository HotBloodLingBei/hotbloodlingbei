<script>
import { store } from '@/store/store.js'
export default {
  name: "questionContainer",
  // Vue 组件
  data() {
    return {
      store,
      currentQuestionIndex: 0,

    };
  },
  methods: {
    nextQuestion() {
      // 更新 currentQuestionIndex 的值
      this.currentQuestionIndex += 1;
    },
    lastQuestion(){
      this.currentQuestionIndex -=1;
    }
  }
}
</script>

<template>
  <div>
    <div>
      <div v-if="currentQuestionIndex === 0">
        <div>第一题</div>
        <button @click="store.presentScore++">-3</button><button>-2</button><button>-1</button><button>0</button><button>1</button><button>2</button><button>3</button>
      </div>
      <div v-else-if="currentQuestionIndex === 1">
        第二题
      </div>
      <!-- 其他题目组件 -->
    </div>
    <button @click="lastQuestion">上一题</button>
    <button @click="nextQuestion">下一题</button>
  </div>
</template>

<style scoped>

</style>