<script>
import TestTips from "@/components/TestTips.vue"
import store from '@/store/store.js'
import questionsConciseVersion from '@/data/questionsConciseVersion.js'

export default {
  name: "testPage1",
  data() {
    return {
      questionsConciseVersion,
      store,
      currentQuestionIndex: store.initialIdx,
    };
  },
  components: {
    TestTips,
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
    <button class="bookmarkBtn"  @click="saveProgress">
  <span class="IconContainer">
    <svg viewBox="0 0 384 512" height="0.9em" class="icon"><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path></svg>
  </span>
    <p class="text">Save</p>
  </button>

    <button class="cssbuttons-io-button"  @click="nextQuestion" v-if="currentQuestionIndex < questionsConciseVersion.questionList.length-1">
      下一题
      <div class="icon">
        <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
          ></path>
        </svg>
      </div>
    </button>

    <button class="shadow__btn" @click="handleSubmit" v-if="currentQuestionIndex === questionsConciseVersion.questionList.length-1">提交</button>
    <div class="container">
      <button class="left-aligned-button"
              :style="{height:'100%', width:(currentQuestionIndex*20+20) + '%' }"></button>
    </div>
  </div>
  <TestTips/>
</template>

<style scoped>

.left-aligned-button {
  background-color:#00a982;
  border-color: transparent;
  border-radius: 0 10px 10px 0;
}
.container {
  display: flex; /* 使用 flex 布局 */
  align-items: flex-start; /* 设置内容垂直对齐方式为顶部对齐 */
}
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



.button:active {
  filter: brightness(.8);
}

.bookmarkBtn {
  width: 100px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.349);
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: .3s;
  overflow: hidden;
}

.IconContainer {
  width: 30px;
  height: 30px;
  background: linear-gradient(to bottom, #00a982,#009087);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 2;
  transition-duration: .3s;
}

.icon {
  border-radius: 1px;
}

.text {
  height: 100%;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  z-index: 1;
  transition-duration: .3s;
  font-size: 1.04em;
}

.bookmarkBtn:hover .IconContainer {
  width: 90px;
  border-radius: 40px;
  transition-duration: .3s;
}

.bookmarkBtn:hover .text {
  transform: translate(10px);
  width: 0;
  font-size: 0;
  transition-duration: .3s;
}

.bookmarkBtn:active {
  transform: scale(0.95);
  transition-duration: .3s;
}


.shadow__btn {
  padding: 10px 20px;
  border: none;
  font-size: 17px;
  color: #fff;
  border-radius: 7px;
  letter-spacing: 4px;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.5s;
  transition-property: box-shadow;
}

.shadow__btn {
  background: #00a982;
  box-shadow: 0 0 25px #00a982;
}

.shadow__btn:hover {
  box-shadow: 0 0 5px #00a982,
  0 0 25px #00a982,
  0 0 50px #00a982,
  0 0 100px #00a982;
}



.cssbuttons-io-button {
  background: #00a982;
  color: white;
  font-family: inherit;
  padding: 0.35em;
  padding-left: 1.2em;
  font-size: 17px;
  font-weight: 500;
  border-radius: 0.9em;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 1.6em -0.6em #00a982;
  overflow: hidden;
  position: relative;
  height: 2.8em;
  padding-right: 3.3em;
  cursor: pointer;
}

.cssbuttons-io-button .icon {
  background: white;
  margin-left: 1em;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 0.7em;
  box-shadow: 0.1em 0.1em 0.6em 0.2em #00a982;
  right: 0.3em;
  transition: all 0.3s;
}

.cssbuttons-io-button:hover .icon {
  width: calc(100% - 0.6em);
}

.cssbuttons-io-button .icon svg {
  width: 1.1em;
  transition: transform 0.3s;
  color: #00a982;
}

.cssbuttons-io-button:hover .icon svg {
  transform: translateX(0.1em);
}

.cssbuttons-io-button:active .icon {
  transform: scale(0.95);
}

</style>