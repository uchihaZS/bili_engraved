

<template>
  <Artplayer class="artplayer-app" :option="art" />
</template>
<script>
import { createApp } from "vue";
import ArtPlayer from "artplayer";
import artplayerVue from "artplayer-vue";

export default {
  setup() {
    const art = reactive({
      container: ".artplayer-app",
      //  container: document.querySelector('.artplayer-app'),
      url: "/cx.mp4", //视频源https://artplayer.org/assets/sample/video.mp4
      theme: "#23ade5",
      autoplay: true,
      fullscreen: true, //全屏
      fullscreenWeb: true, //网页全屏
      lang: "zh-cn",
      pip: true, //画中画
      autoSize: true,
      autoMini: true,
      isLive: false, //直播模式
      muted: false, //静音
      setting: true,
      loop: false, //循环播放
      flip: true, //视频镜像
      playbackRate: true, //倍速
      aspectRatio: true, //长宽比
      //时间线点位
      highlight: [
        {
          time: 22,
          text: "开头logo",
        },
        {
          time: 43,
          text: "千倍奉还",
        },
        {
          time: 50,
          text: "第一段高潮",
        },
        {
          time: 89,
          text: "第二段主歌",
        },
        {
          time: 133,
          text: "副歌",
        },
        {
          time: 172,
          text: "结束",
        },
      ],
      //hover缩略图
      thumbnails: {
        url: "/cxthum.png",
        number: 160, // 数量
        width: 160, // 宽度
        column: 10,
      },
      // 弹幕数组(视频用)
      danmukuList: [
        {
          text: "111", // 弹幕文本
          time: 1, // 发送时间，单位秒
          color: "#fff", // 弹幕局部颜色
          border: false, // 是否显示描边
          mode: 0, // 弹幕模式: 0表示滚动, 1静止
          date: "xx-xx xx:xx", //日期
        },
      ],
      controls: [
        // 发送弹幕
        {
          position: "right",
          html: "发送弹幕",
          click: function () {
            var text = prompt("请输入弹幕文本", "弹幕测试文本");
            if (!text || !text.trim()) return;
            var color = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
            art.plugins.artplayerPluginDanmuku.emit({
              text: text,
              color: color,
              border: true,
            });
          },
        },
      ],
      // 插件
      plugins: [
        // 弹幕库
        artplayerPluginDanmuku({
          // 弹幕数组
          danmuku: art.danmukuList, //() => videoOption.player.danmukuList
          speed: 7, // 弹幕持续时间，单位秒，范围在[1 ~ 10]
          opacity: 1, // 弹幕透明度，范围在[0 ~ 1]
          fontSize: 25, // 字体大小，支持数字和百分比
          color: "#FFFFFF", // 默认字体颜色
          mode: 0, // 默认模式，0-滚动，1-静止
          margin: [10, "25%"], // 弹幕上下边距，支持数字和百分比
          antiOverlap: true, // 是否防重叠
          useWorker: true, // 是否使用 web worker
          synchronousPlayback: false, // 是否同步到播放速度
          lockTime: 5, // 输入框锁定时间，单位秒，范围在[1 ~ 60]
          maxLength: 100, // 输入框最大可输入的字数，范围在[0 ~ 500]
          minWidth: 200, // 输入框最小宽度，范围在[0 ~ 500]，填 0 则为无限制
          maxWidth: 400, // 输入框最大宽度，范围在[0 ~ Infinity]，填 0 则为 100% 宽度
          theme: "dark",
          beforeEmit: (danmu) => !!danmu.text.trim(),
        }),
      ],
    });
  },
};
</script>

<style scoped lang="less">
.artplayer-app {
  width: 1170px;
  height: 660px;
}
</style>

