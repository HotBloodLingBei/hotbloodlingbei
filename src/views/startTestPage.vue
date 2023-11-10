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
    <div class="contentBox">
<RotationChart class="rotationChart"/>
  <chooseTest/>
  <screenshot-button>截图</screenshot-button>
    </div>
</template>

<style scoped>
.rotationChart{
    //position: absolute;
    top: 0; /* 将轮播图置顶 */
}
.contentBox{
  display: flex;
    flex-direction: column;
}
</style>