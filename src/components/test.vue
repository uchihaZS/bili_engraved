<template>
  <div>
    <div v-if="subArray1.length" class="head">
      <!-- <div
        v-for="(i, index) in subArray1"
        :key="index"
        class="item animation-active"
        :class="{
          active: activeIndex == index,
        
        }"
      > -->
      <div
        class="item animation-active"
        :class="{
          itemOne: activeIndex == 6,
        }"
        v-if="isVideo == false"
        @mouseenter="hovered(0)"
        @mouseleave="leave()"
      >
        <div class="pic">
          <div v-if="isVideo == true">
            <video
              src="/cx.mp4"
              width="100%"
              height="100%"
              @mouseleave="leave()"
            ></video>
          </div>
        </div>
        <div>{{ subArray1[0].name }}</div>
      </div>
      <div
        class="item animation-active"
        v-if="isVideo == false"
        @mouseenter="hovered(1)"
        @mouseleave="leave()"
      >
        <div class="pic">
          <div v-if="isVideo == true">
            <video
              src="/cx.mp4"
              width="100%"
              height="100%"
              @mouseleave="leave()"
            ></video>
          </div>
        </div>
        <div>{{ subArray1[1].name }}</div>
      </div>
      <div
        class="item animation-active"
        v-if="isVideo == false"
        @mouseenter="hovered(2)"
        @mouseleave="leave()"
      >
        <div class="pic">
          <div v-if="isVideo == true">
            <video
              src="/cx.mp4"
              width="100%"
              height="100%"
              @mouseleave="leave()"
            ></video>
          </div>
        </div>
        <div>{{ subArray1[2].name }}</div>
      </div>
      <div
        class="item animation-active"
        v-if="isVideo == false"
        @mouseenter="hovered(3)"
        @mouseleave="leave()"
      >
        <div class="pic">
          <div v-if="isVideo == true">
            <video
              src="/cx.mp4"
              width="100%"
              height="100%"
              @mouseleave="leave()"
            ></video>
          </div>
        </div>
        <div>{{ subArray1[3].name }}</div>
      </div>
      <div
        class="item animation-active"
        v-if="isVideo == false"
        @mouseenter="hovered(4)"
        @mouseleave="leave()"
      >
        <div class="pic">
          <div v-if="isVideo == true">
            <video
              src="/cx.mp4"
              width="100%"
              height="100%"
              @mouseleave="leave()"
            ></video>
          </div>
        </div>
        <div>{{ subArray1[4].name }}</div>
      </div>
      <div
        class="item animation-active"
        v-if="isVideo == false"
        @mouseenter="hovered(5)"
        @mouseleave="leave()"
      >
        <div class="pic">
          <div v-if="isVideo == true">
            <video
              src="/cx.mp4"
              width="100%"
              height="100%"
              @mouseleave="leave()"
            ></video>
          </div>
        </div>
        <div>{{ subArray1[5].name }}</div>
      </div>
      <div
        class="item animation-active"
        v-if="isVideo == false"
        @mouseenter="hovered(6)"
        @mouseleave="leave()"
      >
        <div class="pic">
          <div v-if="isVideo == true">
            <video
              src="/cx.mp4"
              width="100%"
              height="100%"
              @mouseleave="leave()"
            ></video>
          </div>
        </div>
        <div>{{ subArray1[6].name }}</div>
      </div>
      <!-- </div> -->
      <!-- <div class="spacer"></div> -->
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
        let obj = { name: "番剧名" + i }; // 创建一个包含 name 属性的对象
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

    let hoverStyle = reactive({
      zeroWidth: "0px",
      originWidth: "212px",
      doubleWidth: "424px",
    });
    let isVideo = ref(false);
    function hovered(index) {
      if (index == 6) {
        activeIndex.value = 6;
      }
    }
    function leave(index) {
      activeIndex.value = -1;
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
      hoverStyle,
      isVideo,
    };
  },
};
</script>

<style lang="less" scoped>
.head {
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  max-width: 100%;
}
.head .item {
  flex: 0 0 calc(14.29% - 17.14px);
  width: calc(14.29% - 17.14px);
  margin-right: 20px;
  // border: 1px red solid;
}
.head .item:last-child {
  margin-right: 0;
}
.animation-active {
  transition: all 1s ease;
}
.head .item:hover {
  flex: 0 0 calc(28.57% - 14.29px);
}

.itemOne {
  margin-left: -235px !important;
}
.pic {
  border-radius: 10px;
  cursor: pointer;
  background-color: #909399;
  height: 350px;
  width: 100%;
}

// .spacer {
//   margin-left: auto;
// }
</style>
