<template>
  <div
    style="
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      justify-content: space-between;
    "
  >
    <!-- 左边 -->
    <div>
      <!-- 排序栏 -->
      <div style="width: 275px; display: flex; justify-content: space-between">
        <el-button text plain>追番人数</el-button>
        <el-button text plain>最高评分</el-button>
        <el-button text plain>播放数量</el-button>
        <el-button text plain>开播时间</el-button>
      </div>
      <!-- 列表栏 -->
      <div></div>
      <!-- 翻页栏 -->
      <div></div>
    </div>
    <!-- 右边 -->
    <div>
      <p style="font-size: 20px;margin: 0px;">筛选</p>
      <div
        style="
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          line-height: 40px;
          height: 600px;
          margin-top:20px
        "
      >
        <!-- 类型 -->
        <div class="tag" v-if="data.type.length">
          <span style="color: #a6a9ad">类型</span>
          <span
            v-for="(i, index) in data.type"
            :key="index"
            style="margin-left: 10px"
            >{{ i }}</span
          >
        </div>
        <!-- 配音 -->
        <div v-if="data.voice.length" class="tag">
          <span style="color: #a6a9ad">配音</span>
          <span
            v-for="(i, index) in data.voice"
            :key="index"
            style="margin-left: 10px"
            >{{ i }}</span
          >
        </div>
        <!-- 地区 -->
        <div class="tag">
          <span style="color: #a6a9ad">地区</span>
          <span
            v-for="(i, index) in data.area"
            :key="index"
            style="margin-left: 10px"
            >{{ i }}</span
          >
        </div>
        <!-- 状态 -->
        <div v-if="data.state.length" class="tag">
          <span style="color: #a6a9ad">状态</span>
          <span
            v-for="(i, index) in data.state"
            :key="index"
            style="margin-left: 10px"
            >{{ i }}</span
          >
        </div>
        <!-- 版权 -->
        <div v-if="data.copyright.length" class="tag">
          <span style="color: #a6a9ad">版权</span>
          <span
            v-for="(i, index) in data.copyright"
            :key="index"
            style="margin-left: 10px"
            >{{ i }}</span
          >
        </div>
        <!-- 付费 -->
        <div class="tag">
          <span style="color: #a6a9ad">付费</span>
          <span
            v-for="(i, index) in data.ispay"
            :key="index"
            style="margin-left: 10px"
            >{{ i }}</span
          >
        </div>
        <!-- 季度 -->
        <div v-if="data.season.length" class="tag">
          <span style="color: #a6a9ad">季度</span>
          <span
            v-for="(i, index) in data.season"
            :key="index"
            style="margin-left: 10px"
            >{{ i }}</span
          >
        </div>
        <!-- 年份 -->
        <div class="tag">
          <div style="color: #a6a9ad; margin-right: 10px">年份</div>
          <div
            style="
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              width: 233px;
            "
          >
            <span
              v-for="(i, index) in data.year"
              :key="index"
              style="margin: 0px 10px 10px 0px"
              >{{ i }}</span
            >
          </div>
        </div>
        <!-- 风格 -->
        <div class="tag">
          <div style="color: #a6a9ad; margin-right: 10px">风格</div>
          <div
            style="
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              width: 233px;
            "
          >
            <span
              v-for="(i, index) in data.style"
              :key="index"
              style="margin: 0px 10px 10px 0px"
              >{{ i }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  props: {
    data: Object,
  },
  setup(props) {
    let data = reactive(props.data);

    console.log(data);

    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="less" scoped>
.tag {
  width: 275px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
}
</style>