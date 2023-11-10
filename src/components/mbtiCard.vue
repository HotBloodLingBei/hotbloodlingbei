

<template>
      <div class="mbti-card">
        <div class="mbti-card-inner">
          <div class="mbti-card-front">
            <img :src="imageSrc" alt="MBTI-Image" class="img"/>
            <p>{{mbtiType}}</p>
          </div>
          <div class="mbti-card-back">
            <mbtiCardBackDisplay :mbtiType="mbtiType" :imageSrc="imageSrc" :Description="Description" :detail="detail"/>
          </div>
        </div>
      </div>
</template>

<script>
import mbtiCardBackDisplay from "@/components/mbtiCardBackDisplay.vue";

export default {
  components : {
    mbtiCardBackDisplay
  },
  props: {
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
    detail : {
      type: String,
      required: true
    },
  },
}

</script>

<style scoped>
.mbti-card {
  background-color: transparent;
  width: 190px;
  height: 254px;
  perspective: 1000px;
  font-family: sans-serif;
}

.mbti-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.mbti-card:hover .mbti-card-inner {
  transform: rotateY(180deg);
}

.mbti-card-front {
  box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid #176d22;
  border-radius: 1rem;
}

.mbti-card-front {
  background: linear-gradient(120deg, #c4ffd7 60%, rgb(222, 250, 255) 88%,
  rgb(195, 255, 228) 40%, rgba(30, 147, 57, 0.84) 48%);
  color: #176d22;
}

.mbti-card-back {
  background: linear-gradient(120deg, #2ea83e 30%, #176d22 88%,
  #c4ffd7 40%, rgba(149, 196, 166, 0.56) 78%);
  color: white;
  transform: rotateY(180deg);
}

.mbti-card-back {
  box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid #176d22;
  border-radius: 1rem;
  z-index: 100;
}

.img {
  margin: 8px;
}

</style>