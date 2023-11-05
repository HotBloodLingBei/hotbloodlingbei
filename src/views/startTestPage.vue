<script>
import RotationChart from '../components/RotationChart.vue'
import chooseTest from "@/components/chooseTest.vue";
export default {
    name: "startTestPage",
    components:{
      RotationChart,
      chooseTest
    }
}

</script>

<template>
<!--<div>开始测试</div>-->
<RotationChart/>
  <chooseTest/>
</template>

<style scoped>

</style>