<script>
import store  from '@/store/store.js'
import  questionsConciseVersion  from '@/data/questionsConciseVersion.js'
export default {
  name: "questionContainer",
  // Vue 组件
  data() {
    return {
      questionsConciseVersion,
      store,
      currentQuestionIndex: 0,

    };
  },
  methods: {
    nextQuestion() {
      // 更新 currentQuestionIndex 的值
      this.currentQuestionIndex += 1;
    },
    lastQuestion() {
      this.currentQuestionIndex -= 1;
    },
    fetchChoice(choiceNum) {
      let question = {
        dimension: questionsConciseVersion.questionList[this.currentQuestionIndex].dimension,
        value: questionsConciseVersion.optionScore[choiceNum].score
      }
      store.Scores.push(question)
    }
  }
}
</script>

<template>
  <div>
    <div>
      {{questionsConciseVersion.questionList[this.currentQuestionIndex].description}}
    </div>
    <div>
      <button @click="fetchChoice(0)">{{ questionsConciseVersion.optionScore[0].text }}</button>
      <button @click="fetchChoice(1)">{{ questionsConciseVersion.optionScore[1].text }}</button>
      <button @click="fetchChoice(2)">{{ questionsConciseVersion.optionScore[2].text }}</button>
      <button @click="fetchChoice(3)">{{ questionsConciseVersion.optionScore[3].text }}</button>
      <button @click="fetchChoice(4)">{{ questionsConciseVersion.optionScore[4].text }}</button>
      <button @click="fetchChoice(5)">{{ questionsConciseVersion.optionScore[5].text }}</button>
      <button @click="fetchChoice(6)">{{ questionsConciseVersion.optionScore[6].text }}</button>
    </div>
    <button @click="lastQuestion">上一题</button>
    <button @click="nextQuestion">下一题</button>
  </div>
</template>

<style scoped>

</style>