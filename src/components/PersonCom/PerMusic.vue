<template>
  <div style="display: flex; align-items: center; height: 60px; width: 100%">
    <p style="font-size: 22px; margin-left: 14px">TA的音频</p>
    <div
      style="
        display: flex;
        width: 200px;
        margin-left: 15px;
        justify-content: space-between;
      "
    >
      <span class="righttag">最新发布</span>
      <span class="righttag">最多播放</span>
      <span class="righttag">最多收藏</span>
    </div>
    
  </div>
  <!-- 音频列表 -->
  <div
    style="
      width: 100%;
      padding: 0px 10px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-around;
      margin-left: -10px;
    "
  >
    <div v-for="i in 10" :key="i" style="width: 250px; height: 300px">
      <div
        style="
          width: 100%;
          height: 205px;
          background-color: #909399;
          border-radius: 10px;
        "
      ></div>
      <p>音频名{{ i }}</p>
      <div style="display: flex; width: 150px; justify-content: space-between">
        <span>播放数</span>
        <span>时间</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="less" scoped>
.righttag {
  font-size: 15px;
}
.righttag:hover {
  color: #409eff;
}
</style>