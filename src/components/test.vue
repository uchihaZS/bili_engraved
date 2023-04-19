<template>
  <div style="display:flex">
    <div class="one" @mouseenter="showTwo" @mouseleave="hideTwo">aaa</div>
    <div
      class="two"
      v-show="showSecond"
      @mouseover="cancelHide"
      @mouseleave="startHide"
    >
      bbb
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  setup() {
    let showSecond =ref(false) ;
    let hideTimeout;

    const showTwo = () => {
      showSecond.value = true;
      //   clearTimeout(hideTimeout);
      console.log("showtwo");
    };

    const hideTwo = () => {
      hideTimeout = setTimeout(() => {
        showSecond.value = false;
      }, 3000);
    };

    const cancelHide = () => {
      clearTimeout(hideTimeout);
    };

    const startHide = () => {
      hideTwo();
    };

    return {
      showSecond,
      showTwo,
      hideTwo,
      cancelHide,
      startHide,
    };
  },
};
</script>

<style scoped>
.one {
  /* 第一个div的样式 */
  border: 1px solid blue;
  width: 200px;
  height: 300px;
}

.two {
  /* 第二个div的样式 */
  opacity: 0; /* 初始时设置透明度为0，实现渐隐渐显动画效果 */
  transition: opacity 0.3s ease; /* 添加渐变效果，持续0.3秒，使用ease动画曲线 */
  border: 1px solid red;
  width: 200px;
  height: 300px;
  /* margin-top: 20px; */
}
.two.show {
  /* opacity: 1; 当showSecond为true时，设置透明度为1，显示第二个div */
  border: 1px solid red;
  width: 200px;
  height: 300px;
}
</style>
