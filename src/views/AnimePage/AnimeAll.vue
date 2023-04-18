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
            height: 180px;
            padding: 0px 135px;
            display: flex;
            justify-content: space-evenly;
            background: linear-gradient(rgb(0 0 0 / 0%), #ffffff);
            z-index: 900;
            margin-top: -180px;
          "
        >
          <div v-for="item in 7" :key="item" class="carouselDiv">
            <div
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
        <div>
          <!-- 索引行 -->
          <div></div>
          <!-- 正在追 -->
          <div></div>
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

import { reactive, ref, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import HeaderNav from "@/components/HeaderNav.vue";
export default {
  name: "animeall",
  components: { HeaderNav },
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
</style>
