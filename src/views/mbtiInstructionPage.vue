
<template>
  <div class="display">
    <mbti-card v-for="choice in Choices"
               :key="choice.id"
               :mbtiType="choice.mbtiType"
               :imageSrc="choice.imageSrc"
               :Description="choice.description"
               :detail="choice.detail"
               class="mbti-card"/>
  </div>
  <info-card :my-detail="myDetail" :my-image-src="myImageSrc" :my-mbti-type="myMbtiType"
      v-if="showInfo === 'true'" @exit="clickExit"/>
  <div class="blank"></div>
</template>

<script>
import mbtiDescription from "@/data/mbtiDescription";
import PersonPictureLink from "@/data/16PersonPictureLink";
import mbtiDetail from "@/data/mbtiDetail";
import InfoCard from "@/components/InfoCard.vue";
import mbtiCard from "@/components/mbtiCard.vue";
import eventBus from "@/data/eventBus";

export default {
  name: "mbtiInstructionPage",
  components: {
  InfoCard,
  mbtiCard,
  },
  data() {
    return {
      showInfo: 'false',
      mbtiDescription: mbtiDescription,
      PersonPictureLink: PersonPictureLink,
      mbtiDetail: mbtiDetail,
      Choices: [
        {
          id: 1,
          description: mbtiDescription.intjDescription.shortInstruction,
          imageSrc: PersonPictureLink.intj,
          mbtiType: "INTJ",
          detail: mbtiDetail.intjDetail
        },
        {
          id: 2,
          description: mbtiDescription.intpDescription.shortInstruction,
          imageSrc: PersonPictureLink.intp,
          mbtiType: "INTP",
          detail: mbtiDetail.intpDetail
        },
        {
          id: 3,
          description: mbtiDescription.entjDescription.shortInstruction,
          imageSrc: PersonPictureLink.entj,
          mbtiType: "ENTJ",
          detail: mbtiDetail.entjDetail
        },
        {
          id: 4,
          description: mbtiDescription.entpDescription.shortInstruction,
          imageSrc: PersonPictureLink.entp,
          mbtiType: "ENTP",
          detail: mbtiDetail.entpDetail
        },
        {
          id: 5,
          description: mbtiDescription.infjDescription.shortInstruction,
          imageSrc: PersonPictureLink.infj,
          mbtiType: "INFJ",
          detail: mbtiDetail.infjDetail
        },
        {
          id: 6,
          description: mbtiDescription.infpDescription.shortInstruction,
          imageSrc: PersonPictureLink.infp,
          mbtiType: "INFP",
          detail: mbtiDetail.infpDetail
        },
        {
          id: 7,
          description: mbtiDescription.enfjDescription.shortInstruction,
          imageSrc: PersonPictureLink.enfj,
          mbtiType: "ENFJ",
          detail: mbtiDetail.enfjDetail
        },
        {
          id: 8,
          description: mbtiDescription.enfpDescription.shortInstruction,
          imageSrc: PersonPictureLink.enfp,
          mbtiType: "ENFP",
          detail: mbtiDetail.enfpDetail
        },
        {
          id: 9,
          description: mbtiDescription.istjDescription.shortInstruction,
          imageSrc: PersonPictureLink.istj,
          mbtiType: "ISTJ",
          detail: mbtiDetail.istjDetail
        },
        {
          d: 10,
          description: mbtiDescription.isfjDescription.shortInstruction,
          imageSrc: PersonPictureLink.isfj,
          mbtiType: "ISFJ",
          detail: mbtiDetail.isfjDetail
        },
        {
          id: 11,
          description: mbtiDescription.estjDescription.shortInstruction,
          imageSrc: PersonPictureLink.estj,
          mbtiType: "ESTJ",
          detail: mbtiDetail.estjDetail
        },
        {
          id: 12,
          description: mbtiDescription.esfjDescription.shortInstruction,
          imageSrc: PersonPictureLink.esfj,
          mbtiType: "ESFJ",
          detail: mbtiDetail.esfjDetail
        },
        {
          id: 13,
          description: mbtiDescription.esfpDescription.shortInstruction,
          imageSrc: PersonPictureLink.esfp,
          mbtiType: "ESFP",
          detail: mbtiDetail.esfpDetail
        },
        {
          id: 14,
          description: mbtiDescription.isfpDescription.shortInstruction,
          imageSrc: PersonPictureLink.isfp,
          mbtiType: "ISFP",
          detail: mbtiDetail.isfpDetail
        },
        {
          id: 15,
          description: mbtiDescription.estpDescription.shortInstruction,
          imageSrc: PersonPictureLink.estp,
          mbtiType: "ESTP",
          detail: mbtiDetail.estpDetail
        },
        {
          id: 16,
          description: mbtiDescription.esfpDescription.shortInstruction,
          imageSrc: PersonPictureLink.esfp,
          mbtiType: "ESFP",
          detail: mbtiDetail.esfpDetail
        },
      ],
      myMbtiType: "",
      myImageSrc: "",
      myDetail: "",
    }
  },
  created() {
    this.getData();
  },
  methods :{
    clickExit() {
      this.showInfo = false;
    },
    getData() {
      eventBus.on("sendDisplayInfo", (showInfo) => {
        this.showInfo = showInfo;
      });
      eventBus.on("getMbtiType", (mbtiType) => {
        this.myMbtiType = mbtiType;
      });
      eventBus.on("getMbtiDetail", (mbtiDetail) => {
        this.myDetail = mbtiDetail;
      });
      eventBus.on("getMbtiImageSrc", (mbtiImageSrc) => {
        this.myImageSrc = mbtiImageSrc;
      });
    }
  }
}
</script>

<style scoped>
.mbti-card {
    position: relative;
    margin-top: 10px;
}

.display {
    position: relative;
    margin-left: 8%;
    margin-right: 8%;
    top: 50px;
    width: 90%;
    height: 1000px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
}

.blank {
  height: 200px;
}

</style>