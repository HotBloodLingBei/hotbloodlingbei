<script>
import RotationChart from '../components/RotationChart.vue'
import chooseTest from "@/components/chooseTest.vue";
export default {
    name: "startTestPage",
    components: {
        RotationChart,
        chooseTest,
    },
    beforeCreate() {
    }
}

</script>

<template>
    <div class="contentBox">
<RotationChart class="rotationChart"/>
  <chooseTest/>
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
  align-items: center;
}
</style>