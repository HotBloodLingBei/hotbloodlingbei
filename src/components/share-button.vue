<script>
import store from '@/store/store';
export default {
  name: "share-button",
    methods:{
    //   将内容粘贴至剪切板
        async copyToClipboard() {
            try {
                await navigator.clipboard.writeText("我测出的人格是：" + store.mbtiType + "人格,你也来试试吧！\n点击下方链接来进行查看吧！\n https://61.139.65.140:17499/");
                alert('本站链接已经复制至你的剪切板了哦！');
            } catch (error) {
                alert('复制失败：请联系本站管理员' + error.message);
            }
        }
    //     用toast提示用户
    }
}
</script>

<template>
    <button @click="copyToClipboard">
        <span>立即分享</span>
    </button>
</template>

<style scoped>
button {
    font-family: 方正书宋, serif;
    background: transparent;
    position: relative;
    padding: 5px 15px;
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    border: 1px solid rgb(40, 144, 241);
    border-radius: 25px;
    outline: none;
    overflow: hidden;
    color: rgb(40, 144, 241);
    transition: color 0.3s 0.1s ease-out;
    text-align: center;
}

button span {
    margin: 10px;
}

button::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    content: '';
    border-radius: 50%;
    display: block;
    width: 20em;
    height: 20em;
    left: -5em;
    text-align: center;
    transition: box-shadow 0.5s ease-out;
    z-index: -1;
}

button:hover {
    color: #fff;
    border: 1px solid rgb(40, 144, 241);
}
button:hover::before {
    box-shadow: inset 0 0 0 10em rgb(40, 144, 241);
}
</style>