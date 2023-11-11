

<template>
  <div class="mbtiDisplay" @click="displayInfo">
    <p class="title">{{mbtiType}}</p>
    <p class="text">{{Description}}</p>
  </div>
</template>

<script>
import eventBus from "@/data/eventBus";

export default {
  data() {
    let MyType = this.mbtiType;
    let MyImageSrc = this.imageSrc;
    let MyDetail = this.detail;
    return {
      showInfo: 'true',
      Type: MyType,
      ImageSrc: MyImageSrc,
      Detail: MyDetail,
    }
  },
  props :{
    mbtiType : {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    Description: {
      type: String,
      required: true
    },
    detail: {
      type: String,
      required: true
    },
  },
  methods :{
    displayInfo() {
      eventBus.emit("sendDisplayInfo", this.showInfo);
      eventBus.emit("getMbtiType", this.Type);
      eventBus.emit("getMbtiDetail", this.Detail);
      eventBus.emit("getMbtiImageSrc", this.ImageSrc);
    }
  }
}

</script>

<style scoped>
.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}


.text {
  font-size: 0.9em;
  font-weight: 400;
  text-align: left;
  margin: 15px;
  font-family: Microsoft YaHei, sans-serif;
}

</style>