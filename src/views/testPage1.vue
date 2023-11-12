<script>
import TestTips from "@/components/TestTips.vue"
import store from '@/store/store.js'
import questionsConciseVersion from '@/data/questionsConciseVersion.js'
import MyModal from "@/components/MyModal.vue";

export default {
    name: "testPage1",
    data() {
        return {
            questionsConciseVersion,
            store,
            currentQuestionIndex: store.initialIdx,
            isModalVisible: false,
        };
    },
    components: {
        TestTips,
        MyModal,
    },
    methods: {
        nextQuestion() {
            // 更新 currentQuestionIndex 的值
            if (this.currentQuestionIndex < questionsConciseVersion.questionList.length - 1) {
                this.currentQuestionIndex += 1;
            }
        },
        lastQuestion() {
            if (this.currentQuestionIndex > 0) {
                this.currentQuestionIndex -= 1;
            }
        },
        fetchChoice(choiceNum) {
            console.log(store.Scores)
            store.Scores[this.currentQuestionIndex].value = questionsConciseVersion.optionScore[choiceNum].score
            store.Scores[this.currentQuestionIndex].valid = 1
            if (this.currentQuestionIndex < questionsConciseVersion.questionList.length - 1) {
                this.currentQuestionIndex += 1;
            }
        },
        saveProgress() {
            localStorage.setItem("testType", JSON.stringify(store.testType))
            localStorage.setItem("Scores", JSON.stringify(store.Scores))
        },
        handleSubmit() {
          let EIvalue=0,NSvalue=0,FTvalue=0,JPvalue=0
          for (let eachAnswer of store.Scores) {
            if(eachAnswer.valid===0){
              this.isModalVisible=true
              break
            }else if(eachAnswer.dimension==="E/I"){
              EIvalue+=eachAnswer.value
            }else if(eachAnswer.dimension==="N/S"){
              NSvalue+=eachAnswer.value
            }else if(eachAnswer.dimension==="F/T"){
              FTvalue+=eachAnswer.value
            }else if(eachAnswer.dimension==="J/P"){
              JPvalue+=eachAnswer.value
            }
          }
          let type=""
          if(this.isModalVisible===false){
            if(EIvalue>0){
              type+='e'
            }else{
              type+='i'
            }
            if(NSvalue>0){
              type+='n'
            }else{
              type+='s'
            }
            if(FTvalue>0){
              type+='f'
            }else{
              type+='t'
            }
            if(JPvalue>0){
              type+='j'
            }else{
              type+='p'
            }
            store.mbtiType=type
            this.$router.push('/resultPage')
            store.testType=""
            store.Scores=[]
            store.initialIdx=0
            localStorage.removeItem("testType")
            localStorage.removeItem("Scores")
          }
        }
    }
}
</script>

