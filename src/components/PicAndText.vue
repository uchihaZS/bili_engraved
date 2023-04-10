<template>
  <div>
    <div :style="totalStyle" style="margin-bottom: 15px" v-if="direction == 'col'">
      <!-- 图片 -->
      <div :style="picStyle"></div>
      <!-- 文字 -->
      <div>
        <p class="textStyle">aaa</p>
        <div>
          <span class="textStyle">bbb</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  props: {
    totalWidth: String,     //总宽度(px)
    totalHeight: String,       //总高度(px)
    direction: String,      //文字方向(col/row)
    picWidth: String,       //图片宽度(px)
    picHeight: String,      //图片高度(px)
    borderRadius: String,   //图片圆角(px)
    backgroundColor: String,    //图片背景色(十六进制或预设英文)
    text: Object,   //文字内容
  },
  setup(props) {
    // let picdata = reactive(props.picdata);
    let totalWidth= ('width:'+props.totalWidth)
    let totalHeight= ('height:'+props.totalHeight)
    let direction= (props.direction)
    let picWidth= ('width:'+props.picWidth)
    let picHeight= ('height:'+props.picHeight)
    let borderRadius= ('border-radius:'+props.borderRadius)
    let backgroundColor= ('background-color:'+props.backgroundColor)
    let text= reactive(props.text)
    let totalStyle=totalWidth+';'+totalHeight
    let picStyle=picWidth+';'+picHeight+';'+borderRadius+';'+backgroundColor
    // console.log(totalHeight,totalWidth);

    return {
    //   ...toRefs(picdata),
      ...toRefs(totalWidth),
      ...toRefs(totalHeight),
      totalStyle,
      picStyle,
      ...toRefs(direction),
      ...toRefs(picWidth),
      ...toRefs(picHeight),
      ...toRefs(borderRadius),
      ...toRefs(backgroundColor),
      ...toRefs(text),
    };
  },
};
</script>

<style lang="less" scoped>
.textStyle {
  margin: 0px;
}
</style>