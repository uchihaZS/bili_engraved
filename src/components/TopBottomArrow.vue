<template>
  <div style="display: flex; transform: scale(0.2); margin-top: -30px">
    <div class="arrow" :class="{ active: changeValue % 2 != 0 }">
      <div class="topTriangle"></div>

      <div class="downTriangle" style="margin-top: 10px"></div>
    </div>
  </div>
</template>

<script>
import { CaretBottom, CaretTop } from "@element-plus/icons-vue";
import { reactive, ref, toRefs, watch } from "vue";
export default {
  components: { CaretBottom, CaretTop },
  props: {
    // topColor: { type: String, default: "" },
    // bottomColor: { type: String, default: "#909399" },
    size: { type: String, default: "15" },
  },
  setup(props) {
    let all = reactive({
      size: props.size,
      changeValue: 0,
    });
    function check() {
      //单数是从大到小
      all.changeValue++;
      //   console.log("aaa", all.changeValue);
    }

    return {
      ...toRefs(all),
      check,
    };
  },
};
</script>

<style lang="less" scoped>
.arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.5s ease;
}
.active {
  transform: rotate(180deg);
  transform-origin: center 50%;
}

.downTriangle {
  width: 0;
  height: 0;
  border-top: 40px solid #909399;
  border-right: 20px solid transparent;
  border-left: 20px solid transparent;
}
.topTriangle {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 40px solid #409eff;
  //
}
</style>