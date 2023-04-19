<template>
  <div class="common-layout">
    <el-container>
      <el-header class="el-header">
        <header-nav></header-nav>
      </el-header>
      <!-- 主体 -->
      <el-main class="el-main">
        <!-- 轮播图 -->
        <el-carousel
          height="550px"
          ref="carouselRef"
          style="width: 100vw; margin: 0px"
          arrow="never"
          indicator-position="none"
        >
          <el-carousel-item v-for="item in 7" :key="item">
            <h3 class="small justify-center" text="2xl">番剧{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>

        <!-- 轮播缩略图 -->
        <div
          style="
            width: 86%;
            height: 200px;
            padding: 0px 135px;
            display: flex;
            justify-content: space-evenly;
            background: linear-gradient(rgb(0 0 0 / 0%), #ffffff);
            z-index: 900;
            margin-top: -200px;
          "
        >
          <div v-for="item in 7" :key="item">
            <div
              class="carouselDiv"
              style="
                width: 220px;
                height: 150px;
                border-radius: 10px;
                background-color: #909399;
                border: 4px solid white;
              "
              @mouseover="switchCarousel(item)"
            >
              <div
                style="
                  display: inline-block;
                  margin: 120px 0px 0px 10px;
                  color: white;
                "
              >
                番剧名{{ item }}
              </div>
            </div>
          </div>
        </div>
        <!-- 内容 -->
        <div
          style="width: 86%; height: auto; padding: 0px 135px; margin-top: 40px"
        >
          <!-- 索引行 -->
          <div
            style="display: flex; justify-content: space-between; width: 100%"
          >
            <!-- 番剧索引 -->
            <div
              style="
                width: 22%;
                height: 130px;
                border-radius: 10px;
                background-color: rgb(247 137 137 / 33%);
                padding: 15px;
              "
            >
              <h3 class="toBlue">番剧索引 ></h3>
              <div>
                <span class="toBlue">追番人数</span>
                <span class="toBlue" style="margin-left: 15px">最高评分</span>
              </div>
              <div style="margin-top: 10px">
                <span class="toBlue">更新时间</span>
                <span class="toBlue" style="margin-left: 15px">播放数量</span>
              </div>
            </div>
            <!-- 类型风格 -->
            <div
              style="
                width: 22%;
                height: 130px;
                border-radius: 10px;
                background-color: rgb(133 206 97 / 33%);
                padding: 15px;
              "
            >
              <h3 class="toBlue">类型风格 ></h3>
              <div style="display: flex; flex-wrap: wrap; width: 310px">
                <span
                  v-for="i in style"
                  :key="i"
                  class="toBlue"
                  style="margin: 0px 10px 10px 0px"
                  >{{ i }}</span
                >
              </div>
            </div>
            <!-- 首播时间 -->
            <div
              style="
                width: 22%;
                height: 130px;
                border-radius: 10px;
                background-color: rgb(102 177 255 / 33%);
                padding: 15px;
              "
            >
              <h3 class="toBlue">首播时间 ></h3>
              <div style="display: flex; flex-wrap: wrap; width: 310px">
                <span
                  v-for="i in startTime"
                  :key="i"
                  class="toBlue"
                  style="margin: 0px 10px 10px 0px"
                  >{{ i }}</span
                >
              </div>
            </div>
            <!-- 热搜 -->
            <div
              style="
                width: 22%;
                height: 130px;
                border-radius: 10px;
                background-color: rgb(211 0 0 / 33%);
                padding: 15px;
              "
            >
              <h3 class="toBlue">热搜</h3>
              <div style="display: flex; flex-wrap: wrap; width: 310px">
                <span
                  v-for="i in hotSearch"
                  :key="i"
                  class="toBlue"
                  style="margin: 0px 10px 10px 0px"
                  >{{ i }}</span
                >
              </div>
            </div>
          </div>
          <!-- 正在追 -->
          <div style="width: 100%; margin-top: 30px">
            <div
              style="
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <h2>正在追</h2>
              <el-button @click="toPerSub">我的追番</el-button>
            </div>
            <!-- 数据轮播 -->
            <div>
              <data-carousel :arrayData="mySub">
                <template v-slot:inPicture="slotProps">
                  <div
                    style="
                      display: inline-block;
                      margin: 150px 0px 0px 10px;
                      color: white;
                    "
                  >
                    <div style="margin-bottom: 10px">
                      看到{{ slotProps.episode }}
                    </div>
                    <el-progress
                      :percentage="slotProps.progress"
                      :show-text="false"
                      stroke-width="8"
                      style="width: 230px"
                    />
                  </div>
                </template>
              </data-carousel>
            </div>
          </div>

          <!-- 新番时间表 -->
          <div></div>
          <!-- 番剧热播榜 -->
          <div></div>
          <!-- 新热推荐 -->
          <div></div>
          <!-- 动画资讯 -->
          <div></div>
          <!-- 官方延伸 -->
          <div></div>
          <!-- 猜你喜欢 -->
          <div></div>
          <!-- 热门热血番剧榜 -->
          <div></div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

import { reactive, ref, toRefs, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import HeaderNav from "@/components/HeaderNav.vue";
import DataCarousel from "@/components/DataCarousel.vue";
export default {
  name: "animeall",
  components: { HeaderNav, DataCarousel },
  setup() {
    // 跳转和vuex
    var router = useRouter();
    const store = useStore();
    const goToPage = (link, vname, author) => {
      store.dispatch("updateVname", vname);
      store.dispatch("updateAuthor", author);
      router.push({ path: link });
      // console.log(link);
    };

    // 使用 ref 创建轮播图组件的引用
    let carouselRef = ref(null);

    // 切换轮播图的方法
    const switchCarousel = (index) => {
      // 调用轮播图组件实例的 setActiveItem 方法来切换轮播图
      carouselRef.value.setActiveItem(index - 1);
    };
    const style = [
      "原创",
      "小说改",
      "奇幻",
      "热血",
      "战斗",
      "校园",
      "恋爱",
      "日常",
      "搞笑",
      "异世界",
      "龙傲天",
      "种田文",
    ];
    const startTime = [
      "2023",
      "2022",
      "2021",
      "2020",
      "2019",
      "2018",
      "2017",
      "2016",
    ];
    const hotSearch = ["假面骑士", "鬼灭之刃", "新海诚", "EVA"];
    const mySub = [
      { name: "番剧名1", progress: 33, episode: "第1话" },
      { name: "番剧名2", progress: 45, episode: "第10话" },
      { name: "番剧名3", progress: 37, episode: "第23话" },
      { name: "番剧名4", progress: 11, episode: "第14话" },
      { name: "番剧名5", progress: 22, episode: "第15话" },
      { name: "番剧名6", progress: 33, episode: "第11话" },
      { name: "番剧名7", progress: 44, episode: "第24话" },
      { name: "番剧名8", progress: 10, episode: "第23话" },
      { name: "番剧名9", progress: 1, episode: "第12话" },
      { name: "番剧名10", progress: 2, episode: "第1话" },
      { name: "番剧名11", progress: 5, episode: "第7话" },
      { name: "番剧名12", progress: 99, episode: "第6话" },
      { name: "番剧名13", progress: 2, episode: "第1话" },
      { name: "番剧名14", progress: 5, episode: "第7话" },
      { name: "番剧名15", progress: 99, episode: "第6话" },
    ];
    let startIndex = ref(0);
    let endIndex = ref(5);
    let displayedData = computed(() =>
      mySub.slice(startIndex.value, endIndex.value + 1)
    );

    let scroll = (direction) => {
      if (direction === 1 && endIndex.value < mySub.length - 1) {
        startIndex.value += 6;
        endIndex.value += 6;
      } else if (direction === -1 && startIndex.value > 0) {
        startIndex.value -= 6;
        endIndex.value -= 6;
      }
    };

    // 跳转函数
    let skipFun = reactive({
      toMessage() {
        router.push({ path: "/message" });
      },
      toHistory() {
        router.push({ path: "/history" });
      },
      toPerSub() {
        router.push({ path: "/personalsub" });
      },
      toPerCol() {
        router.push({ path: "/personalcol" });
      },
      toDya() {
        router.push({ path: "/dynamic" });
      },
      toAnswerMe() {
        router.push({ path: "/answerme" });
      },
      toGoods() {
        router.push({ path: "/msggoods" });
      },
      toMyMsg() {
        router.push({ path: "/mymsg" });
      },
      toSysMsg() {
        router.push({ path: "/sysmsg" });
      },
      toMsgOpt() {
        router.push({ path: "/msgopt" });
      },
      toAnimeTimeline() {
        router.push({ path: "/animetimeline" });
      },
      toAnimeSearch() {
        router.push({ path: "/animesearch" });
      },
      toAnimeSerialize() {
        router.push({ path: "/animeserialize" });
      },
      toAnimeEnd() {
        router.push({ path: "/animeend" });
      },
      toAnimeMsg() {
        router.push({ path: "/animemsg" });
      },
      toAnimeOffical() {
        router.push({ path: "/animeoffical" });
      },
      toAnimeAll() {
        router.push({ path: "/animeall" });
      },
    });

    return {
      goToPage,
      ...toRefs(skipFun),
      carouselRef,
      switchCarousel,
      style,
      startTime,
      hotSearch,
      mySub,
      displayedData,
      scroll,
    };
  },
};
</script>

<style lang="less" scoped>
.el-header {
  z-index: 998;
  overflow: auto;
}

.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-header::-webkit-scrollbar {
  display: none;
}

.carouselDiv:hover {
  transform: scale(1.2);
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: var(--el-box-shadow);
}

.el-main {
  display: flex;
  flex-direction: column;
  height: auto;
  overflow-y: auto;
  justify-content: center;
  padding: 0px;
  background-color: #ffffff;
}
.el-main::-webkit-scrollbar {
  display: none;
}

.arrow {
  width: 55px;
  height: 60px;
  border: 1px solid #e5eaf3;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  z-index: 800;
}

.left {
  top: 990px;
  left: 125px;
  cursor: pointer;
}

.right {
  left: 1720px;
  top: 990px;
  cursor: pointer;
}
.arrowFont {
  font-size: 40px;
  text-align: center;
  color: #79bbff;
}

.toBlue:hover {
  color: #409eff;
}
</style>
