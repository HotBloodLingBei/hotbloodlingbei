
<template>
  <footer>
    <div class="footer">
    <div class="footer-content">
      <div class="basic-info">
        <!-- 网站基本信息 -->
        <p>网站名称：MBTI人格测试</p>
        <p>网站描述：MBTI人格测试网站，帮助用户了解自己的MBTI人格类型和相关概念。</p>
      </div>
      <div class="author-info">
        <!-- 著作人信息 -->
        <p>作者：热血林北小组</p>
        <p>小组成员：陆达、薛为之、李泽粲、徐睿彰</p>
          <p>联系方式：3135287831@qq.com</p>
      </div>
      <div class="copyright-info">
        <!-- 版权信息 -->
        <p>&copy; 2023 HotBloodLinBei. 版权所有。</p>
      </div>
    </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
    font-family: PingFangSC-Regular, serif;
    background-color: rgba(109, 109, 109, 0.445);
    color: #fff;
    padding: 15px 0;
    bottom: 0;
    width: 100%;
    position: relative;
    font-size: 12px;
    z-index: 0;
    text-align: left;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.basic-info, .author-info, .copyright-info {
  flex: 1;
  margin: 0 30px;
}
</style>
