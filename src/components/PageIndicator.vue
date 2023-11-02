<script setup>

</script>

<template>
  <div class="page-indicator">
  <div
      class="indicator-item"
      :class="{ active: currentPage === '/' }"
      @click="navigateTo('/')"
  >
    开始测试
  </div>
  <div
      class="indicator-item"
      :class="{ active: currentPage === '/mbtiInstructionPage' }"
      @click="navigateTo('/mbtiInstructionPage')"
  >
    MBTI说明
  </div>
  <div
      class="indicator-item"
      :class="{ active: currentPage === '/resultPage' }"
      @click="showModal"
  >
    结果
    <MyModal
        v-if="isModalVisible"
        title="提示"
        content="请先完成测试"
        @close="closeModal">
    </MyModal>
  </div>
  </div>
</template>

<script>
import MyModal from "@/components/MyModal.vue"; // 引入弹窗组件
export default {
  components: {
    MyModal
  },

  data() {
    return {
      currentPage: '/', // 默认显示在首页
      isModalVisible: false, // 控制弹窗是否显示
    };
  },

  methods: {
    navigateTo(path) {
      this.currentPage = path;
      this.$router.push(path);
    },

    showModal() {
      this.isModalVisible = true;
    },

    closeModal() {
      this.isModalVisible = false;
    },

  },
};
</script>

<style scoped>
.page-indicator {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  border-bottom: 1px solid #ccc;
}

.indicator-item {
  cursor: pointer;
  padding: 10px;
  border-radius: 29px;
  background-color: lightyellow;
  transition: all 0.5s ease-in-out;
  box-shadow:  5px 5px 10px #777777,
  -5px -5px 10px #ffffff;
}

.indicator-item:hover {
  background-color: gainsboro;
}

.active {
  font-weight: bold;
  color: #007bff;
  background-color: burlywood;
}

</style>