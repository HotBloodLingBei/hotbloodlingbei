

<template>
  <div class="mbtiDisplay" @click="showInfo = true">
    <p class="title">{{mbtiType}}</p>
    <p class="text">{{Description}}</p>
  </div>
  <info-card class="info-card" :detail="detail" :mbti-type="mbtiType" :imageSrc="imageSrc" v-show="showInfo"
             @exit="click"></info-card>

</template>

<script>
import infoCard from "@/components/InfoCard.vue";

export default {
  components:{
    infoCard,
  },
  data() {
    return {
      showInfo: false,
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
    click(item) {
      this.showInfo = item;
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