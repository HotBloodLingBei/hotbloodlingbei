<script>

import screenshotButton from "@/components/screenshot-button.vue";
import learnMoreButton from "@/components/learn-more-button.vue";
import restartTestButton from "@/components/restart-test-button.vue";
import shareButton from "@/components/share-button.vue";
import mbtiDetail from "@/data/mbtiDetail.js";
import store from "@/store/store.js";

// import PersonPictureLink from "@/data/16PersonPictureLink.js";
export default {
    name: "resultPage",
    data() {
        return {
            // mbtiType:store.mbtiType,
            mbtiType: store.mbtiType,
            mbtiDescription: mbtiDetail[store.mbtiType + "Detail"],
            // mbtiPictureLink: PersonPictureLink[store.mbtiType],
            mbtiPicture: require('@/assets/' + store.mbtiType + '.svg')
        }
    },
    // 需要做的就是在结果产生的那一刻将值放到localstorage里面去，然后一进入到这个页面就将值拿出来，放到store里面去，再去刷新页面就可以看到
    beforeCreate() {
        console.log('函数已执行');
        let mbtiType = localStorage.getItem("mbtiType");
        // mbtiType存在的情况
        if (mbtiType) {
            console.log('函数已执行2');
            //   直接覆盖掉mbtiType
            store.mbtiType = mbtiType;
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
        <div class="card">
            <div class="img">
                <img class="mbtiImage" :src="mbtiPicture" alt="">
                <p class="title">你的MBTI类型是：{{ mbtiType }}型人格</p>
            </div>
            <div class="textContainer">
                <div class="mbtiDescription">{{ mbtiDescription }}</div>

            </div>

        </div>
        <div class="ButtonContainer">
            <restart-test-button class="button">重新测试</restart-test-button>
            <learn-more-button class="button">了解更多</learn-more-button>
            <screenshot-button class="button">生成截图</screenshot-button>
            <share-button class="button">立即分享</share-button>
        </div>
    </div>
</template>

<style scoped>
@import '../common/font.css';


.title {
    font-size: 30px;
}

.button {
    margin-left: 20px;
//margin-right: 0px;
}

.mbtiDescription {
    font-family: 站酷仓耳渔阳体, serif;
    white-space: pre-line;
    text-align: left;
}

.contentContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.ButtonContainer {
//height: 100px; //width: 100%; display: flex; justify-content: space-between; display: flex; //flex-direction: column; align-items: center; padding: 0 25%; margin-bottom: 20px; margin-top: 0px; justify-content: space-between;
}

.mbtiImage {
    margin-left: 100px;
    object-fit: contain;
}

.card {
    width: 75%;
  margin-top: 70px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  background: white;
    border-radius: 30px;
    box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
    transition: 0.2s ease-in-out;
}


.img {
    width: 100%;
    height: 200px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background: linear-gradient(#e66465, #9198e5);
    display: flex;
    justify-content: center;
}


.title {
    font-family: 杨任东竹石体, Microsoft YaHei, sans-serif;
    width: 60%;
    text-align: center;
    display: flex;
    align-items: center;

}

.textContainer {
    margin: 20px;
    flex-direction: column;
    display: inline-block;
    max-width: max-content;
}


.card:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}


</style>