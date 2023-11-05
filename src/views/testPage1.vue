<script>
import TestTips from "@/components/TestTips.vue";

import QuestionContainer from "@/components/questionContainer.vue";

export default {
  name: "testPage1",
  components: {
    QuestionContainer,
    TestTips,
  },
}
</script>

<template>
  <div>开始测试1</div>
  <questionContainer/>
  <TestTips/>
</template>

<style scoped>

</style>