<template>
  <div style="display: flex; position: absolute">
    <!-- 左箭头 -->
    <div class="arrow left" @click="scroll(-1)">
      <div class="arrowFont">&lt;</div>
    </div>
    <!-- 列表 -->
    <div style="width: 100%; display: flex; justify-content: flex-start">
      <div
        v-for="(arrayData, index) in displayedData"
        :key="index"
        style="margin: 0px 10px"
      >
        <div
          style="
            width: 250px;
            height: 200px;
            border-radius: 10px;
            background-color: #909399;
          "
        >
          <slot name="inPicture" v-bind="arrayData"></slot>
        </div>
        <p>{{ arrayData.name }}</p>
      </div>
    </div>
    <!-- 右箭头 -->
    <div class="arrow right" @click="scroll(1)">
      <div class="arrowFont">&gt;</div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs, computed } from "vue";
export default {
  props: {
    arrayData: Array,
  },
  setup(props) {
    let arrayData = props.arrayData;
    let startIndex = ref(0);
    let endIndex = ref(5);
    let displayedData = computed(() =>
      arrayData.slice(startIndex.value, endIndex.value + 1)
    );

    let scroll = (direction) => {
      if (direction === 1 && endIndex.value < arrayData.length - 1) {
        startIndex.value += 6;
        endIndex.value += 6;
      } else if (direction === -1 && startIndex.value > 0) {
        startIndex.value -= 6;
        endIndex.value -= 6;
      }
    };

    return {
      arrayData,
      displayedData,
      scroll,
    };
  },
};
</script>

<style lang="less" scoped>
.arrow {
  width: 55px;
  height: 60px;
  border: 1px solid #e5eaf3;
  border-radius: 50%;
  background-color: rgb(255 255 255 / 50%);
  position: absolute;
  z-index: 800;
  backdrop-filter: blur(10px); /* 模糊效果，可以根据需要调整模糊半径 */
  transform: scale(0.8); /* 初始缩放比例 */
  transition: transform 0.3s ease; /* 过渡动画效果，可以根据需要调整时间和缓动函数 */
}
.arrow:hover {
  transform: scale(1); /* 放大的缩放比例 */
}
.left {
  top: 70px;
  left: -20px;
  cursor: pointer;
}

.right {
  left: 1580px;
  top: 70px;
  cursor: pointer;
}
.arrowFont {
  font-size: 40px;
  text-align: center;
  color: #79bbff;
}
</style>