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
    background-color: #eee;
    display: flex;
    justify-content: space-around;
    padding: 2px;
    border-bottom: 1px solid #ccc;
    z-index: 100;
}

.indicator-item {
  display: inline-block;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  box-shadow: 6px 6px 12px #c5c5c5,
  -6px -6px 12px #ffffff;
}

.indicator-item:before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scaleY(1) scaleX(1.25);
  top: 100%;
  width: 140%;
  height: 180%;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.indicator-item:after {
  content: "";
  position: absolute;
  left: 55%;
  transform: translateX(-50%) scaleY(1) scaleX(1.45);
  top: 180%;
  width: 160%;
  height: 190%;
  background-color: #009087;
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.indicator-item:hover {
  color: #ffffff;
  border: 1px solid #009087;
}

.indicator-item:hover:before {
  top: -35%;
  background-color: #009087;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.indicator-item:hover:after {
  top: -45%;
  background-color: #009087;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.active {
  color: white;
  background-color: #009087;
  box-shadow: inset 4px 4px 12px darkslategray,
  inset -4px -4px 12px slategrey;
}

</style>