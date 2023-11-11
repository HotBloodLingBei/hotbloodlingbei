<script setup>

</script>

<template>
  <footer>
    <div class="footer">
    <div class="footer-content">
      <div class="basic-info">
        <!-- 网站基本信息 -->
        <p>网站名称</p>
        <p>网站描述</p>
      </div>
      <div class="author-info">
        <!-- 著作人信息 -->
        <p>作者名称</p>
        <p>联系方式</p>
      </div>
      <div class="copyright-info">
        <!-- 版权信息 -->
        <p>&copy; 2023 Your Company. 版权所有。</p>
      </div>
    </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
    background-color: rgba(109, 109, 109, 0.445);
    color: #fff;
    padding: 15px 0;
    bottom: 0;
    width: 100%;
    position: relative;
    z-index: 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.basic-info, .author-info, .copyright-info {
  flex: 1;
}
</style>
