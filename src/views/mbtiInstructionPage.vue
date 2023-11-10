
<template>
  <div class="display">
  <mbti-card v-for="choice in Choices" :key="choice.id"
             :Description = choice.description
             :image-src = choice.imageSrc
             :mbti-type = choice.mbtiType
             >
  </mbti-card>
  </div>
</template>

<script>
import mbtiCard from "@/components/mbtiCard.vue";
import mbtiDescription from "@/data/mbtiDescription";
import PersonPictureLink from "@/data/16PersonPictureLink";

export default {
  name: "mbtiInstructionPage",
  components: {
    mbtiCard,
  },
  data() {
    return {
      mbtiDescription: mbtiDescription,
      PersonPictureLink: PersonPictureLink,
      Choices: [
        {
          id: 1,
          description: mbtiDescription.intjDescription.shortInstruction,
          imageSrc: PersonPictureLink.intjarchitect,
          mbtiType: "INTJ"
        },
        {
          id: 2,
          description: mbtiDescription.intpDescription.shortInstruction,
          imageSrc: PersonPictureLink.intplogician,
          mbtiType: "INTP"
        },
        {
          id: 3,
          description: mbtiDescription.entjDescription.shortInstruction,
          imageSrc: PersonPictureLink.entjcommander,
          mbtiType: "ENTJ"
        },
        {
          id: 4,
          description: mbtiDescription.entpDescription.shortInstruction,
          imageSrc: PersonPictureLink.entpdebater,
          mbtiType: "ENTP"
        },
        {
          id: 5,
          description: mbtiDescription.infjDescription.shortInstruction,
          imageSrc: PersonPictureLink.infjadvocate,
          mbtiType: "INFJ"
        },
        {
          id: 6,
          description: mbtiDescription.infpDescription.shortInstruction,
          imageSrc: PersonPictureLink.infpmediator,
          mbtiType: "INFP"
        },
        {
          id: 7,
          description: mbtiDescription.enfjDescription.shortInstruction,
          imageSrc: PersonPictureLink.enfjprotagonist,
          mbtiType: "ENFJ"
        },
        {
          id: 8,
          description: mbtiDescription.enfpDescription.shortInstruction,
          imageSrc: PersonPictureLink.enfpcampaigner,
          mbtiType: "ENFP"
        },
        {
          id: 9,
          description: mbtiDescription.istjDescription.shortInstruction,
          imageSrc: PersonPictureLink.istjlogistician,
          mbtiType: "ISTJ"
        },
        {
          d: 10,
          description: mbtiDescription.isfjDescription.shortInstruction,
          imageSrc: PersonPictureLink.isfjdefender,
          mbtiType: "ISFJ"
        },
        {
          id: 11,
          description: mbtiDescription.estjDescription.shortInstruction,
          imageSrc: PersonPictureLink.estjexecutive,
          mbtiType: "ESTJ"
        },
        {
          id: 12,
          description: mbtiDescription.esfjDescription.shortInstruction,
          imageSrc: PersonPictureLink.esfjconsul,
          mbtiType: "ESFJ"
        },
        {
          id: 13,
          description: mbtiDescription.esfpDescription.shortInstruction,
          imageSrc: PersonPictureLink.esfpentertainer,
          mbtiType: "ESFP"
        },
        {
          id: 14,
          description: mbtiDescription.isfpDescription.shortInstruction,
          imageSrc: PersonPictureLink.isfpadventurer,
          mbtiType: "ISFP"
        },
        {
          id: 15,
          description: mbtiDescription.estpDescription.shortInstruction,
          imageSrc: PersonPictureLink.estpentrepreneur,
          mbtiType: "ESTP"
        },
        {
          id: 16,
          description: mbtiDescription.esfpDescription.shortInstruction,
          imageSrc: PersonPictureLink.esfpentertainer,
          mbtiType: "ESFP"
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
  width: 90%;
  height:1300px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

</style>