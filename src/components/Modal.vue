<script setup>

</script>

<template>
  <div class="modal">
    <div class="modal-content">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
      <button @click="closeModal">关闭</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
  },
  methods: {
    closeModal() {
      this.$emit('close'); // 触发一个自定义事件来关闭弹窗
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

</style>