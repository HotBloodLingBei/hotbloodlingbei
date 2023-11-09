<template>
  <div class="container">
  <div id="app">
    <PageIndicator :currentPage="currentPage" @navigate="navigateToPage" />
    <TestTips/>
    <router-view/>
    <MyFooter/>
  </div>
  </div>
</template>

<script>
import PageIndicator from './components/PageIndicator.vue';
import MyFooter from './components/MyFooter.vue';
import TestTips from "@/components/TestTips.vue";

export default {
  name: 'App',
  components: {
    PageIndicator,
    MyFooter,
    TestTips
  },
  data (){
    return {
      result:{
          mbti:{
              mbtiType:'',
              firstProp:'',
              secondProp:"",
              thirdProp:"",
              forthProp:""
          },

          description:"",

          suggestion:{
              job:'',
              spouse:'',
              other:"",
              picture:{
                meme:"",
                profilepicture:"",
              },
              backgroundColor:"#ffffff",
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
  methods:{
        //计算firstPropValue
        calculateFirstProp(){
          if(this.result.mbtiType.firstPropValue>=0){
              this.$data.result.mbtiType.mbti[0]='i'
          }else this.$data.result.mbtiType.mbti[0]='e'
        },
        //计算secondPropValue
        calculateSecondProp(){
          if(this.result.mbtiType.secondPropValue>=0){
              this.$data.result.mbtiType.mbti[1]='s'
          }else this.$data.result.mbtiType.mbti[1]='n'
        },
        //计算thirdPropValue
        calculateThirdProp(){
            if(this.result.mbtiType.secondPropValue>=0){
                this.$data.result.mbtiType.mbti[2]='f'
            }else this.$data.result.mbtiType.mbti[2]='t'
        },
        //计算forthPropValue
        calculateForthProp(){
            if(this.result.mbtiType.secondPropValue>=0){
                this.$data.result.mbtiType.mbti[3]='p'
            }else this.$data.result.mbtiType.mbti[3]='j'
        },
    },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  width: 100%;
  height: 100%;
  --color: #E1E1E1;
  background-color: #F3F3F3;
  background-image: linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent),
  linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent);
  background-size: 55px 55px;
}
</style>
