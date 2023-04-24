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
        <!-- 回到顶部 -->
        <el-backtop
          :right="50"
          :bottom="100"
          :visibility-height="400"
          style="width: 40px; height: 40px"
        >
          <div
            style="
              height: 100%;
              width: 100%;
              background-color: var(--el-bg-color-overlay);
              box-shadow: var(--el-box-shadow-lighter);
              text-align: center;
              line-height: 20px;
              color: #1989fa;
              font-size: 16px;
            "
          >
            回到顶部
          </div>
        </el-backtop>
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
              <data-carousel
                :arrayData="mySub"
                picHeight="200px"
                picWidth="250px"
                arrowTop="70px"
              >
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
          <div style="margin-top: 30px">
            <div
              style="
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <div
                style="
                  display: flex;
                  width: 650px;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <h2 style="margin: 0px">新番时间表</h2>
                <ul
                  style="
                    list-style-type: none;
                    display: flex;
                    height: 30px;
                    width: 490px;
                    background-color: #e5eaf3;
                    border-radius: 20px;
                    font-size: 14px;
                    justify-content: space-around;
                    margin: 0px;
                    padding: 0px 1px;
                    align-items: center;
                  "
                >
                  <li
                    v-for="(item, index) in days"
                    :key="index"
                    @click="handleItemClick(index)"
                    :style="{
                      backgroundColor:
                        selectedIndex === index ? 'white' : 'transparent',
                      borderRadius:
                        selectedIndex === index ? '15px' : 'transparent',
                      border:
                        selectedIndex === index
                          ? '1px solid #E5EAF3'
                          : 'transparent',
                    }"
                    style="
                      width: 140px;
                      height: 28px;
                      border-radius: 15px;
                      align-items: center;
                      display: flex;
                      color: black;
                      cursor: pointer;
                      justify-content: center;
                    "
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
              <el-button @click="toAnimeTimeline">查看全部></el-button>
            </div>
            <div style="display: flex; position: relative; margin-top: 20px">
              <!-- 左箭头 -->
              <div
                class="arrow left"
                @click="scroll(-1)"
                v-show="arrayData.length > 5"
              >
                <div class="arrowFont">&lt;</div>
              </div>
              <!-- 列表 -->
              <!-- 最近更新 -->
              <div
                style="width: 100%; display: flex; justify-content: flex-start"
                v-if="selectedIndex == 0"
              >
                <div
                  v-for="(arrayData, index) in displayedData"
                  :key="index"
                  style="margin: 0px 10px"
                >
                  <div
                    style="
                      width: 75px;
                      border-radius: 20px;
                      padding: 5px;
                      margin-bottom: 10px;
                      font-size: 14px;
                      display: flex;
                      justify-content: space-around;
                    "
                    :style="{ backgroundColor: arrayData.bgColor }"
                  >
                    <div style="font-weight: 600">
                      {{ arrayData.updateDay }}
                    </div>
                    <div>{{ arrayData.updateTime }}</div>
                  </div>

                  <div
                    style="
                      width: 250px;
                      height: 200px;
                      border-radius: 10px;
                      background-color: #909399;
                      cursor: pointer;
                    "
                  >
                    <slot name="inPicture" v-bind="arrayData"></slot>
                  </div>
                  <p style="cursor: pointer" class="toBlue">
                    {{ arrayData.name }}
                  </p>
                </div>
              </div>
              <!-- 周一 -->
              <div
                style="width: 100%; display: flex; justify-content: flex-start"
                v-if="selectedIndex == 1"
              >
                <div
                  v-for="(arrayData, index) in displayedData"
                  :key="index"
                  style="margin: 0px 10px"
                >
                  <div
                    style="
                      width: 75px;
                      border-radius: 20px;
                      padding: 5px;
                      margin-bottom: 10px;
                      font-size: 14px;
                      display: flex;
                      justify-content: space-around;
                    "
                    :style="{ backgroundColor: arrayData.bgColor }"
                  >
                    <div style="font-weight: 600">
                      {{ arrayData.updateDay }}
                    </div>
                    <div>{{ arrayData.updateTime }}</div>
                  </div>

                  <div
                    style="
                      width: 250px;
                      height: 200px;
                      border-radius: 10px;
                      background-color: #909399;
                      cursor: pointer;
                    "
                  >
                    <slot name="inPicture" v-bind="arrayData"></slot>
                  </div>
                  <p style="cursor: pointer" class="toBlue">
                    {{ arrayData.name }}
                  </p>
                </div>
              </div>
              <!-- 周二 -->
              <div
                style="width: 100%; display: flex; justify-content: flex-start"
                v-if="selectedIndex == 2"
              >
                <div
                  v-for="(arrayData, index) in displayedData"
                  :key="index"
                  style="margin: 0px 10px"
                >
                  <div
                    style="
                      width: 75px;
                      border-radius: 20px;
                      padding: 5px;
                      margin-bottom: 10px;
                      font-size: 14px;
                      display: flex;
                      justify-content: space-around;
                    "
                    :style="{ backgroundColor: arrayData.bgColor }"
                  >
                    <div style="font-weight: 600">
                      {{ arrayData.updateDay }}
                    </div>
                    <div>{{ arrayData.updateTime }}</div>
                  </div>

                  <div
                    style="
                      width: 250px;
                      height: 200px;
                      border-radius: 10px;
                      background-color: #909399;
                      cursor: pointer;
                    "
                  >
                    <slot name="inPicture" v-bind="arrayData"></slot>
                  </div>
                  <p style="cursor: pointer" class="toBlue">
                    {{ arrayData.name }}
                  </p>
                </div>
              </div>
              <!-- 周三 -->
              <div
                style="width: 100%; display: flex; justify-content: flex-start"
                v-if="selectedIndex == 3"
              >
                <div
                  v-for="(arrayData, index) in displayedData"
                  :key="index"
                  style="margin: 0px 10px"
                >
                  <div
                    style="
                      width: 75px;
                      border-radius: 20px;
                      padding: 5px;
                      margin-bottom: 10px;
                      font-size: 14px;
                      display: flex;
                      justify-content: space-around;
                    "
                    :style="{ backgroundColor: arrayData.bgColor }"
                  >
                    <div style="font-weight: 600">
                      {{ arrayData.updateDay }}
                    </div>
                    <div>{{ arrayData.updateTime }}</div>
                  </div>

                  <div
                    style="
                      width: 250px;
                      height: 200px;
                      border-radius: 10px;
                      background-color: #909399;
                      cursor: pointer;
                    "
                  >
                    <slot name="inPicture" v-bind="arrayData"></slot>
                  </div>
                  <p style="cursor: pointer" class="toBlue">
                    {{ arrayData.name }}
                  </p>
                </div>
              </div>
              <!-- 周四 -->
              <div
                style="width: 100%; display: flex; justify-content: flex-start"
                v-if="selectedIndex == 4"
              >
                <div
                  v-for="(arrayData, index) in displayedData"
                  :key="index"
                  style="margin: 0px 10px"
                >
                  <div
                    style="
                      width: 75px;
                      border-radius: 20px;
                      padding: 5px;
                      margin-bottom: 10px;
                      font-size: 14px;
                      display: flex;
                      justify-content: space-around;
                    "
                    :style="{ backgroundColor: arrayData.bgColor }"
                  >
                    <div style="font-weight: 600">
                      {{ arrayData.updateDay }}
                    </div>
                    <div>{{ arrayData.updateTime }}</div>
                  </div>

                  <div
                    style="
                      width: 250px;
                      height: 200px;
                      border-radius: 10px;
                      background-color: #909399;
                      cursor: pointer;
                    "
                  >
                    <slot name="inPicture" v-bind="arrayData"></slot>
                  </div>
                  <p style="cursor: pointer" class="toBlue">
                    {{ arrayData.name }}
                  </p>
                </div>
              </div>
              <!-- 周五 -->
              <div
                style="width: 100%; display: flex; justify-content: flex-start"
                v-if="selectedIndex == 5"
              >
                <div
                  v-for="(arrayData, index) in displayedData"
                  :key="index"
                  style="margin: 0px 10px"
                >
                  <div
                    style="
                      width: 75px;
                      border-radius: 20px;
                      padding: 5px;
                      margin-bottom: 10px;
                      font-size: 14px;
                      display: flex;
                      justify-content: space-around;
                    "
                    :style="{ backgroundColor: arrayData.bgColor }"
                  >
                    <div style="font-weight: 600">
                      {{ arrayData.updateDay }}
                    </div>
                    <div>{{ arrayData.updateTime }}</div>
                  </div>

                  <div
                    style="
                      width: 250px;
                      height: 200px;
                      border-radius: 10px;
                      background-color: #909399;
                      cursor: pointer;
                    "
                  >
                    <slot name="inPicture" v-bind="arrayData"></slot>
                  </div>
                  <p style="cursor: pointer" class="toBlue">
                    {{ arrayData.name }}
                  </p>
                </div>
              </div>
              <!-- 周六 -->
              <div
                style="width: 100%; display: flex; justify-content: flex-start"
                v-if="selectedIndex == 6"
              >
                <div
                  v-for="(arrayData, index) in displayedData"
                  :key="index"
                  style="margin: 0px 10px"
                >
                  <div
                    style="
                      width: 75px;
                      border-radius: 20px;
                      padding: 5px;
                      margin-bottom: 10px;
                      font-size: 14px;
                      display: flex;
                      justify-content: space-around;
                    "
                    :style="{ backgroundColor: arrayData.bgColor }"
                  >
                    <div style="font-weight: 600">
                      {{ arrayData.updateDay }}
                    </div>
                    <div>{{ arrayData.updateTime }}</div>
                  </div>

                  <div
                    style="
                      width: 250px;
                      height: 200px;
                      border-radius: 10px;
                      background-color: #909399;
                      cursor: pointer;
                    "
                  >
                    <slot name="inPicture" v-bind="arrayData"></slot>
                  </div>
                  <p style="cursor: pointer" class="toBlue">
                    {{ arrayData.name }}
                  </p>
                </div>
              </div>
              <!-- 周日 -->
              <div
                style="width: 100%; display: flex; justify-content: flex-start"
                v-if="selectedIndex == 7"
              >
                <div
                  v-for="(arrayData, index) in displayedData"
                  :key="index"
                  style="margin: 0px 10px"
                >
                  <div
                    style="
                      width: 75px;
                      border-radius: 20px;
                      padding: 5px;
                      margin-bottom: 10px;
                      font-size: 14px;
                      display: flex;
                      justify-content: space-around;
                    "
                    :style="{ backgroundColor: arrayData.bgColor }"
                  >
                    <div style="font-weight: 600">
                      {{ arrayData.updateDay }}
                    </div>
                    <div>{{ arrayData.updateTime }}</div>
                  </div>

                  <div
                    style="
                      width: 250px;
                      height: 200px;
                      border-radius: 10px;
                      background-color: #909399;
                      cursor: pointer;
                    "
                  >
                    <slot name="inPicture" v-bind="arrayData"></slot>
                  </div>
                  <p style="cursor: pointer" class="toBlue">
                    {{ arrayData.name }}
                  </p>
                </div>
              </div>
              <!-- 右箭头 -->
              <div
                class="arrow right"
                @click="scroll(1)"
                v-show="arrayData.length > 5"
              >
                <div class="arrowFont">&gt;</div>
              </div>
            </div>
          </div>
          <!-- 番剧热播榜 -->
          <div style="margin-top: 30px">
            <div
              style="
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <h2>番剧热播榜</h2>
              <el-button @click="toPerSub">查看全部></el-button>
            </div>
            <div>
              <data-carousel
                :arrayData="mySub"
                picHeight="350px"
                picWidth="250px"
                arrowTop="150px"
              >
                <template v-slot:inPicture="slotProps">
                  <div
                    style="
                      margin: 300px 0px 10px 193px;
                      display: inline-block;
                      font-size: 35px;
                      color: white;
                      font-family: math;
                      font-style: oblique;
                    "
                  >
                    {{ slotProps.score }}
                  </div>
                </template>
                <template v-slot:detailText="slotProps">
                  <div
                    style="
                      display: flex;
                      height: 50px;
                      border-radius: 7px;
                      margin-top: -51px;
                      align-items: center;
                      background-color: rgb(0 0 0 / 10%);
                      backdrop-filter: blur(-3px);
                    "
                  >
                    <div
                      style="
                        font-size: 30px;
                        color: black;
                        font-family: math;
                        font-style: oblique;
                      "
                    >
                      {{ slotProps.rank }}
                    </div>
                    <div
                      style="font-size: 18px; margin-left: 10px"
                      class="toBlue"
                    >
                      {{ slotProps.name }}
                    </div>
                  </div>
                </template>
              </data-carousel>
            </div>
          </div>
          <!-- 新热推荐 -->
          <div style="margin-top: 60px">
            <h2>新热推荐</h2>
            <div style="display: flex">
              <div style="">
                <video
                  autoplay="autoplay"
                  controls="controls"
                  muted="muted"
                  src="/cx.mp4"
                  style="
                    z-index: 800;
                    position: relative;
                    top: 0px;
                    left: 0px;
                    width: 939px;
                    height: 530px;
                    border-radius: 20px;
                  "
                ></video>
              </div>
              <div
                style="
                  width: 95%;
                  height: 520px;
                  background-color: red;
                  margin-left: -860px;
                  border-radius: 10px;
                  margin-top: 27px;
                  overflow-x: hidden;
                  z-index: 200;
                "
              >
                <!-- 文字描述 -->
                <div style="margin: 150px 0px 0px 900px">
                  <h1 style="color: white">番剧名</h1>
                  <div
                    style="
                      font-size: 20px;
                      color: white;
                      font-family: math;
                      font-style: oblique;
                      font-weight: bolder;
                    "
                  >
                    评分(9.8)
                  </div>
                  <p style="color: white">番剧简介</p>
                  <div
                    style="
                      display: flex;
                      width: 120px;
                      height: 65px;
                      justify-content: space-between;
                    "
                  >
                    <!-- 播放按钮 -->
                    <div
                      style="
                        width: 55px;
                        height: 60px;
                        border-radius: 50%;
                        background-color: rgb(255 255 255 / 50%);
                        backdrop-filter: blur(10px);
                        transform: scale(0.8);
                        cursor: pointer;
                      "
                    >
                      <el-icon color="white" size="50" style="margin: 5px 2px"
                        ><CaretRight
                      /></el-icon>
                    </div>
                    <!-- 收藏按钮 -->
                    <div
                      style="
                        width: 55px;
                        height: 60px;
                        border-radius: 50%;
                        background-color: rgb(255 255 255 / 50%);
                        backdrop-filter: blur(10px);
                        transform: scale(0.8);
                        cursor: pointer;
                      "
                    >
                      <el-icon color="white" size="50" style="margin: 5px 2px"
                        ><StarFilled
                      /></el-icon>
                    </div>
                  </div>
                </div>
                <!-- 封面列表 -->
                <div
                  style="
                    width: 800px;
                    margin-left: 900px;
                    margin-top: 0px;
                    display: flex;
                    align-items: center;
                  "
                >
                  <div
                    style="
                      width: 200px;
                      height: 145px;
                      background-size: cover;
                      background-repeat: no-repeat;
                      border: 5px solid rgb(229, 234, 243);
                      border-radius: 11px;
                    "
                    :style="{ backgroundImage: `url('/fm.jpg')` }"
                  ></div>
                  <div
                    style="
                      width: 200px;
                      height: 145px;
                      background-color: rgb(144, 144, 144);
                      border-radius: 10px;
                      transform: scale(0.9);
                    "
                  ></div>
                  <div
                    style="
                      width: 200px;
                      height: 145px;
                      background-color: rgb(144, 144, 144);
                      border-radius: 10px;
                      transform: scale(0.9);
                    "
                  ></div>
                  <div
                    style="
                      width: 200px;
                      height: 145px;
                      background-color: rgb(144, 144, 144);
                      border-radius: 10px;
                      transform: scale(0.9);
                    "
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <!-- 动画资讯 -->
          <div style="margin-top: 50px">
            <div
              style="
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <h2>动画资讯</h2>
              <el-button @click="toAnimeMsg">查看全部></el-button>
            </div>
            <div>
              <data-carousel
                :arrayData="testVideo"
                picHeight="200px"
                picWidth="250px"
                arrowTop="70px"
              >
              </data-carousel>
            </div>
          </div>
          <!-- 官方延伸 -->
          <div style="margin-top: 30px">
            <div
              style="
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <h2>官方延伸</h2>
              <el-button @click="toAnimeOffical">查看全部></el-button>
            </div>
            <div>
              <data-carousel
                :arrayData="testVideo"
                picHeight="200px"
                picWidth="250px"
                arrowTop="70px"
              >
              </data-carousel>
            </div>
          </div>
          <!-- 猜你喜欢 -->
          <div
            style="
              margin-top: 30px;
              width: 100%;
              border:1px solid;
            "
          >
            <test></test>
          </div>
          <!-- 热门热血番剧榜 -->
          <div></div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

