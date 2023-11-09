<script>
import RotationChart from '../components/RotationChart.vue'
import chooseTest from "@/components/chooseTest.vue";
import screenshotButton from "@/components/screenshot-button.vue";
export default {
    name: "startTestPage",
    components:{
      RotationChart,
      chooseTest,
        screenshotButton
    }
}

</script>

<template>
<div>开始测试</div>
<RotationChart/>
  <chooseTest/>
  <screenshot-button>截图</screenshot-button>
</template>

<style scoped>

</style>