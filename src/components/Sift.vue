<template>
  <div
    style="
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      justify-content: space-between;
      height: auto;
    "
  >
    <!-- 左边 -->
    <div style="width: 1380px">
      <!-- 排序栏 -->
      <div
        style="
          width: 384px;
          display: flex;
          justify-content: space-between;
          margin-left: 50px;
        "
      >
        <el-button text plain style="font-size: 18px">追番人数</el-button>
        <el-button text plain style="font-size: 18px">最高评分</el-button>
        <el-button text plain style="font-size: 18px">播放数量</el-button>
        <el-button text plain style="font-size: 18px">开播时间</el-button>
      </div>
      <!-- 列表栏 -->
      <div style="margin-top: 15px; margin-left: 60px; width: 90%">
        <pic-and-text
          direction="col"
          totalHeight="365px"
          totalWidth="225px"
          borderRadius="10px"
          backgroundColor="#909399"
          picWidth="225px"
          picHeight="300px"
          rowadd="true"
          :text="onlytext"
        ></pic-and-text>
      </div>
      <!-- 翻页栏 -->
      <div></div>
    </div>
    <!-- 右边 -->
    <div>
      <p style="font-size: 20px; margin: 0px">筛选</p>
      <div
        style="
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          line-height: 40px;
          height: 600px;
          margin-top: 20px;
        "
      >
        <!-- 类型 -->
        <div class="tag" v-if="data.type.length">
          <span style="color: #a6a9ad">类型</span>
          <span
            class="toBlue"
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
            class="toBlue"
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
            class="toBlue"
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
            class="toBlue"
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
            class="toBlue"
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
            class="toBlue"
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
            class="toBlue"
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
              class="toBlue"
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
              class="toBlue"
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
import PicAndText from "./PicAndText.vue";
export default {
  props: {
    data: Object,
  },
  components: { PicAndText },
  setup(props) {
    let data = reactive(props.data);

    // 元素名更换和判断
    const onlytext = data.animedata.map(({ name: textOne, episode, isEnd }) => {
      let textTwo;
      if (episode === undefined || episode === null) {
        textTwo = "敬请期待";
      } else if (isEnd) {
        textTwo = `全${episode}话`;
      } else {
        textTwo = `更新到第${episode}话`;
      }
      return { textOne, textTwo };
    });

    // console.log(onlytext);
    // console.log(data);

    return {
      onlytext,
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
  flex-wrap: nowrap;
}

.toBlue:hover {
  color: #409eff;
}
</style>