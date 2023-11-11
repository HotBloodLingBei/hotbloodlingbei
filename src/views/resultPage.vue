<script>
// import store from "@/store/store.js";
import screenshotButton from "@/components/screenshot-button.vue";
import learnMoreButton from "@/components/learn-more-button.vue";
import restartTestButton from "@/components/restart-test-button.vue";
import shareButton from "@/components/share-button.vue";

export default {
    name: "resultPage",
    data() {
        return {
            // mbtiType:store.mbtiType,
            mbtiType: "intj",
            mbtiDescription: {},
            mbtiPicture: require("@/assets/intj-architect.svg")
        }
    },
    components: {
        screenshotButton,
        learnMoreButton,
        restartTestButton,
        shareButton
    }
}
</script>

<template>
    <div class="contentContainer">
        <img class="mbtiImage" :src="mbtiPicture" alt="">
        <p class="resultTitle">你的MBTI类型是：{{ mbtiType }}</p>
        <div class="mbtidescription">{{ mbtiDescription }}</div>
        <div class="ButtonContainer">
            <share-button>分享</share-button>
            <screenshot-button>截图</screenshot-button>
            <learn-more-button>了解更多</learn-more-button>
            <restart-test-button>重新测试</restart-test-button>
        </div>
    </div>
</template>

<style scoped>
.contentContainer {
//display: flex; //justify-content: center;
}

.ButtonContainer {
//height: 100px; //width: 100%; display: flex; justify-content: space-between;
    padding: 0 25%;
    margin-bottom: 20px;
    margin-top: 60px;
}

.mbtiImage {
    width: 50%;
    height: 50%;
}

</style>