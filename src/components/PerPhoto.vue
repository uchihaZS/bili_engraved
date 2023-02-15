<template>
  <div style="display: flex; align-items: center; height: 60px; width: 100%">
    <p style="font-size: 22px; margin-left: 14px">TA的相册</p>
    
  </div>
  <!-- 视频列表 -->
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
    <div v-for="i in 20" :key="i" style="width: 250px; height: 310px">
      <div
        style="
          width: 98%;
          height: 205px;
          background-color: #909399;
          border-radius: 10px;
        "
      ></div>
      <p>图片名{{ i }}</p>
      <div style="display: flex; width: 150px; justify-content: space-between">
        <span>观看数</span>
        <span>点赞数</span>
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