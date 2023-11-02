<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
  margin-top: 60px;
}
</style>
