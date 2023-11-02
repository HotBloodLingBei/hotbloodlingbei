<template>
  <el-main>
    <div>logo</div>
    <div>comment</div>
    <div>
      <div>
        <el-radio-group v-model="choice" class="ml-4">
          <el-radio label="1">简洁版</el-radio>
          <el-radio label="2">完整版</el-radio>
        </el-radio-group>
      </div>
    </div>
    <div>
      <el-button>开始测试</el-button>
    </div>
  </el-main>
</template>

<script>
export default {
  name: "chooseTest",
  data(){
    return{
      choice:''
    }
  }
}
</script>

<style scoped>

</style>