

<template>
  <div class="mbtiDisplay">
    <img :src="imageSrc" alt="MBTI-Image"/>
    <p>{{mbtiType}}</p>
    <p>{{Description}}</p>
  </div>
</template>

<script>
export default {
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
  }
}

</script>

<style scoped>

</style>