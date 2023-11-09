<script>
import store from '@/store/store.js'
import questionsConciseVersion from '@/data/questionsConciseVersion.js'

export default {
  name: "questionContainer",
  // Vue 组件
  data() {
    return {
      questionsConciseVersion,
      store,
      currentQuestionIndex: store.initialIdx,
    };
  },
  methods: {
    nextQuestion() {
      // 更新 currentQuestionIndex 的值
      if(this.currentQuestionIndex < questionsConciseVersion.questionList.length-1){
        this.currentQuestionIndex += 1;
      }
    },
    lastQuestion() {
      if(this.currentQuestionIndex > 0){
        this.currentQuestionIndex -= 1;
      }
    },
    fetchChoice(choiceNum) {
      console.log(store.Scores)
      store.Scores[this.currentQuestionIndex].value=questionsConciseVersion.optionScore[choiceNum].score
      store.Scores[this.currentQuestionIndex].valid=1
      if(this.currentQuestionIndex < questionsConciseVersion.questionList.length-1){
        this.currentQuestionIndex += 1;
      }
    },
    saveProgress(){
      localStorage.setItem("testType", JSON.stringify(store.testType))
      localStorage.setItem("Scores", JSON.stringify(store.Scores))
    },
    handleSubmit(){

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
      <button
          :style="{color: store.Scores[currentQuestionIndex].value===questionsConciseVersion.optionScore[0].score ? '#A90000':'#00a982'}"
          @click="fetchChoice(0)" class = "button">{{ questionsConciseVersion.optionScore[0].text }}</button>
      <button
          :style="{color: store.Scores[currentQuestionIndex].value===questionsConciseVersion.optionScore[1].score ? '#A90000':'#00a982'}"
          @click="fetchChoice(1)" class = "button">{{ questionsConciseVersion.optionScore[1].text }}</button>
      <button
          :style="{color: store.Scores[currentQuestionIndex].value===questionsConciseVersion.optionScore[2].score ? '#A90000':'#00a982'}"
          @click="fetchChoice(2)" class = "button">{{ questionsConciseVersion.optionScore[2].text }}</button>
      <button
          :style="{color: store.Scores[currentQuestionIndex].value===questionsConciseVersion.optionScore[3].score&& store.Scores[currentQuestionIndex].valid===1 ? '#A90000':'#00a982'}"
          @click="fetchChoice(3)" class = "button">{{ questionsConciseVersion.optionScore[3].text }}</button>
      <button
          :style="{color: store.Scores[currentQuestionIndex].value===questionsConciseVersion.optionScore[4].score ? '#A90000':'#00a982'}"
          @click="fetchChoice(4)" class = "button">{{ questionsConciseVersion.optionScore[4].text }}</button>
      <button
          :style="{color: store.Scores[currentQuestionIndex].value===questionsConciseVersion.optionScore[5].score ? '#A90000':'#00a982'}"
          @click="fetchChoice(5)" class = "button">{{ questionsConciseVersion.optionScore[5].text }}</button>
      <button
          :style="{color: store.Scores[currentQuestionIndex].value===questionsConciseVersion.optionScore[6].score ? '#A90000':'#00a982'}"
          @click="fetchChoice(6)" class = "button">{{ questionsConciseVersion.optionScore[6].text }}</button>
    </div>
    <button @click="lastQuestion" v-if="currentQuestionIndex > 0">上一题</button>
    <button @click="saveProgress">保存进度</button>
    <button @click="nextQuestion" v-if="currentQuestionIndex < questionsConciseVersion.questionList.length-1">下一题</button>
    <button @click="handleSubmit" v-if="currentQuestionIndex === questionsConciseVersion.questionList.length-1">提交</button>
  </div>
</template>


<style scoped>
.button {
  --color:  #00a982;
  padding: 0.8em 1.7em;
  background-color: transparent;
  border-radius: .3em;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: .5s;
  font-weight: 400;
  font-size: 12px;
  border: 1px solid;
  font-family: inherit;
  text-transform: uppercase;
  color: var(--color);
  z-index: 1;
}

.button::before, .button::after {
  content: '';
  display: block;
  width: 50px;
  height: 50px;
  transform: translate(-50%, -50%);
  position: absolute;
  border-radius: 50%;
  z-index: -1;
  background-color: var(--color);
  transition: 1s ease;
}

.button::before {
  top: -1em;
  left: -1em;
}

.button::after {
  left: calc(100% + 1em);
  top: calc(100% + 1em);
}

.button:hover::before, .button:hover::after {
  height: 410px;
  width: 410px;
}

.button:hover {
  color: rgb(10, 25, 30);
}

.button:active {
  filter: brightness(.8);
}


</style>