

<template>
  <Artplayer style="width: 1170px; height: 660px" :option="x" />
</template>
<script>
const { reactive } = require("@vue/reactivity");

let x = reactive({
  player: {
    container: ".artplayer-app",
    url: "/assets/sample/video.mp4",
    plugins: [
      artplayerPluginDanmuku({
        danmuku: "/assets/sample/danmuku.xml",
      }),
    ],
  },
});
</script>
