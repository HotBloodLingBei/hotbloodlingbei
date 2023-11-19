<template>
    <div class="container">
        <div id="app">
            <PageIndicator :currentPage="currentPage" @navigate="navigateToPage"/>
            <router-view/>
            <MyFooter/>
        </div>
    </div>
</template>

<script>
import PageIndicator from './components/PageIndicator.vue';
import MyFooter from './components/MyFooter.vue';

export default {
    name: 'App',
    components: {
        PageIndicator,
        MyFooter,
    },
    data() {
        return {
            result: {
                mbti: {
                    mbtiType: '',
                    firstProp: '',
                    secondProp: "",
                    thirdProp: "",
                    forthProp: ""
                },

                description: "",

                suggestion: {
                    job: '',
                    spouse: '',
                    other: "",
                    picture: {
                        meme: "",
                        profilepicture: "",
                    },
                    backgroundColor: "#ffffff",
                },

                userInfo: {
                    age: '',
                    gender: '',
                    nickName: '',
                    mbtiType: '',
                    contactMethod: {
                        email: '',
                        phone: '',
                        qq: '',
                        wechat: '',
                    }
                }

            }
        }
    },
    methods: {
        //计算firstPropValue
        calculateFirstProp() {
            if (this.result.mbtiType.firstPropValue >= 0) {
                this.$data.result.mbtiType.mbti[0] = 'i'
            } else this.$data.result.mbtiType.mbti[0] = 'e'
        },
        //计算secondPropValue
        calculateSecondProp() {
            if (this.result.mbtiType.secondPropValue >= 0) {
                this.$data.result.mbtiType.mbti[1] = 's'
            } else this.$data.result.mbtiType.mbti[1] = 'n'
        },
        //计算thirdPropValue
        calculateThirdProp() {
            if (this.result.mbtiType.secondPropValue >= 0) {
                this.$data.result.mbtiType.mbti[2] = 'f'
            } else this.$data.result.mbtiType.mbti[2] = 't'
        },
        //计算forthPropValue
        calculateForthProp() {
            if (this.result.mbtiType.secondPropValue >= 0) {
                this.$data.result.mbtiType.mbti[3] = 'p'
            } else this.$data.result.mbtiType.mbti[3] = 'j'
        },
        detectZoom() {
            let ratio = 0
            const screen = window.screen
            const ua = navigator.userAgent.toLowerCase()
            if (window.devicePixelRatio !== undefined) {
                ratio = window.devicePixelRatio
            } else if (~ua.indexOf('msie')) {
                if (screen.deviceXDPI && screen.logicalXDPI) {
                    ratio = screen.deviceXDPI / screen.logicalXDPI
                }
            } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
                ratio = window.outerWidth / window.innerWidth
            }
            if (ratio) {
                ratio = Math.round(ratio * 100)
            }
            return ratio
        },
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener("resize", () => { // 监听浏览器窗口大小改变
                // 浏览器变化执行动作
            });
        });
    },


    created() {
        if (window.screen.height === 864) {
            window.onload = window.onresize = function () {
                document.body.style.zoom = 1;
            }
        } else {
            window.onload = window.onresize = function () {
                if (window.screen.height === 1440) {
                    document.body.style.zoom = 1.8
                } else {
                    document.body.style.zoom = window.screen.height / 864;
                }
            }
        }
    }
}

</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 10px;
}

.container {
    width: 100%;
    height: 100%;
    --color: #E1E1E1;
    background-color: #F3F3F3;
    background-image: linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%, transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%, transparent),
    linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%, transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%, transparent);
    background-size: 55px 55px;
    background-position: 0px 0px, 27px 27px;
}

body {
    font-family: ”Microsoft YaHei”, Arial, Helvetica, sans-serif, ”宋体”;
}
</style>
