<template>
  <div>
    <div v-if="subArray1.length" class="head">
      <div
        v-for="(i, index) in subArray1"
        :key="index"
        class="item animation-active"
        :class="{
          //判断当前hover的元素下标
          active: act1 == index,
          //如果下标为6给第一个元素加样式，看样式表
          itemOne: act1 == 6,
        }"
        @mouseenter="hovered1(index)"
        @mouseleave="leave1()"
      >
        <div>
          <div class="pic">
            <!-- 图文模式 -->
            <div
              :style="{
                display:
                  isVid1 == true && act1 == index ? 'none' : 'inline-block',
              }"
              style="
                margin: 300px 0px 10px 75%;
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
              v-if="isVid1 == true && act1 == index"
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
    <div v-if="subArray2.length" class="head" style="margin-top: 30px">
      <div
        v-for="(i, index) in subArray2"
        :key="index"
        class="item animation-active"
        :class="{
          //判断当前hover的元素下标
          active: act2 == index,
          //如果下标为6给第一个元素加样式，看样式表
          itemOne: act2 == 6,
        }"
        @mouseenter="hovered2(index)"
        @mouseleave="leave2()"
      >
        <div>
          <div class="pic">
            <!-- 图文模式 -->
            <div
              :style="{
                display:
                  isVid2 == true && act2 == index ? 'none' : 'inline-block',
              }"
              style="
                margin: 300px 0px 10px 75%;
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
              v-if="isVid2 == true && act2 == index"
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
    <div v-if="subArray3.length" class="head" style="margin-top: 30px">
      <div
        v-for="(i, index) in subArray3"
        :key="index"
        class="item animation-active"
        :class="{
          //判断当前hover的元素下标
          active: act3 == index,
          //如果下标为6给第一个元素加样式，看样式表
          itemOne: act3 == 6,
        }"
        @mouseenter="hovered3(index)"
        @mouseleave="leave3()"
      >
        <div>
          <div class="pic">
            <!-- 图文模式 -->
            <div
              :style="{
                display:
                  isVid3 == true && act3 == index ? 'none' : 'inline-block',
              }"
              style="
                margin: 300px 0px 10px 75%;
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
              v-if="isVid3 == true && act3 == index"
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
    <div v-if="subArray4.length" class="head" style="margin-top: 30px">
      <div
        v-for="(i, index) in subArray4"
        :key="index"
        class="item animation-active"
        :class="{
          //判断当前hover的元素下标
          active: act4 == index,
          //如果下标为6给第一个元素加样式，看样式表
          itemOne: act4 == 6,
        }"
        @mouseenter="hovered4(index)"
        @mouseleave="leave4()"
      >
        <div>
          <div class="pic">
            <!-- 图文模式 -->
            <div
              :style="{
                display:
                  isVid4 == true && act4 == index ? 'none' : 'inline-block',
              }"
              style="
                margin: 300px 0px 10px 75%;
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
              v-if="isVid4 == true && act4 == index"
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
import { ref, onBeforeMount, reactive, toRefs } from "vue";

export default {
  setup() {
    // 定义原始数组
    let testVideo = [];

    onBeforeMount(() => {
      for (let i = 1; i < 29; i++) {
        let obj = { name: "番剧名" + i, score: i }; // 创建一个包含 name 属性的对象
        testVideo.push(obj); // 将对象推入数组
      }
      // console.log(testVideo);

      // 在初始化时通过 push 方法更新响应式数组
      arr1.subArray1.push(...testVideo.slice(0, 7));
      arr2.subArray2.push(...testVideo.slice(7, 14));
      arr3.subArray3.push(...testVideo.slice(14, 21));
      arr4.subArray4.push(...testVideo.slice(21));
    });
    let arr1 = reactive({
      subArray1: [],
      act1: -1,
      isVid1: false,
      hovered1(index) {
        arr1.act1 = index;
        setTimeout(() => {
          arr1.isVid1 = true;
        }, 500);
      },
      leave1(index) {
        arr1.act1 = -1;
        arr1.isVid1 = false;
      },
    });
    let arr2 = reactive({
      subArray2: [],
      act2: -1,
      isVid2: false,
      hovered2(index) {
        arr2.act2 = index;
        setTimeout(() => {
          arr2.isVid2 = true;
        }, 500);
      },
      leave2(index) {
        arr2.act2 = -1;
        arr2.isVid2 = false;
      },
    });
    let arr3 = reactive({
      subArray3: [],
      act3: -1,
      isVid3: false,
      hovered3(index) {
        arr3.act3 = index;
        setTimeout(() => {
          arr3.isVid3 = true;
        }, 500);
      },
      leave3(index) {
        arr3.act3 = -1;
        arr3.isVid3 = false;
      },
    });
    let arr4 = reactive({
      subArray4: [],
      act4: -1,
      isVid4: false,
      hovered4(index) {
        arr4.act4 = index;
        setTimeout(() => {
          arr4.isVid4 = true;
        }, 500);
      },
      leave4(index) {
        arr4.act4 = -1;
        arr4.isVid4 = false;
      },
    });

    return {
      ...toRefs(arr1),
      ...toRefs(arr2),
      ...toRefs(arr3),
      ...toRefs(arr4),
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
