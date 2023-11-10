

<template>
  <div class="mbtiDisplay" @click="showInfo">
    <p class="title">{{mbtiType}}</p>
    <p>{{Description}}</p>
  </div>
  <info-card detail= mbtitype=mbtiType
</template>

<script>
import infoCard from "@/components/InfoCard.vue";

export default {
  components:{
    infoCard,
  },
  data() {
    return {

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
  },

  methods :{
    showInfo : {

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

</style>