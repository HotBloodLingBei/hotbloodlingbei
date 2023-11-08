
<template>
  <div class="display">
  <mbti-card v-for="choice in Choices" :key="choice.id"
             :description = choice.description
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
          description: mbtiDescription.enfpDescription,
          imageSrc: PersonPictureLink.enfpcampaigner,
          mbtiType: "ENFP"
        },
        {
          id: 2,
          description: mbtiDescription.enfjDescription,
          imageSrc: PersonPictureLink.enfjprotagonist,
          mbtiType: "ENFJ"
        },
        {
          id: 3,
          description: mbtiDescription.esfjDescription,
          imageSrc: PersonPictureLink.esfjconsul,
          mbtiType: "ESFJ"
        },
        {
          id: 4,
          description: mbtiDescription.entjDescription,
          imageSrc: PersonPictureLink.entjcommander,
          mbtiType: "ENTJ"
        },
        {
          id: 5,
          description: mbtiDescription.entpDescription,
          imageSrc: PersonPictureLink.entpdebater,
          mbtiType: "ENTP"
        },
        {
          id: 6,
          description: mbtiDescription.esfpDescription,
          imageSrc: PersonPictureLink.esfpentertainer,
          mbtiType: "ESFP"
        },
        {
          id: 7,
          description: mbtiDescription.estjDescription,
          imageSrc: PersonPictureLink.estjexecutive,
          mbtiType: "ESTJ"
        },
        {
          id: 8,
          description: mbtiDescription.estpDescription,
          imageSrc: PersonPictureLink.estpentrepreneur,
          mbtiType: "ESTP"
        },
        {
          id: 9,
          description: mbtiDescription.infjDescription,
          imageSrc: PersonPictureLink.infjadvocate,
          mbtiType: "INFJ"
        },
        {
          id: 10,
          description: mbtiDescription.infpDescription,
          imageSrc: PersonPictureLink.infpmediator,
          mbtiType: "INFP"
        },
        {
          id: 11,
          description: mbtiDescription.intjDescription,
          imageSrc: PersonPictureLink.intjarchitect,
          mbtiType: "INTJ"
        },
        {
          id: 12,
          description: mbtiDescription.intpDescription,
          imageSrc: PersonPictureLink.intplogician,
          mbtiType: "INTP"
        },
        {
          id: 13,
          description: mbtiDescription.isfjDescription,
          imageSrc: PersonPictureLink.isfjdefender,
          mbtiType: "ISFJ"
        },
        {
          id: 14,
          description: mbtiDescription.isfpDescription,
          imageSrc: PersonPictureLink.isfpadventurer,
          mbtiType: "ISFP"
        },
        {
          id: 15,
          description: mbtiDescription.istjDescription,
          imageSrc: PersonPictureLink.istjlogistician,
          mbtiType: "ISTJ"
        },
        {
          id: 16,
          description: mbtiDescription.istpDescription,
          imageSrc: PersonPictureLink.istpvirtuoso,
          mbtiType: "ISTP"
        },
      ]
    }
  },
}
</script>

<style scoped>
.display {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

</style>