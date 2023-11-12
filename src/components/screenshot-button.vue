<script>
import html2canvas from 'html2canvas';
import Moment from 'moment';
import store from '@/store/store';

export default {
    name: "screenshot-button",
    data() {
        return {}
    },
    methods: {

//截图方法
        //截图
        screenShot() {
            // 改变截图的状态
            store.screenshotStatus = 1;
            //获取页面dom
            //这里的html标签是获取页面最大的dom元素；根据实际业务场景自行更改
            function temp() {
                const el = document.querySelector('html');

                function downloadFile(saveInfo) {
                    const element = document.createElement('a');
                    element.style.display = 'none';
                    for (const key in saveInfo) {
                        element.setAttribute(key, saveInfo[key]);
                    }
                    document.body.appendChild(element);
                    element.click();
                    setTimeout(() => {
                        document.body.removeChild(element);
                    }, 300)
                }

                html2canvas(el, {allowTaint: true}).then((canvas) => {
                    //document.body.appendChild(canvas)  页面布局会乱
                    //转换base64
                    const capture = canvas.toDataURL('image/png');
                    //下载浏览器弹出下载信息的属性
                    const saveInfo = {
                        //导出文件格式自己定义，我这里用的是时间作为文件名
                        'download': Moment().format("YYYY-MM-DD HH:mm:ss") + `.png`,
                        'href': capture
                    };
                    //下载，浏览器弹出下载文件提示
                    downloadFile(saveInfo);
                });
            }

            // 将截图的状态改为0
            setTimeout(temp, 1000)
            setTimeout(() => {
                store.screenshotStatus = 0;
            }, 3000)
        },

        //下载截图


    }
}
</script>

<template>
    <div>
        <button @click="screenShot">
            <span>生成截图</span>
        </button>
    </div>
</template>

<style scoped>
button {
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