<template>
  <div class="outer-container">
    <div class="inner-container">
      <div class="row" v-for="(questionGroup, groupIndex) in questionGroups"
           :key="groupIndex">
        <div class="column" v-for="(question, index) in questionGroup"
             :key="index"
             @click="scrollToQuestion(groupIndex*this.questionsPerRow+index)"
             :style="{color:question.valid===1?'#00a982':'gray'}">
          {{ groupIndex*this.questionsPerRow+index+1 }}
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import store from '@/store/store.js'
export default {
  name: "questionTable",
  data(){
    return{
      store,
      questionsPerRow: 10 // 每行显示的题号数量
    }
  },
  methods: {
    scrollToQuestion(index){
      this.$emit("jumpToQuestion",index)
    }
  },
  computed:{
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
.outer-container{
  display: flex;
  position: fixed;
  right: 20px; /* 调整左侧距离 */
  bottom: 60%; /* 垂直居中 */
  background: #ffffff;
  box-shadow: 0 0 10px #ccc;
  padding: 5px;
  max-width: 300px; /* 设置最大宽度 */
  max-height: 200px;
  border-radius: 15px;
  z-index: 1;
}
.inner-container{
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-width: 300px; /* 设置最大宽度 */
  max-height: 200px;
}
.row{
  display: flex;
  justify-content: flex-start;
}
.column{
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center;
  width: 25px;
  height: 25px;
  text-align: center;
  cursor: pointer;
}
</style>