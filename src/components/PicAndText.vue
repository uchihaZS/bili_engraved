<template>
  <div>
    <!-- 如果垂直排列图文 -->
    <div
      v-if="direction == 'col'"
      style="display: flex; flex-flow: row wrap; justify-content: space-between"
    >
      <div
        v-for="item in text"
        :key="item"
        :style="totalStyle"
        style="margin-bottom: 15px"
      >
        <!-- 图片 -->
        <div :style="picStyle"></div>
        <!-- 文字 -->
        <div style="margin-top:10px">
          <p class="textStyle" style="font-size: 18px">{{ item.textOne }}</p>
          <div
            v-if="rowadd == 'true'"
            style="
              display: flex;
              flex-flow: row nowrap;
              justify-content: space-between;
            "
            :style="picWidth"
          >
            <span class="textStyle" style="font-size:14px;color:#909399">{{ item.textTwo }}</span>
            <span class="textStyle">{{ item.textThree }}</span>
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
    totalWidth: String, //总宽度(px)
    totalHeight: String, //总高度(px)
    direction: String, //文字方向(col/row)必填
    picWidth: String, //图片宽度(px)
    picHeight: String, //图片高度(px)
    borderRadius: String, //图片圆角(px)
    backgroundColor: String, //图片背景色(十六进制或预设英文)
    text: Object, //文字内容(既是内容也用于决定循环次数)
    rowadd: String,     //是否添加第二行文字
  },
  setup(props) {
    // let picdata = reactive(props.picdata);
    let totalWidth = "width:" + props.totalWidth;
    let totalHeight = "height:" + props.totalHeight;
    let direction = props.direction;
    let picWidth = "width:" + props.picWidth;
    let picHeight = "height:" + props.picHeight;
    let borderRadius = "border-radius:" + props.borderRadius;
    let backgroundColor = "background-color:" + props.backgroundColor;
    let text = props.text;
    let rowadd = props.rowadd;
    let totalStyle = totalWidth + ";" + totalHeight;
    let picStyle =
      picWidth + ";" + picHeight + ";" + borderRadius + ";" + backgroundColor;
    // console.log(totalHeight,totalWidth);

    return {
      //   ...toRefs(picdata),
      totalWidth,
      totalHeight,
      totalStyle,
      picStyle,
      direction,
      picWidth,
      picHeight,
      borderRadius,
      backgroundColor,
      text,
      rowadd,
    };
  },
};
</script>

<style lang="less" scoped>
.textStyle {
  margin: 0px;
}
</style>