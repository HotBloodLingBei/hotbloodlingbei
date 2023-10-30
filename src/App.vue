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
          mbtiType:{
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
        getMeme(){

        },

        //Method to submit user information
        submitUserInfo(){
            //Send user information to backend
            //Get result from backend
            //this.result = result
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
  margin-top: 60px;
}
</style>
