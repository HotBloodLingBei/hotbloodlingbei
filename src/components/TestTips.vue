<template>
    <div class = "test-tips">
      <h1 class = "test-tips-title">测试提示</h1>
      <div class = "tips-box">
        <p class = "tips-text">
          {{currentTestTips}}
        </p>
      </div>
      <button class="cta" @click="nextTip">
        <span>Next tip</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
    </div>
</template>

<script>

  export default {
    name: "TestTips",
    data() {
      return {
        animationClass: "slide-in",
        testTipsData:[
            "1. 保持开放心态：不要试图答题以迎合特定的MBTI类型，而是诚实地回答问题。",
            "2. 不要过于思考：答题时不要过于深思熟虑，尽量凭直觉作答。",
            "3. 认识自己：考虑自己在不同情境下的行为和偏好，而不只是当前的状态。",
            "4. 如果你在某些问题上犹豫不决，记住，有时我们都是矛盾的人。",
            "5. 把MBTI类型当作一个窗户，而不是一扇门。它可以让你看到自己，但并不是唯一通往了解自己的途径。"
        ],
        currentTipIndex: 0,
      };
    },
    computed: {
      currentTestTips() {
        return this.testTipsData[this.currentTipIndex];
      },
    },
    methods: {
      nextTip() {
        if (this.currentTipIndex < this.testTipsData.length - 1) {
          this.currentTipIndex++;
        } else {
          this.currentTipIndex = 0;
        }
      },
    },
  };
</script>

<style scoped>
.test-tips {
  position: fixed;
  right: 20px; /* 调整左侧距离 */
  bottom: 0; /* 垂直居中 */
  transform: translateY(-50%);
  background-color: #ffffff;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 300px; /* 设置最大宽度 */
  text-align: center;
  animation: slide-in 0.5s ease-out; /* 添加一个进入动画效果 */
  border-radius: 15px;
  z-index: 1;
}

.test-tips-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.tips-box {
  margin-bottom: 20px;
}

.tips-text {
  font-size: 14px;
}

.cta {
  position: relative;
  margin: auto;
  padding: 12px 18px;
  transition: all 0.2s ease;
  border: none;
  background: none;
  cursor: pointer;
}

.cta:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 50px;
  background: #b1dae7;
  width: 45px;
  height: 45px;
  transition: all 0.3s ease;
}

.cta span {
  position: relative;
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #234567;
}

.cta svg {
  position: relative;
  top: 0;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #234567;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}

.cta:hover:before {
  width: 100%;
  background: #b1dae7;
}

.cta:hover svg {
  transform: translateX(0);
}

.cta:active {
  transform: scale(0.95);
}

@keyframes slide-in {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

</style>