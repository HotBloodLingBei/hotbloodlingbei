<script>
import screenshotButton from "@/components/screenshot-button.vue";
import learnMoreButton from "@/components/learn-more-button.vue";
import restartTestButton from "@/components/restart-test-button.vue";
import shareButton from "@/components/share-button.vue";
export default {
    name: "resultPage",
    components:{
      screenshotButton,
        learnMoreButton,
        restartTestButton,
        shareButton
    }
}
</script>

<template>
    <div class="ButtonContainer">
        <share-button>分享</share-button>
        <screenshot-button>截图</screenshot-button>
        <learn-more-button>了解更多</learn-more-button>
        <restart-test-button>重新测试</restart-test-button>
    </div>
</template>

<style scoped>
.ButtonContainer{
    display: flex;
    justify-content: space-between;
    padding: 0 25%;
    margin-bottom: 20px;
    margin-top: 60px;
}
</style>