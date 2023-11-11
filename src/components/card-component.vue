<script>
import mymbtiDescription from "@/data/mbtiDescription";
// import mbtiDescription from "../data/mbtiDescription";

export default {
    name: "cardComponent",
    data(){
        return{
            mbtiDescription:mymbtiDescription,
            keys:Object.keys(mymbtiDescription),
            orderedList:Object.keys(mymbtiDescription).map(key => mymbtiDescription[key]),
        }
    },
    props: {
        imageUrl: {
            type: String,
            required: true
        },
        pictureindex: {
            type: Number,
            required: true
        }
    }

}
</script>

<template>
    <div class="card">
        <div class="picture-container">
            <img :src="imageUrl"  alt="Card Image" class="card-image">
        </div>
        <div class="cardContainer">
            <div class="wordcard">
                <p class="title">{{mbtiDescription[keys[pictureindex]].name}}</p>
                <p class="content">{{mbtiDescription[keys[pictureindex]].shortInstruction}}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.title {
    font-size: 10px;
    font-weight: bold;
}

.content {
    font-size: 10px;
}


.card {
    width: 600px;
    height: 250px;
    background-color: #f1f1f1;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
}

.card-image {
    width: 100%;
    height: 250px;
}

.wordcard {
    position: relative;
    width: 200px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
    border-radius: 10px;
    backdrop-filter: blur(30px);
    background-color: rgba(65, 65, 65, 0.308);
    border: 1px solid rgba(255, 255, 255, 0.089);
    cursor: pointer;
}

.picture-container{
    width: 400px;
    height: 250px;
}

.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>