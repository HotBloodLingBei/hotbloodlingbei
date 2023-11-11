<script>
import PersonPictureLink from "@/data/16PersonPictureLink";
import cardComponent from "@/components/card-component";


export default {
    name: "RotationChart",
    components: {cardComponent},
    el: "#app",
    data() {
        return {
            // imgList: [
            //     {imgUrl: "https://img14.360buyimg.com/pop/s590x470_jfs/t1/107362/20/24177/90602/6233decdE5627d944/b7194e538e3c8c7a.jpg"},
            //     {imgUrl: "https://img12.360buyimg.com/pop/s590x470_jfs/t1/204028/36/25480/101429/62f507a7Ec62b0cd3/db5984ae24ce0212.jpg"},
            //     {imgUrl: "https://imgcps.jd.com/ling4/100022552927/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5f3a47329785549f6bc7a6e6/075268d0/cr/s/q.jpg"},
            //     {imgUrl: "https://imgcps.jd.com/ling4/100026667910/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5f3a47329785549f6bc7a6e3/d7b3695b/cr/s/q.jpg"},
            //     {imgUrl: "https://img30.360buyimg.com/pop/s590x470_jfs/t1/201288/25/23710/64955/62f070fdE95cb4f47/22b916d938a43bb5.jpg"},
            // ],
            imgList: [PersonPictureLink.enfpcampaigner,
                PersonPictureLink.enfjprotagonist,
                PersonPictureLink.entjcommander,
                PersonPictureLink.entpdebater,
                PersonPictureLink.esfjconsul,
            PersonPictureLink.estjexecutive,
            PersonPictureLink.esfpentertainer,
            PersonPictureLink.estpentrepreneur,
            PersonPictureLink.infjadvocate,
            PersonPictureLink.infpmediator,
            PersonPictureLink.intjarchitect,
            PersonPictureLink.intplogician,
            PersonPictureLink.isfjdefender,
                PersonPictureLink.istjlogistician,
            PersonPictureLink.isfpadventurer,
                PersonPictureLink.istpvirtuoso],
            leftVal: 0, // 轮播图盒子的偏移值
            flag: true, // 用来节流防止重复点击
            start: null, // 自动执行下一张定的时器
            imgWidth: 600, // 在这里填写你需要的图片宽度
            ition: 0.6, // 设置轮播图过度时间
            imgShow: 0, // 表示当前显示的图片索引
        };
    },
    mounted() {
        // this.imgWidth = this.$refs.SwiperBox.offsetWidth // 自动获取轮播图盒子宽度
        this.setTimeFun()
    },
    methods: {
        // 这里定义一个鼠标移入移出事件，鼠标悬停时停止自动轮播，鼠标移出则重新执行自动轮播
        MouseFun(type) { // 停止定时器            // 重新执行定时器
            type === '移入' ? clearTimeout(this.start) : this.setTimeFun()
        },
        // 此为自动轮播定时器
        setTimeFun() {
            this.start = setInterval(() => {
                this.NextFun()
            }, 1500)
        },
        // 这里通过额外封装的节流函数触发 PrevFun() 和 NextFun(),以达到防止重复点击的效果
        throttle(fun) {
            if (this.flag) {
                this.flag = false;
                fun(); // 此为模板中传递进来的PrevFun()或NextFun()函数
                setTimeout(() => {
                    this.flag = true;
                }, 650); // 设置节流间隔时间,不得小于图片过渡时间
            }
        },
        // 上一张
        PrevFun() {
            if (this.leftVal === 0) { // 判断显示的图片 是 第一张时执行
                // this.imgList.length是指循环图片数组的图片个数
                this.ition = 0 // 将过渡时间变成0，瞬间位移到最后一张图  (也就是多的一个第一张图片)
                this.imgShow = this.imgList.length - 1 // 将高亮小点改为最后一张图
                this.leftVal = this.imgList.length * this.imgWidth // 瞬间移动
                this.$nextTick(() => {	// $nextTick是一个vue内置函数,是一个等待dom元素更新后执行的回调函数
                    setTimeout(() => { // 通过延时障眼法,归原过渡时间,执行真正的“上一张”函数
                        this.ition = 0.6
                        this.leftVal -= this.imgWidth
                    }, this.ition * 1000)
                })
            } else { // 判断显示的图片 不是 第一张时执行
                this.ition = 0.6
                this.leftVal -= this.imgWidth
                this.imgShow--
            }
        },
        // 下一张
        NextFun() {
            if (this.leftVal === (this.imgList.length - 1) * this.imgWidth) { // 判断显示的图片 是 最后一张时执行
                this.ition = 0.6
                this.leftVal += this.imgWidth
                this.imgShow = 0
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.ition = 0
                        this.leftVal = 0
                    }, this.ition * 1000)
                })
            } else { // 判断显示的图片 不是 最后一张时执行
                this.ition = 0.6
                this.leftVal += this.imgWidth
                this.imgShow++
            }
        },
        // 点击小圆点
        instFun(index) {
            this.ition = 0.6
            this.leftVal = index * this.imgWidth
            this.imgShow = index
        },
    }
}
</script>

