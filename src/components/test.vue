<template>
  <div>
    <div v-if="subArray1.length" class="head">
      <div
        v-for="(i, index) in subArray1"
        :key="index"
        class="item animation-active"
        :class="{
          //判断当前hover的元素下标
          active: activeIndex == index,
          //如果下标为6给第一个元素加样式，看样式表
          itemOne: activeIndex == 6,
        }"
        @mouseenter="hovered(index)"
        @mouseleave="leave()"
      >
        <div>
          <div class="pic">
            <!-- 图文模式 -->
            <div
              :style="{
                display:
                  isVideo == true && activeIndex == index
                    ? 'none'
                    : 'inline-block',
              }"
              style="
                margin: 300px 0px 10px 175px;
                font-size: 35px;
                color: white;
                font-family: math;
                font-style: oblique;
              "
            >
              {{ i.score }}
            </div>
            <!-- 视频模式 -->
            <div
              v-if="isVideo == true && activeIndex == index"
              style="width: 100%; height: 350px"
            >
              <video
                src="/cx.mp4"
                width="100%"
                height="100%"
                muted="muted"
                autoplay="autoplay"
                style="
                  width: 100%;
                  height: 100%;
                  object-fit: fill;
                  border-radius: 10px;
                "
              ></video>
            </div>
          </div>

          <div class="toBlue" style="margin-top: 10px; font-size: 20px">
            {{ i.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount, reactive } from "vue";

export default {
  setup() {
    // 定义原始数组
    let testVideo = [];
    let subArray1 = reactive([]);
    let subArray2 = reactive([]);
    let subArray3 = reactive([]);
    let subArray4 = reactive([]);
    onBeforeMount(() => {
      for (let i = 1; i < 29; i++) {
        let obj = { name: "番剧名" + i, score: i }; // 创建一个包含 name 属性的对象
        testVideo.push(obj); // 将对象推入数组
      }
      // console.log(testVideo);

      // 在初始化时通过 push 方法更新响应式数组
      subArray1.push(...testVideo.slice(0, 7));
      subArray2.push(...testVideo.slice(7, 14));
      subArray3.push(...testVideo.slice(14, 21));
      subArray4.push(...testVideo.slice(21));
    });

    let activeIndex = ref(-1);

    let isVideo = ref(false);

    function hovered(index) {
      activeIndex.value = index;
      setTimeout(() => {
        isVideo.value = true;
      }, 500);
    }
    function leave(index) {
      activeIndex.value = -1;
      isVideo.value = false;
    }
    // 返回新数组的引用
    return {
      subArray1,
      subArray2,
      subArray3,
      subArray4,
      activeIndex,
      hovered,
      leave,

      isVideo,
    };
  },
};
</script>

<style lang="less" scoped>
// 最外部div设置overflow: hidden做出溢出隐藏
.head {
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  max-width: 100%;
}
// 每个元素的默认样式
.head .item {
  flex: 0 0 calc(14.29% - 17.14px);
  width: calc(14.29% - 17.14px);
  margin-right: 20px;
}
// 最后一个元素的样式
.head .item:last-child {
  margin-right: 0;
}
// 动画效果
.animation-active {
  transition: all 0.5s ease;
}
// hover时的效果（变宽）
.head .item.active {
  flex: 0 0 calc(28.57% - 14.29px);
}
// 当hover最后一个元素时给第一个元素左移（通过index判断）
.head .item:first-child.itemOne {
  margin-left: -235px !important;
}

.pic {
  border-radius: 10px;
  cursor: pointer;
  background-color: #909399;
  height: 350px;
  width: 100%;
}

.toBlue:hover {
  color: #409eff;
}
</style>
