
<template>
  <div class="display">
  <mbti-card v-for="choice in Choices" :key="choice.id"
             :Description = choice.description
             :image-src = choice.imageSrc
             :mbti-type = choice.mbtiType
             :detail = choice.detail>
  </mbti-card>
  </div>
  <div class="blank"></div>
</template>

<script>
import mbtiCard from "@/components/mbtiCard.vue";
import mbtiDescription from "@/data/mbtiDescription";
import PersonPictureLink from "@/data/16PersonPictureLink";
import mbtiDetail from "@/data/mbtiDetail";

export default {
  name: "mbtiInstructionPage",
  components: {
    mbtiCard,
  },
  data() {
    return {
      mbtiDescription: mbtiDescription,
      PersonPictureLink: PersonPictureLink,
      mbtiDetail: mbtiDetail,
      Choices: [
        {
          id: 1,
          description: mbtiDescription.intjDescription.shortInstruction,
          imageSrc: PersonPictureLink.intjarchitect,
          mbtiType: "INTJ",
          detail: mbtiDetail.intjDetail
        },
        {
          id: 2,
          description: mbtiDescription.intpDescription.shortInstruction,
          imageSrc: PersonPictureLink.intplogician,
          mbtiType: "INTP",
          detail: mbtiDetail.intpDetail
        },
        {
          id: 3,
          description: mbtiDescription.entjDescription.shortInstruction,
          imageSrc: PersonPictureLink.entjcommander,
          mbtiType: "ENTJ",
          detail: mbtiDetail.entjDetail
        },
        {
          id: 4,
          description: mbtiDescription.entpDescription.shortInstruction,
          imageSrc: PersonPictureLink.entpdebater,
          mbtiType: "ENTP",
          detail: mbtiDetail.entpDetail
        },
        {
          id: 5,
          description: mbtiDescription.infjDescription.shortInstruction,
          imageSrc: PersonPictureLink.infjadvocate,
          mbtiType: "INFJ",
          detail: mbtiDetail.infjDetail
        },
        {
          id: 6,
          description: mbtiDescription.infpDescription.shortInstruction,
          imageSrc: PersonPictureLink.infpmediator,
          mbtiType: "INFP",
          detail: mbtiDetail.infpDetail
        },
        {
          id: 7,
          description: mbtiDescription.enfjDescription.shortInstruction,
          imageSrc: PersonPictureLink.enfjprotagonist,
          mbtiType: "ENFJ",
          detail: mbtiDetail.enfjDetail
        },
        {
          id: 8,
          description: mbtiDescription.enfpDescription.shortInstruction,
          imageSrc: PersonPictureLink.enfpcampaigner,
          mbtiType: "ENFP",
          detail: mbtiDetail.enfpDetail
        },
        {
          id: 9,
          description: mbtiDescription.istjDescription.shortInstruction,
          imageSrc: PersonPictureLink.istjlogistician,
          mbtiType: "ISTJ",
          detail: mbtiDetail.istjDetail
        },
        {
          d: 10,
          description: mbtiDescription.isfjDescription.shortInstruction,
          imageSrc: PersonPictureLink.isfjdefender,
          mbtiType: "ISFJ",
          detail: mbtiDetail.isfjDetail
        },
        {
          id: 11,
          description: mbtiDescription.estjDescription.shortInstruction,
          imageSrc: PersonPictureLink.estjexecutive,
          mbtiType: "ESTJ",
          detail: mbtiDetail.estjDetail
        },
        {
          id: 12,
          description: mbtiDescription.esfjDescription.shortInstruction,
          imageSrc: PersonPictureLink.esfjconsul,
          mbtiType: "ESFJ",
          detail: mbtiDetail.esfjDetail
        },
        {
          id: 13,
          description: mbtiDescription.esfpDescription.shortInstruction,
          imageSrc: PersonPictureLink.esfpentertainer,
          mbtiType: "ESFP",
          detail: mbtiDetail.esfpDetail
        },
        {
          id: 14,
          description: mbtiDescription.isfpDescription.shortInstruction,
          imageSrc: PersonPictureLink.isfpadventurer,
          mbtiType: "ISFP",
          detail: mbtiDetail.isfpDetail
        },
        {
          id: 15,
          description: mbtiDescription.estpDescription.shortInstruction,
          imageSrc: PersonPictureLink.estpentrepreneur,
          mbtiType: "ESTP",
          detail: mbtiDetail.estpDetail
        },
        {
          id: 16,
          description: mbtiDescription.esfpDescription.shortInstruction,
          imageSrc: PersonPictureLink.esfpentertainer,
          mbtiType: "ESFP",
          detail: mbtiDetail.esfpDetail
        },
      ]
    }
  },
}
</script>

<style scoped>
.display {
  position:relative;
  left: 10%;
  top: 180px;

  width: 90%;
  height:1800px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
}

.blank {
  height: 200px;
}

</style>