<template>
    <div id="app">
<!--        这里设置了超出的部分裁剪-->
        <div class="SwiperBox" ref="SwiperBox" v-on:mouseenter="MouseFun('移入')" v-on:mouseleave="MouseFun('移出')">
            <!-- 这里设置了水平对齐，通过设置left的值（在上衣容器中的位置）实现滑动的效果 -->
            <div class="imgBox" v-bind:style="{left:`-${leftVal}px`,transition:ition+'s'}">
                <div v-for="(item,index) in imgList" :key="index">
                    <cardComponent v-bind:imageUrl="imgList[index]" v-bind:pictureindex="imgShow"/>
                </div>
                <cardComponent v-bind:imageUrl="imgList[0]" v-bind:pictureindex="imgShow"/>
<!--                <img v-bind:src="item" v-for="(item,index) in imgList" :key="index"/>-->
                <!-- 复制第一张放到最后,以实现无缝无线循环滚动效果 -->
<!--                alt是替代属性，当无法显示时显示alt-->
<!--                <img v-bind:src="imgList[0]" alt=""/>-->
            </div>
            <!-- 左箭头按钮 -->
<!--            <div class="leftBtn" v-on:click="throttle(PrevFun)">&larr;</div>-->
            <svg  t="1699444724168" class="icon leftBtn"  v-on:click="throttle(PrevFun)" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1252" width="200" height="200"><path d="M512 0C794.774588 0 1024 229.225412 1024 512S794.774588 1024 512 1024s-512-229.225412-512-512 229.225412-512 512-512z m0 60.235294c-249.49458799 0-451.764706 202.270118-451.764706 451.764706 0 249.49458799 202.270118 451.764706 451.764706 451.764706C761.494588 963.764706 963.764706 761.494588 963.764706 512c0-249.49458799-202.270118-451.764706-451.764706-451.764706z" fill="#bfbfbf" p-id="1253"></path><path d="M359.273412 469.413647L572.235294 256.45176501l42.586353 42.58635299L401.88988199 512l212.93176501 212.961882L572.235294 767.54823499 316.68705901 512l42.58635299-42.586353z" fill="#bfbfbf" p-id="1254"></path></svg>
            <!-- 右箭头按钮 -->
            <svg  t="1699445470465" class="icon rightBtn" v-on:click="throttle(NextFun)" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1799" width="200" height="200"><path d="M434.72399133 714.10648519c-5.94430862 0-11.88861725-2.37772345-16.64406415-7.13317034-9.51089379-9.51089379-9.51089379-24.37166421 0-33.88255802l178.32925184-178.3292507c9.51089379-9.51089379 24.37166421-9.51089379 33.88255801 0 9.51089379 9.51089379 9.51089379 24.37166421 0 33.88255688l-178.32925184 178.32925184c-5.34987776 4.7554469-11.29418638 7.13317035-17.23849386 7.13317034z" p-id="1800" fill="#8a8a8a"></path><path d="M613.05324317 535.77723335c-5.94430862 0-11.88861725-2.37772345-16.64406415-7.13317034l-178.32925184-178.32925071c-9.51089379-9.51089379-9.51089379-24.37166421 0-33.88255801 9.51089379-9.51089379 24.37166421-9.51089379 33.88255801 0l178.32925184 178.32925184c9.51089379 9.51089379 9.51089379 24.37166421 0 33.88255688-5.34987776 4.7554469-11.29418638 7.13317035-17.23849386 7.13317034z" p-id="1801" fill="#8a8a8a"></path><path d="M512 987.54467157c-262.144 0-475.54467157-213.40067157-475.54467157-475.54467157s213.40067157-475.54467157 475.54467157-475.54467157 475.54467157 213.40067157 475.54467157 475.54467157-213.40067157 475.54467157-475.54467157 475.54467157z m0-903.5348753c-235.9890432 0-427.99020373 192.00116053-427.99020373 427.99020373s192.00116053 427.99020373 427.99020373 427.99020373 427.99020373-192.00116053 427.99020373-427.99020373-192.00116053-427.99020373-427.99020373-427.99020373z" p-id="1802" fill="#8a8a8a"></path></svg>
