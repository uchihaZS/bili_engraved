<template>
  <div>
    <!-- 如果垂直排列图文 -->
    <div v-if="direction == 'col'">
      <div
        v-if="testmode == true"
        style="
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
        "
      >
        <div
          v-for="item in 1"
          :key="item"
          :style="totalStyle"
          style="margin-bottom: 15px"
        >
          <!-- 图片 -->
          <div :style="picStyle"></div>
          <!-- 文字 -->
          <div style="margin-top: 10px">
            <div
              v-if="
                typeof item.rowOne === 'object' &&
                item.rowOne.p1 &&
                item.rowOne.p2
              "
              style="
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
              "
            >
              <span class="textStyle" style="font-size: 18px">{{
                item.rowOne.p1
              }}</span>
              <span class="textStyle" style="font-size: 18px">{{
                item.rowOne.p2
              }}</span>
            </div>
            <div v-else-if="typeof item.rowOne === 'string'">
              <p class="textStyle" style="font-size: 18px">
                {{ item.rowOne }}
              </p>
            </div>
            <div
              v-if="rowadd == 'true'"
              style="
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
              "
              :style="picWidth"
            >
              <span class="textStyle" style="font-size: 14px; color: #909399">{{
                item.textTwo
              }}</span>
              <span class="textStyle">{{ item.textThree }}</span>
            </div>
          </div>
        </div>
      </div>
      <div
        v-else
        style="
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
        "
      >
        <div
          v-for="item in onlytext"
          :key="item"
          :style="totalStyle"
          style="margin-bottom: 15px"
        >
          <!-- 图片 -->
          <div :style="picStyle"></div>
          <!-- 文字 -->
          <div style="margin-top: 10px">
            <div
              v-if="
                typeof item.rowOne === 'object' &&
                item.rowOne.p1 &&
                item.rowOne.p2
              "
              style="
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
              "
            >
              <span class="textStyle" style="font-size: 18px">{{
                item.rowOne.p1
              }}</span>
              <span class="textStyle" style="font-size: 18px">{{
                item.rowOne.p2
              }}</span>
            </div>
            <div v-else-if="typeof item.rowOne === 'string'">
              <p class="textStyle" style="font-size: 18px">
                {{ item.rowOne }}
              </p>
            </div>
            <div
              v-if="rowadd == 'true'"
              style="
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
              "
              :style="picWidth"
            >
              <span class="textStyle" style="font-size: 14px; color: #909399">{{
                item.textTwo
              }}</span>
              <span class="textStyle">{{ item.textThree }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { watch, toRefs, onMounted } from "vue";
export default {
  props: {
    totalWidth: { type: String, required: true }, //总宽度(px)
    totalHeight: { type: String, required: true }, //总高度(px)
    direction: { type: String, required: true, default: "col" }, //文字方向(col/row)必填
    picWidth: { type: String, required: true }, //图片宽度(px)
    picHeight: { type: String, required: true }, //图片高度(px)
    borderRadius: { type: String, default: "" }, //图片圆角(px)
    backgroundColor: { type: String, default: "" }, //图片背景色(十六进制或预设英文)
    text: Array, //文字内容(既是内容也用于决定循环次数)
    rowadd: { type: String, default: "false" }, //是否添加第二行文字
    testmode: { type: String, default: "false" }, //测试模式
    // [          图片          ]
    // rowOne.p1        rowOne.p2
    // textTwo          textThree
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
    // let onlytext = toRefs(props.text)
    let onlytext = props.text;
    let rowadd = props.rowadd;
    let testmode = props.testmode;
    let totalStyle = totalWidth + ";" + totalHeight;
    let picStyle =
      picWidth + ";" + picHeight + ";" + borderRadius + ";" + backgroundColor;

    // console.log("子组件：" + JSON.stringify(onlytext));
    // console.log("子组件props：" + onlytext);

    // watch(() => onlytext, (newValue, oldValue) => {
    //   console.log('myArray changed!', newValue, oldValue);
    //   // 可以在这里更新子组件数据或者调用子组件的刷新函数
    // });
    onMounted(() => {
      
      console.log("子组件mounted");
      // console.log(onlytext.textdata);
    });
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
      onlytext,
      rowadd,
      testmode,
    };
  },
};
</script>

<style lang="less" scoped>
.textStyle {
  margin: 0px;
}
</style>