import { reactive, ref, toRefs, computed, onMounted, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import HeaderNav from "@/components/HeaderNav.vue";
import DataCarousel from "@/components/DataCarousel.vue";
import test from "@/components/test.vue";
import getTime from "@/hooks/getTime";
import { CaretRight, StarFilled } from "@element-plus/icons-vue";
export default {
  name: "animeall",
  components: { HeaderNav, DataCarousel, CaretRight, StarFilled, test },

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
    let mySub = reactive([
      {
        name: "番剧名1",
        progress: 33,
        episode: "第1话",
        updateDay: "周一",
        updateTime: "01:25",
        bgColor: "#f78989",
        score: 10,
        rank: 1,
      },
      {
        name: "番剧名2",
        progress: 45,
        episode: "第10话",
        updateDay: "周一",
        updateTime: "02:25",
        bgColor: "#f78989",
        score: 5.5,
        rank: 2,
      },
      {
        name: "番剧名3",
        progress: 37,
        episode: "第23话",
        updateDay: "周一",
        updateTime: "08:25",
        bgColor: "#f78989",
        score: 4.7,
        rank: 3,
      },
      {
        name: "番剧名4",
        progress: 11,
        episode: "第14话",
        updateDay: "周一",
        updateTime: "17:25",
        bgColor: "#f78989",
        score: 8.5,
        rank: 4,
      },
      {
        name: "番剧名4-0",
        progress: 11,
        episode: "第14话",
        updateDay: "周一",
        updateTime: "17:25",
        bgColor: "#f78989",
        score: 6.5,
        rank: 5,
      },
      {
        name: "番剧名4-1",
        progress: 11,
        episode: "第14话",
        updateDay: "周一",
        updateTime: "17:25",
        bgColor: "#f78989",
        score: 6.7,
        rank: 6,
      },
      {
        name: "番剧名4-2",
        progress: 11,
        episode: "第14话",
        updateDay: "周一",
        updateTime: "17:25",
        bgColor: "#f78989",
        score: 8.5,
        rank: 7,
      },
      {
        name: "番剧名5",
        progress: 22,
        episode: "第15话",
        updateDay: "周二",
        updateTime: "01:25",
        bgColor: "#85ce61",
        score: 8.6,
        rank: 9,
      },
      {
        name: "番剧名6",
        progress: 33,
        episode: "第11话",
        updateDay: "周二",
        updateTime: "03:05",
        bgColor: "#85ce61",
        score: 7.4,
        rank: 8,
      },
      {
        name: "番剧名7",
        progress: 44,
        episode: "第24话",
        updateDay: "周三",
        updateTime: "18:35",
        bgColor: "#66b1ff",
        score: 9.0,
        rank: 10,
      },
      {
        name: "番剧名8",
        progress: 10,
        episode: "第23话",
        updateDay: "周四",
        updateTime: "00:25",
        bgColor: "#ebb563",
        score: 3.4,
        rank: 11,
      },
      {
        name: "番剧名9",
        progress: 1,
        episode: "第12话",
        updateDay: "周四",
        updateTime: "10:45",
        bgColor: "#ebb563",
        score: 9.9,
        rank: 12,
      },
      {
        name: "番剧名10",
        progress: 2,
        episode: "第1话",
        updateDay: "周五",
        updateTime: "09:15",
        bgColor: "#67C23A",
        score: 8.9,
        rank: 13,
      },
      {
        name: "番剧名11",
        progress: 5,
        episode: "第7话",
        updateDay: "周五",
        updateTime: "12:35",
        bgColor: "#67C23A",
        score: 9.8,
        rank: 14,
      },
      {
        name: "番剧名12",
        progress: 99,
        episode: "第6话",
        updateDay: "周五",
        updateTime: "13:25",
        bgColor: "#67C23A",
        score: 9.7,
        rank: 15,
      },
      {
        name: "番剧名13",
        progress: 2,
        episode: "第1话",
        updateDay: "周六",
        updateTime: "08:25",
        bgColor: "#409EFF",
        score: 8.8,
        rank: 16,
      },
      {
        name: "番剧名14",
        progress: 5,
        episode: "第7话",
        updateDay: "周日",
        updateTime: "16:25",
        bgColor: "#F56C6C",
        score: 2.5,
        rank: 17,
      },
      {
        name: "番剧名15",
        progress: 99,
        episode: "第6话",
        updateDay: "周日",
        updateTime: "17:25",
        bgColor: "#F56C6C",
        score: 10,
        rank: 18,
      },
    ]);
    let timeUL = reactive({
      days: [
        "最近更新",
        "周一",
        "周二",
        "周三",
        "周四",
        "周五",
        "周六",
        "周日",
      ],
      today: "",
      selectedIndex: -1,
      arrayData: mySub,
      startIndex: 0,
      endIndex: 5,
      displayedData: computed(() =>
        timeUL.arrayData.slice(timeUL.startIndex, timeUL.endIndex + 1)
      ),

      scroll: (direction) => {
        if (direction === 1 && timeUL.endIndex < timeUL.arrayData.length - 1) {
          timeUL.startIndex += 6;
          timeUL.endIndex += 6;
        } else if (direction === -1 && timeUL.startIndex > 0) {
          timeUL.startIndex -= 6;
          timeUL.endIndex -= 6;
        }
      },
      // 点击事件处理函数
      handleItemClick(index) {
        timeUL.selectedIndex = index;
        if (index == 1) {
          let MonData = timeUL.filteredDataByDay("周一");
          timeUL.arrayData = MonData;
          // console.log(timeUL.displayedData)
        } else if (index == 2) {
          let TueData = timeUL.filteredDataByDay("周二");
          timeUL.arrayData = TueData;
        } else if (index == 3) {
          let WedData = timeUL.filteredDataByDay("周三");
          timeUL.arrayData = WedData;
        } else if (index == 4) {
          let ThuData = timeUL.filteredDataByDay("周四");
          timeUL.arrayData = ThuData;
        } else if (index == 5) {
          let FriData = timeUL.filteredDataByDay("周五");
          timeUL.arrayData = FriData;
        } else if (index == 6) {
          let SatData = timeUL.filteredDataByDay("周六");
          timeUL.arrayData = SatData;
        } else if (index == 7) {
          let SunData = timeUL.filteredDataByDay("周日");
          timeUL.arrayData = SunData;
        } else if (index == 0) {
          let lastUpdate = timeUL.filteredDataByDay(timeUL.today);
          timeUL.arrayData = lastUpdate;
        }
      },

      filteredDataByDay: (day) => {
        return mySub.filter((item) => item.updateDay === day);
      },
    });
    let testVideo = [
      {
        name: "视频名1",
      },
      {
        name: "视频名2",
      },
      {
        name: "视频名3",
      },
      {
        name: "视频名4",
      },
      {
        name: "视频名4-0",
      },
      {
        name: "视频名4-1",
      },
      {
        name: "视频名4-2",
      },
      {
        name: "视频名5",
      },
      {
        name: "视频名6",
      },
      {
        name: "视频名7",
      },
      {
        name: "视频名8",
      },
      {
        name: "视频名9",
      },
      {
        name: "视频名10",
      },
      {
        name: "视频名11",
      },
    ];
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

    onMounted(() => {
      timeUL.arrayData = mySub;
      timeUL.handleItemClick(0);

      // console.log(timeUL.arrayData,mySub,timeUL.displayedData)
    });

    onBeforeMount(() => {
      timeUL.today = getTime().weekDay_ZH;
    });

    return {
      goToPage,
      ...toRefs(skipFun),
      ...toRefs(timeUL),
      carouselRef,
      switchCarousel,
      style,
      startTime,
      hotSearch,
      mySub,
      CaretRight,
      StarFilled,
      testVideo,
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

.toBlue:hover {
  color: #409eff;
}

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
  top: 110px;
  left: -20px;
  cursor: pointer;
}

.right {
  left: 1580px;
  top: 110px;
  cursor: pointer;
}
.arrowFont {
  font-size: 40px;
  text-align: center;
  color: #79bbff;
}
</style>
