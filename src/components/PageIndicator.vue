<script setup>

</script>

<template>
  <div
      class="indicator-item"
      :class="{ active: currentPage === 'home' }"
      @click="goToPage('home')"
  >
    首页
  </div>
  <div
      class="indicator-item"
      :class="{ active: currentPage === 'test' }"
      @click="goToPage('test')"
  >
    测试
  </div>
  <div
      class="indicator-item"
      :class="{ active: currentPage === 'result' }">
    结果
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue"; // 引入弹窗组件
export default {
  components: {
    Modal,
  },

  data() {
    return {
      currentPage: 'home' // 默认显示在首页
    };
  },

  created() {
    this.currentPage = this.getCurrentPage();
  },

  methods: {
    goToPage(page) {
      this.currentPage = page;

      // 根据当前页面跳转
      if (page === 'home') {
        this.$router.push('/');
      } else if (page === 'test') {
        this.$router.push('/test');
      } else if (page === 'result') {
        this.$router.push('/result');
      }
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
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.indicator-item {
  cursor: pointer;
  padding: 10px;
}

.active {
  font-weight: bold;
  color: #007bff; /* 高亮颜色 */
}

</style>