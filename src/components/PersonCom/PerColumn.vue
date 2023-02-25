<template>
  <div style="display: flex; align-items: center; height: 60px; width: 100%">
    <p style="font-size: 22px; margin-left: 14px">专栏文章</p>
    <div
      style="
        display: flex;
        width: 200px;
        margin-left: 15px;
        justify-content: space-between;
      "
    >
      <span class="righttag">最新发布</span>
      <span class="righttag">最多阅读</span>
      <span class="righttag">最多收藏</span>
    </div>
  </div>

  <div style="width: 100%; height: auto">
    <div
      v-for="i in 5"
      :key="i"
      style="
        display: flex;
        width: 100%;
        height: 160px;
        justify-content: space-around;
        border-bottom: 1px solid #e5eaf3;
        margin-top: 15px;
      "
    >
      <div style="width: 80%">
        <h3>专栏标题{{ i }}</h3>
        <p style="width: 100%">专栏简介</p>
        <div
          style="
            margin-top: 10px;
            display: flex;
            width: 301px;
            justify-content: space-between;
          "
        >
          <span>标签</span>
          <span>观看数</span>
          <span>点赞数</span>
          <span>评论数</span>
          <span>时间</span>
        </div>
      </div>
      <!-- 配图 -->
      <div
        style="
          width: 10%;
          height: 130px;
          background-color: #909399;
          border-radius: 10px;
        "
      ></div>
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

h3:hover{
color: #409eff;
}
h3+p:hover{
  color: #409eff;
}
</style>