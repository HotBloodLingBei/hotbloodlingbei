<script>
import PersonPictureLink from '../data/16PersonPictureLink'
export default ({
    name: "RotationChartContent",
    data() {
        return {
              PersonPictureLinks:PersonPictureLink,
            imgList: [PersonPictureLink.enfpcampaigner,
                PersonPictureLink.enfjprotagonist,
                PersonPictureLink.esfjconsul,
                PersonPictureLink.entjcommander,
                PersonPictureLink.entpdebater],
        }
    }
})

</script>

<template>
    <!-- 这里设置了水平对齐，通过设置left的值（在上衣容器中的位置）实现滑动的效果 -->
    <div class="imgBox" v-bind:style="{left:`-${leftVal}px`,transition:ition+'s'}">
        <div  v-for="(item,index) in imgList" :key="index">
            <img v-bind:src="item.imgUrl" alt=""/>
            <!-- 复制第一张放到最后,以实现无缝无线循环滚动效果 -->
            <!--                alt是替代属性，当无法显示时显示alt-->
            <img v-bind:src="imgList[0].imgUrl" alt=""/>
        </div>
    </div>
</template>

<style scoped>

</style>