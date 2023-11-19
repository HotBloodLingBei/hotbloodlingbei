<template>
  <!--  <div class="logoContainer">-->
  <!--    <img-->
  <!--        :src="imageSrc"-->
  <!--        class="responsive-logo"-->
  <!--    />-->
  <!--    <img-->
  <!--            -->
  <!--        :src="logoSrc"-->
  <!--        class="responsive-logo"-->
  <!--    />-->
  <!--  </div>-->
    <div class="imgContainer">
        <div class="boxContainer">
            <div class="check-box">
                <img
                        :src="image1Src"
                        :style="{ filter: image1Filtered ? 'none' : 'blur(5px)' }"
                        class="responsive-image"
                        @click="toggleImage1Filter"
                />
                极速版
            </div>
        </div>
        <div class="boxContainer">
            <div class="check-box">
                <img
                        :src="image2Src"
                        :style="{ filter: image2Filtered ? 'none' : 'blur(5px)' }"
                        class="responsive-image"
                        @click="toggleImage2Filter"
                />
                标准版
            </div>
        </div>
    </div>
    <div class="imgContainer">
        <button class="responsive-button" :style="{height:isMobile ? '100%' : '50px' , width: isMobile ? '20%' : '140px'}"
                @click="handleJump">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path fill="currentColor"
                      d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
            </svg>
            <span>进入测试</span>
        </button>
    </div>
    <MyModal
            v-if="isModalVisible"
            content="请先选择测试类型"
            @close="closeModal"
    />
</template>

<style scoped>
@import "../common/font.css";


.boxContainer {
    padding: 10px;
    margin: 10px;
}

.imgContainer {
    font-family: LongZhuTi-Regular, serif;
    padding: 0;
    margin-bottom: 10px;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}

.logoContainer {
    padding: 20px;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.responsive-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.responsive-button {
    margin-top: 1em;
    margin-bottom: 1.5em;
    width: 20%;
    object-fit: contain;
    justify-content: center;
    align-items: center;
}

.responsive-logo {
    width: 10%;
    height: 10%;
    object-fit: contain;
}

.check-box {
    cursor: pointer;
    border-radius: 24px;
    background: #ffffff;
    box-shadow: 5px 5px 10px #bebebe,
    -5px -5px 10px #ffffff;
    padding: 10px;
    transition: transform 0.3s ease;
}

.check-box:hover {
    transform: translateY(-10px);
}

button {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-family: inherit;
    font-weight: 500;
    font-size: 17px;
    padding: 0.8em 1.3em 0.8em 0.9em;
    color: white;
    background: #ad5389;
    background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
    border: none;
    letter-spacing: 0.05em;
    border-radius: 16px;
}

button svg {
    margin-right: 3px;
    transform: rotate(30deg);
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
}

button span {
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
}

button:hover svg {
    transform: translateX(5px) rotate(90deg);
}

button:hover span {
    transform: translateX(7px);
}

button:active {
    filter: brightness(.8);
}

</style>

<script>
import store from '@/store/store.js'
import questionsConciseVersion from '@/data/questionsConciseVersion.js'
import questionsAccurateVersion from "@/data/questionsAccurateVersion"
import MyModal from "@/components/MyModal.vue";
var userAgent = navigator.userAgent;

export default {
    name: "chooseTest",
    components: {
        MyModal
    },
    data() {
        return {
            questionsConciseVersion,
            questionsAccurateVersion,
            store,
            image1Src: 'https://16personalitie.zbwlkj.cn/static/images/mbti/svg/protagonist.svg',
            image2Src: 'https://16personalitie.zbwlkj.cn/static/images/mbti/svg/analysis.svg',
            //是否被选中
            image1Filtered: false,
            image2Filtered: false,
            imageSrc: 'https://raw.githubusercontent.com/DXHeroes/knowledge-base-content/master/files/16personalities.png',
            logoSrc: require('../assets/mbti.jpg'),
            // true会产生提示框
            isModalVisible: false,

            isMobile: !/Mobile||Android||iPhone||iPod||BlackBerry||IEMobile||Opera Mini/i.test(userAgent)
        };
    },
    methods: {
        toggleImage1Filter() {
            this.image1Filtered = true;
            this.image2Filtered = false;
        },
        toggleImage2Filter() {
            this.image1Filtered = false;
            this.image2Filtered = true;
        },
// 取变量testType和Scores至Store
// 处理跳转，这里应该改成只改状态
      handleJump() {
          // 初始化变量，从localStorage中取出变量
            let StrTestType1 = localStorage.getItem("testType1")
            let StrTestType2 = localStorage.getItem("testType2")
            let StrScores1 = localStorage.getItem("Scores1")
            let StrScores2 = localStorage.getItem("Scores2")
            let localStorageExistStatus1 = false;
            let localStorageExistStatus2 = false;
          // 解析localStorage中既有题目的保存状态
            if (StrTestType1 && StrScores1) {
                var testType1 = JSON.parse(StrTestType1);
                var Scores1 = JSON.parse(StrScores1);
                localStorageExistStatus1 = true
            }
            if (StrTestType2 && StrScores2) {
                var testType2 = JSON.parse(StrTestType2);
                var Scores2 = JSON.parse(StrScores2);
                localStorageExistStatus2 = true
            }
            //console.log(localStorageExistStatus + StrTestType + StrScores)
            // 在选了第一个的情况
            if (this.image1Filtered === true) {
                // 处理存在时的逻辑，并且testType与标准版相同，直接恢复store
                if (localStorageExistStatus1 === true) {
                    store.Scores = Scores1
                    store.testType = testType1
                } else {//处理不存在的逻辑
                    store.testType = "conciseVersion"
                    //         用于区分初始值0和赋值0，判断答案是否有效
                    store.Scores=[]
                    for (let eachQuestion of questionsConciseVersion.questionList) {
                        store.Scores.push({dimension: eachQuestion.dimension, value: 0, valid: 0})
                    }
                    store.testType = testType1
                    // console.log(store.Scores)
                }
                // 记录最前面一个未做完的题目的位置
                let idx = 0
                // bug显示valid为undefined
                while (idx < store.Scores.length && store.Scores[idx].valid > 0) {
                    idx++
                }
                if (idx >= store.Scores.length) {
                    store.initialIdx = idx - 1
                } else {
                    store.initialIdx = idx
                }
                this.$router.push('/testPage1')
            }
            //     在选择第二个的情况下
            else if (this.image2Filtered === true) {
                if (localStorageExistStatus2 === true) {
                    store.Scores = Scores2
                    store.testType = testType2
                } else {//处理不存在的逻辑
                    store.testType = "accurateVersion"
                    store.Scores=[]
                    for (let eachQuestion of questionsAccurateVersion.questionList) {
                        store.Scores.push({dimension: eachQuestion.dimension, value: 0, valid: 0})
                    }
                }
                let idx = 0
                while (idx < store.Scores.length && store.Scores[idx].valid > 0) {
                    idx++
                }
                if (idx >= store.Scores.length) {
                    store.initialIdx = idx - 1
                } else {
                    store.initialIdx = idx
                }
                this.$router.push('/testPage2')
            }
            // 如果都没有选则将弹出提示框
            else {
                this.isModalVisible = true;
            }
        },
      closeModal() {
        this.isModalVisible = false;
      },
    },
}

</script>