<template>
    <div style="padding: 5%">
        <div class="questionContainer">
            <div style="  height: 200px;  display: flex; justify-content: center;align-items: center;">
                {{ questionsConciseVersion.questionList[this.currentQuestionIndex].description }}
            </div>
            <div style=" margin-right: 5%; margin-left: 5%; display: flex; justify-content: space-between;">
                <button
                        :style="{width:'100px' , height: '45px', background: store.Scores[currentQuestionIndex].value===questionsConciseVersion.optionScore[0].score ? '#bebebe':'#ffffff'}"
                        @click="fetchChoice(0)" class="button">{{ questionsConciseVersion.optionScore[0].text }}
                </button>
                <button
                        :style="{width:'100px' , height: '45px',background: store.Scores[currentQuestionIndex].value===questionsConciseVersion.optionScore[1].score ? '#bebebe':'#ffffff'}"
                        @click="fetchChoice(1)" class="button">{{ questionsConciseVersion.optionScore[1].text }}
                </button>
                <button
                        :style="{width:'100px' , height: '45px',background: store.Scores[currentQuestionIndex].value===questionsConciseVersion.optionScore[2].score ? '#bebebe':'#ffffff'}"
                        @click="fetchChoice(2)" class="button">{{ questionsConciseVersion.optionScore[2].text }}
                </button>
                <button
                        :style="{width:'100px' , height: '45px',background: store.Scores[currentQuestionIndex].value===questionsConciseVersion.optionScore[3].score&& store.Scores[currentQuestionIndex].valid===1 ? '#bebebe':'#ffffff'}"
                        @click="fetchChoice(3)" class="button">{{ questionsConciseVersion.optionScore[3].text }}
                </button>
                <button
                        :style="{width:'100px' , height: '45px',background: store.Scores[currentQuestionIndex].value===questionsConciseVersion.optionScore[4].score ? '#bebebe':'#ffffff'}"
                        @click="fetchChoice(4)" class="button">{{ questionsConciseVersion.optionScore[4].text }}
                </button>
                <button
                        :style="{width:'100px' , height: '45px',background: store.Scores[currentQuestionIndex].value===questionsConciseVersion.optionScore[5].score ? '#bebebe':'#ffffff'}"
                        @click="fetchChoice(5)" class="button">{{ questionsConciseVersion.optionScore[5].text }}
                </button>
                <button
                        :style="{width:'100px' , height: '45px',background: store.Scores[currentQuestionIndex].value===questionsConciseVersion.optionScore[6].score ? '#bebebe':'#ffffff'}"
                        @click="fetchChoice(6)" class="button">{{ questionsConciseVersion.optionScore[6].text }}
                </button>
            </div>
        </div>
        <!--按钮容器-->
        <div style=" align-items: center;justify-content: space-between;display: flex;">
            <!--上一题的按钮-->
            <div style="height: 60px; width:60px">
                <button class="button1" @click="lastQuestion" v-if="currentQuestionIndex > 0">
                    <div class="button1-box">
            <span class="button1-elem">
              <svg viewBox="0 0 46 40">
                <path
                        d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"/>
              </svg>
            </span>
                    </div>
                </button>
            </div>
            <!--保存进度按钮-->
            <div style="margin: 10px;display: flex;height: 60px; width: 100px;  align-items: center;">
                <button class="bookmarkBtn" @click="saveProgress">
          <span class="IconContainer">
            <svg viewBox="0 0 384 512" height="0.9em" class="icon">
              <path
                      d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
            </svg>
          </span>
                    <p class="text">保存进度</p>
                </button>
            </div>
            <!--下一题的按钮-->
            <div style="height: 60px; width: 140px; display: flex;align-items: center;">
                <button class="cssbuttons-io-button" @click="nextQuestion"
                        v-if="currentQuestionIndex < questionsConciseVersion.questionList.length-1">
                    下一题
                    <div class="icon">
                        <svg
                                height="24"
                                width="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path
                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                    fill="currentColor"
                            />
                        </svg>
                    </div>
                </button>
            </div>
            <!--提交按钮-->
            <div style="height: 60px; width: 100px; display: flex;align-items: center;">
                <button class="shadow__btn" @click="handleSubmit"
                        v-if="currentQuestionIndex === questionsConciseVersion.questionList.length-1">提交
                </button>
            </div>
            <!--按钮容器结束-->
        </div>
        <div>{{ currentQuestionIndex + 1 }} / {{ questionsConciseVersion.questionList.length }}</div>
        <!--进度条的容器-->
        <div style="margin:10px;background-color: white;display: flex;align-items: flex-start;">
            <button class="left-aligned-button"
                    :style="{height:'100%', width:((currentQuestionIndex+1)*100/questionsConciseVersion.questionList.length) + '%' }"/>
        </div>


    </div>
    <TestTips v-if="currentQuestionIndex<questionsConciseVersion.questionList.length/2"/>
    <MyModal
        v-if="isModalVisible"
        content="请完成全部的测试题目"
    />
</template>

<style scoped>
.questionContainer{
  padding: 5%;
  border-radius: 50px;
  background: #ffffff;
  box-shadow:  20px 20px 60px #bebebe,
  -20px -20px 60px #ffffff;
  transition: 0.2s ease-in-out;
  background: linear-gradient(90deg, #FEE2F8, #DCF8EF );
}
.questionContainer:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
.left-aligned-button {
    background-color: #00a982;
    border-color: transparent;
    border-radius: 0 10px 10px 0;
}

.button {
    --color: #00a982;
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
.button:hover {
    /* 悬停状态下的样式 */
    color: white;
}

.bookmarkBtn {
    width: 100px;
    height: 40px;
    border-radius: 40px;
    border: 1px solid rgba(255, 255, 255, 0.349);
    background-color: #00a982;
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
    background: linear-gradient(to bottom, #ffffff, #ffffff);
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
    color: #ffffff;
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
    height: 40px;
    padding: 0.35em 3.3em 0.35em 1.2em;
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

.button1 {
    display: block;
    position: relative;
    width: 56px;
    height: 56px;
    margin: 0;
    overflow: hidden;
    outline: none;
    background-color: transparent;
    border: 0;
    cursor: pointer;
}

.button1:before,
.button1:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    inset: 7px;
}

.button1:before {
    border: 4px solid #009087;
    transition: opacity .4s cubic-bezier(.77, 0, .175, 1) 80ms, transform .5s cubic-bezier(.455, .03, .515, .955) 80ms;
}

.button1:after {
    border: 4px solid #ffffff;
    transform: scale(1.3);
    transition: opacity .4s cubic-bezier(.165, .84, .44, 1), transform .5s cubic-bezier(.25, .46, .45, .94);
    opacity: 0;
}

.button1:hover:before,
.button1:focus:before {
    opacity: 0;
    transform: scale(0.7);
    transition: opacity .4s cubic-bezier(.165, .84, .44, 1), transform .5s cubic-bezier(.25, .46, .45, .94);
}

.button1:hover:after,
.button1:focus:after {
    opacity: 1;
    transform: scale(1);
    transition: opacity .4s cubic-bezier(.77, 0, .175, 1) 80ms, transform .5s cubic-bezier(.455, .03, .515, .955) 80ms;
}

.button1-box {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
}

.button1-elem {
    display: block;
    width: 20px;
    height: 20px;
    margin: 17px 18px 0 18px;
    transform: rotate(180deg);
    fill: #00a982;
}

.button1:hover.button-box,
.button1:focus.button-box {
    transition: .4s;
    transform: translateX(-56px);
}


</style>