<!--            <svg t="1699445144854" class="icon rightBtn" v-on:click="throttle(NextFun)" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1451" width="200" height="200"><path d="M512 1024c282.717 0 512-229.19 512-512S794.717 0 512 0C229.19 0 0 229.19 0 512s229.19 512 512 512z m0-960a448 448 0 0 1 448 448c0 247.436-200.518 448.093-448 448.093S63.953 759.483 63.953 512C63.953 264.564 264.564 64 512 64zM366.871 785.129c12.474 12.567 32.722 12.567 45.196 0L657.082 540.16a31.511 31.511 0 0 0 8.332-28.16 31.604 31.604 0 0 0-8.378-28.16L412.113 238.778a31.977 31.977 0 1 0-45.149 45.289L594.664 512l-227.84 227.84a31.93 31.93 0 0 0 0 45.289z" p-id="1452"></path></svg>-->
<!--            <div class="rightBtn" v-on:click="throttle(NextFun)">&rarr;</div>-->
            <!-- 下方指示点容器 -->
            <div class="instBox">
                <div v-on:click="instFun(index)" v-for="(item,index) in imgList.length" :key="index"
                     v-bind:class="['inst',index===imgShow?'instActv':'']">
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
* {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}

/* 图片容器样式 */
/*position: relative;：设置容器的定位方式为相对定位。
width: 500px;：设置容器的宽度为500像素。
height: 300px;：设置容器的高度为300像素。
box-sizing: border-box;：设置盒模型的计算方式为border-box，使得元素的宽度和高度包括边框和内边距。
cursor: pointer;：设置鼠标悬停在容器上时的光标样式为指针。
overflow: hidden;：设置溢出内容的部分隐藏，实现内容超出容器时的裁剪效果。
*/
.SwiperBox {
    position: relative;
    width: 600px;
    height: 250px;
    box-sizing: border-box;
    /*cursor: pointer;*/
    overflow: hidden;
}

/*position: absolute;：设置容器内部元素的定位方式为绝对定位。
top: 0px;和left: 0px;：将容器内部元素的位置设置为左上角。
min-width: 500px;：设置容器内部元素的最小宽度为500像素。
height: 300px;：设置容器内部元素的高度为300像素。
display: flex;：使用弹性布局将容器内部元素水平排列。
justify-content: flex-start;：将容器内部元素左对齐。
*/
.imgBox {
    position: absolute;
    top: 0px;
    left: 0px;
    min-width: 600px;
    height: 250px;
    display: flex;
    justify-content: flex-start;
}

/*flex-shrink: 0;：禁止图片元素缩小，保持原始尺寸。*/
/* 图片默认样式 */


/* 两个按钮共有的样式,也可直接使用箭头图片替代 */
.leftBtn,
.rightBtn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    //background: rgba(109, 109, 109, 0.445);
    //color: #fff;
    border-radius: 50%;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
    user-select: none;
}

.leftBtn {
color:rgba(109, 109, 109, 0.445);
    left: 10px;
}

.rightBtn {
    color:rgba(109, 109, 109, 0.445);
    right: 10px;
}

/* 下方指示器盒子 */
.instBox {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    display: flex;
}

/* 小圆点 */
.inst {
    width: 10px;
    height: 10px;
    border: 1px solid #ccc;
    margin-right: 8px;
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
}

.inst:last-child {
    margin-right: 0px;
}

.instActv {
    border: 1px solid #00838d;
    background: #009087;
}

#app {
    width: 100%;
    margin-top: 50px;
    padding: 0px;
    display: flex;
    justify-content: center;
}

</style>


