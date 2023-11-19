<template>
    <div :class="store.ishidden===0 ? 'hidden' : 'show'">
        <svg t="1700369599341" @click="open" class="launch-table" viewBox="0 0 1024 1024" version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             p-id="1057" width="200" height="200">
            <path
                d="M824.446082 151.476947l0 718.53082c0 39.763632-31.909757 71.922053-71.675436 71.922053-18.485003 0-35.205826-7.095605-47.872311-18.486026L230.77294399 568.114019c-31.400151-23.810289-37.993313-68.641333-14.18302399-100.29731 4.052293-5.570879 8.873088-10.384511 14.190187-14.18302399L709.958584 94.235245c31.407314-23.547299 76.479859-17.217127 100.041484 14.436804 9.881045 12.922311 14.43885 27.864628 14.43884999 42.804898l0 0L824.446082 151.476947zM824.446082 151.476947"
                p-id="1058" fill="#8a8a8a"></path>
        </svg>
    </div>
    <div :class="store.ishidden===1 ? 'hidden' : 'show'">
        <div class="outer-container">
            <!--      向右箭头和想做箭头来表示显示和隐藏-->
            <div>
                <svg class="close-icon" @click="close" t="1700367182687" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="907" width="200" height="200">
                    <path
                        d="M512 444.818286l268.946286-268.946286a47.542857 47.542857 0 0 1 67.218285 67.254857l-268.946285 268.946286 268.946285 268.946286a47.542857 47.542857 0 0 1-67.218285 67.218285L512 579.291429l-268.946286 268.946285a47.542857 47.542857 0 1 1-67.218285-67.218285l268.946285-268.946286-268.946285-268.946286a47.542857 47.542857 0 0 1 67.218285-67.254857L512 444.818286z"
                        fill="#A3A4A7" p-id="908"></path>
                </svg>
            </div>
            <div class="inner-container">
                <div class="row" v-for="(questionGroup, groupIndex) in questionGroups"
                     :key="groupIndex">
                    <div class="column" v-for="(question, index) in questionGroup"
                         :key="index"
                         @click="scrollToQuestion(groupIndex*this.questionsPerRow+index)"
                         :style="{color:question.valid===1?'#00a982':'gray'}">
                        {{ groupIndex * this.questionsPerRow + index + 1 }}
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import store from '@/store/store.js'

export default {
    name: "questionTable",
    data() {
        return {
            store,
            questionsPerRow: 10,// 每行显示的题号数量
        }
    },
    methods: {
        scrollToQuestion(index) {
            this.$emit("jumpToQuestion", index)
        },
        close() {
            store.ishidden = 1;
        },
        open() {
            store.ishidden = 0;
        }
    },
    computed: {
        questionGroups() {
            // 根据每行的题号数量将题目分组
            const groups = [];
            let currentGroup = [];

            store.Scores.forEach(question => {
                currentGroup.push(question);

                if (currentGroup.length === this.questionsPerRow) {
                    groups.push(currentGroup);
                    currentGroup = [];
                }
            });
            if (currentGroup.length > 0) {
                groups.push(currentGroup);
            }
            return groups;
        }
    }
}
</script>

<style scoped>
@import "../common/font.css";

.launch-table {
    position: fixed;
    cursor: pointer;
    width: 2em;
    height: 2em;
    right: 0px; /* 调整左侧距离 */
    top: 10%; /* 垂直居中 */
}

.hidden {
    display: none;
}


.close-icon {
    margin-left: 80%;

    cursor: pointer;
    width: 1em;
    height: 1em;
}

.outer-container {
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 20px; /* 调整左侧距离 */
    top: 10%; /* 垂直居中 */
    background: #ffffff;
    box-shadow: 0 0 10px #ccc;
    padding: 5px;
    max-width: 300px; /* 设置最大宽度 */
    max-height: 200px;
    border-radius: 15px;
    z-index: 1;
}

.inner-container {
    padding: 10px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    max-width: 300px; /* 设置最大宽度 */
    max-height: 200px;
}

.row {
    display: flex;
    justify-content: flex-start;
}

.column {
    font-family: P-2, serif;
    display: flex;
    align-items: center; /* 垂直居中 */
    justify-content: center;
    width: 25px;
    height: 25px;
    text-align: center;
    cursor: pointer;
}
</style>