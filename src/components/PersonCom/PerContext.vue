<template>
  <div style="height: auto; width: 100%">
    <!-- 置顶合集 -->
    <div
      style="
        width: 90%;
        height: 215px;
        display: flex;
        margin: 20px;
        border-bottom: 1px solid #e5eaf3;
      "
    >
      <div
        style="
          width: 200px;
          height: 167px;
          background-color: #909399;
          border-radius: 10px;
        "
      ></div>
      <div style="display: flex; flex-direction: column; margin-left: 20px">
        <p style="font-size: 20px; margin: 0px 0px 30px 0px">合集名</p>
        <div>
          <span>创建者</span> <span style="margin-left: 20px">播放数</span>
        </div>
        <p>内容数</p>
        <div style="display: flex">
          <el-button type="primary" size="large">播放全部视频</el-button>
          <div
            style="
              width: 185px;
              display: flex;
              margin-left: 20px;
              align-items: center;
              justify-content: space-between;
            "
          >
            <span>点赞</span>
            <span>收藏</span>
            <span>分享</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 内容列表 -->
  <div style="width: 100%; height: auto">
    <div
      style="
        display: flex;
        width: 600px;
        flex-direction: row;
        justify-content: space-around;
        margin-left: 750px;
      "
    >
      <p class="bottomTag">批量操作</p>
      <p class="bottomTag">全部分区</p>
      <p class="bottomTag">最近收藏</p>
      <el-input placeholder="输入关键字" style="width: 300px"></el-input>
    </div>
    <div
      style="
        display: flex;
        width: 100%;
        height: auto;
        justify-content: space-around;
        margin-top: 15px;
        flex-wrap: wrap;
      "
    >
      <div style="width: 17%; height: 300px" v-for="i in 10" :key="i">
        <div
          style="
            width: 100%;
            height: 170px;
            background-color: #909399;
            border-radius: 10px;
          "
        ></div>
        <p>视频名{{ i }}</p>
        <div
          style="
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <p>收藏时间</p>
          <el-dropdown trigger="click">
            <el-icon style="transform: rotate(90deg)" size="large"><MoreFilled /></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>复制到</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MoreFilled } from "@element-plus/icons-vue";
export default {
  components: { MoreFilled },
  setup() {},
};
</script>

<style lang="less" scoped>
.bottomTag:hover {
  color: #409eff;
}
</style>