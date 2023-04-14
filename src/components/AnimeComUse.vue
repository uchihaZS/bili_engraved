<template>
  <div style="padding: 0px 300px">
    <!-- 标签栏 -->
    <div>
      <p style="font-size: 20px">热门标签</p>
      <div style="display: flex; width: 400px; justify-content: space-between">
        <el-button round size="small" plain v-for="i in 6" :key="i"
          >标签{{ i }}</el-button
        >
      </div>
    </div>
    <div
      style="display: flex; margin-top: 30px; justify-content: space-between"
    >
      <div style="display: flex; flex-direction: column; width: 815px">
        <!-- 动态栏 -->
        <div style="width: 100%">
          <div
            style="
              display: flex;
              justify-content: space-between;
              width: 100%;
              align-items: center;
            "
          >
            <p style="font-size: 20px">最新动态</p>
            <el-button>换一换</el-button>
          </div>
          <div style="width: 100%; height: 200px; display: flex">
            <pic-and-text
              direction="col"
              totalHeight="150px"
              totalWidth="150px"
              borderRadius="10px"
              backgroundColor="#909399"
              picWidth="100%"
              picHeight="140px"
              style="width: 100%"
              :text="textArray"
            ></pic-and-text>
          </div>
        </div>
        <!-- 视频列表 -->
        <div style="width: 100%; margin-top: 20px">
          <!-- 顶栏 -->
          <div
            style="display: flex; width: 100%; justify-content: space-between"
          >
            <!-- 排序 -->
            <div
              style="
                display: flex;
                width: 227px;
                align-items: center;
                justify-content: space-between;
              "
            >
              <span :style="{ color: colorA }" @click="changeSort('A')"
                >投稿时间排序</span
              >
              <span :style="{ color: colorB }" @click="changeSort('B')"
                >视频热度排序</span
              >
            </div>
            <!-- 选择器 -->
            <div
              v-show="ishotsoft == true"
              style="
                display: flex;
                width: 284px;
                justify-content: space-evenly;
                align-items: center;
              "
            >
              <el-select v-model="selectValue" size="small" style="width: 80px">
                <el-option label="播放数" value="播放数" />
                <el-option label="弹幕数" value="弹幕数" />
                <el-option label="收藏数" value="收藏数" />
                <el-option label="投币数" value="投币数" />
                <el-option label="评论数" value="评论数" />
              </el-select>
              <el-date-picker
                v-model="dateValue"
                type="daterange"
                range-separator="To"
                start-placeholder="Start date"
                end-placeholder="End date"
                size="small"
                style="width: 200px; margin-left: 10px"
              />
            </div>
            <div style="display: flex; width: 262px; align-items: center">
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  margin-right: 10px;
                  width: 80px;
                "
              >
                <span :style="{ color: colorC }" @click="changeOri('C')"
                  >全部</span
                >
                <span :style="{ color: colorD }" @click="changeOri('D')"
                  >原创</span
                >
              </div>
              <div style="color: #909399">|</div>
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  width: 158px;
                  margin-left: 10px;
                "
              >
                <span :style="{ color: colorE }" @click="changeTable('E')"
                  >列表</span
                >
                <span :style="{ color: colorF }" @click="changeTable('F')"
                  >方格</span
                >
                <span :style="{ color: colorG }" @click="changeTable('G')"
                  >密集</span
                >
              </div>
            </div>
          </div>
          <el-divider style="margin: 10px 0px"></el-divider>
          <!-- 列表模式 -->
          <div v-show="tableType == 1">
            <div
              style="display: flex; margin-bottom: 15px; height: 150px"
              v-for="i in data"
              :key="i"
            >
              <div
                style="
                  width: 200px;
                  height: 140px;
                  border-radius: 5px;
                  background-color: #909399;
                "
              ></div>
              <div
                style="
                  margin-left: 10px;
                  border-bottom: 1px solid #e5eaf3;
                  width: 605px;
                "
              >
                <div style="display: flex; justify-content: space-between">
                  <span>{{ i.name }}</span>
                  <span style="color: #909399; font-size: 14px">{{
                    i.author
                  }}</span>
                </div>
                <div style="color: #909399; margin-top: 20px">
                  #{{ i.episode }}
                </div>
                <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    width: 150px;
                    color: #909399;
                    font-size: 14px;
                    margin-top: 55px;
                  "
                >
                  <span>{{ i.plays }}播放</span>
                  <span>{{ i.danmus }}弹幕</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 方格模式 -->
          <div
            v-show="tableType == 2"
            style="display: flex; flex-wrap: wrap; flex-direction: row"
          >
            <div
              style="
                display: flex;
                margin: 0px 0px 20px 10px;
                height: 150px;
                border: 1px solid #cfd3dc;
                border-radius: 10px;
                box-shadow: var(--el-box-shadow-lighter);
                width: 370px;
                padding: 10px 10px;
              "
              v-for="i in data"
              :key="i"
            >
              <div
                style="
                  width: 200px;
                  height: 140px;
                  border-radius: 5px;
                  background-color: #909399;
                "
              ></div>
              <div
                style="
                  margin-left: 10px;

                  width: 255px;
                "
              >
                <div style="display: flex; justify-content: space-between">
                  <span>{{ i.name }}</span>
                </div>
                <div style="color: #909399; margin-top: 20px">
                  #{{ i.episode }}
                </div>
                <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    width: 200px;
                    color: #909399;
                    font-size: 14px;
                    margin-top: 55px;
                  "
                >
                  <span style="color: #909399; font-size: 14px">{{
                    i.author
                  }}</span>
                  <span>{{ i.plays }}播放</span>
                  <span>{{ i.danmus }}弹幕</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 密集模式 -->
          <div
            v-show="tableType == 3"
            style="
              display: flex;
              flex-wrap: wrap;
              flex-direction: row;
              justify-content: space-between;
            "
          >
            <div
              style="
                display: flex;
                flex-direction: column;
                height: 200px;
                border: 1px solid #cfd3dc;
                border-radius: 10px;
                box-shadow: var(--el-box-shadow-lighter);
                width: 150px;
                justify-content: space-between;
                margin-bottom: 15px;
              "
              v-for="i in data"
              :key="i"
            >
              <div
                style="
                  width: 100%;
                  height: 140px;
                  border-top-left-radius: 5px;
                  border-top-right-radius: 5px;
                  border-bottom-right-radius: 0px;
                  border-bottom-left-radius: 0px;
                  background-color: #909399;
                "
              ></div>
              <div style="width: 100%">
                <div style="display: flex; margin: 10px 10px">
                  <span>{{ i.name }}</span>
                  <span style="color: #909399; margin-left: 10px"
                    >#{{ i.episode }}</span
                  >
                </div>

                <div
                  style="
                    display: flex;
                    justify-content: flex-start;
                    width: 100%;
                    color: #909399;
                    font-size: 14px;
                    margin: 0px 10px;
                  "
                >
                  <span>{{ i.plays }}播放</span>
                  <span style="margin-left: 10px">{{ i.danmus }}弹幕</span>
                </div>
                <div style="color: #909399; font-size: 14px; margin: 5px 10px">
                  {{ i.author }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 热门列表 -->
      <div style="width: 250px" v-show="hotdisplay == true">
        <p style="font-size: 20px">热门</p>
        <div>
          <div v-for="i in 10" :key="i">
            <!-- 前三个 -->
            <div v-if="i <= 3" style="display: flex; margin-bottom: 15px">
              <!-- 左边序号 -->
              <div
                style="
                  width: 25px;
                  height: 25px;
                  background-color: #f78989;
                  color: white;
                  border-radius: 5px;
                  text-align: center;
                "
              >
                {{ i }}
              </div>
              <!-- 右边图文 -->
              <div style="display: flex; margin-left: 10px">
                <div
                  style="
                    width: 100px;
                    height: 80px;
                    border-radius: 5px;
                    background-color: #909399;
                  "
                ></div>
                <div style="margin-left: 10px">番剧名{{ i }}</div>
              </div>
            </div>
            <!-- 后七个 -->
            <div v-else style="display: flex; margin-bottom: 15px">
              <!-- 左边序号 -->
              <div
                style="
                  width: 25px;
                  height: 25px;
                  background-color: #909399;
                  color: white;
                  border-radius: 5px;
                  text-align: center;
                "
              >
                {{ i }}
              </div>
              <!-- 右边文字 -->
              <div style="margin-left: 10px">番剧名{{ i }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import PicAndText from "@/components/PicAndText.vue";
export default {
  components: { PicAndText },
  setup() {
    let textArray = [
      { rowOne: { p1: "播放数", p2: "弹幕数" } },
      { rowOne: { p1: "播放数", p2: "弹幕数" } },
      { rowOne: { p1: "播放数", p2: "弹幕数" } },
      { rowOne: { p1: "播放数", p2: "弹幕数" } },
      { rowOne: { p1: "播放数", p2: "弹幕数" } },
    ];

    let videoData = reactive({
      data: [
        {
          name: "番剧名1",
          episode: "2",
          author: "pilipili",
          plays: 153,
          danmus: 487,
        },
        {
          name: "番剧名2",
          episode: "26",
          author: "pilipili",
          plays: 543,
          danmus: 87,
        },
        {
          name: "番剧名3",
          episode: "25",
          author: "pilipili",
          plays: 6757,
          danmus: 5435,
        },
        {
          name: "番剧名4",
          episode: "12",
          author: "pilipili出差",
          plays: 13,
          danmus: 24,
        },
        {
          name: "番剧名5",
          episode: "209",
          author: "pilipili",
          plays: 435,
          danmus: 89,
        },
        {
          name: "番剧名6",
          episode: "22",
          author: "pilipili出差",
          plays: 768,
          danmus: 43,
        },
        {
          name: "番剧名7",
          episode: "21",
          author: "pilipili",
          plays: 5435,
          danmus: 7666,
        },
        {
          name: "番剧名8",
          episode: "23",
          author: "pilipili",
          plays: 12333,
          danmus: 4244,
        },
        {
          name: "番剧名9",
          episode: "12",
          author: "pilipili出差",
          plays: 1543,
          danmus: 435,
        },
        {
          name: "番剧名10",
          episode: "3",
          author: "pilipili出差",
          plays: 19983,
          danmus: 543,
        },
      ],
      tableType: 1,
      hotdisplay: true,
      selectValue: "播放数",
      dateValue: "",
      ishotsoft: false,
      colorA: "#409eff",
      colorB: "black",
      colorC: "#409eff",
      colorD: "black",
      colorE: "#409eff",
      colorF: "black",
      colorG: "black",

      changeSort(element) {
        videoData.colorA = element === "A" ? "#409eff" : "black";
        videoData.ishotsoft = element === "A" ? false : true;
        videoData.ishotsoft = element === "B" ? true : false;
        videoData.colorB = element === "B" ? "#409eff" : "black";
      },
      changeOri(element) {
        videoData.colorC = element === "C" ? "#409eff" : "black";
        videoData.hotdisplay = element === "C" ? true : false;
        videoData.hotdisplay = element === "D" ? false : true;
        videoData.colorD = element === "D" ? "#409eff" : "black";
      },
      changeTable(element) {
        if (element === "E") {
          videoData.colorE = "#409eff";
          videoData.colorF = "black";
          videoData.colorG = "black";
          videoData.tableType = 1;
        } else if (element === "F") {
          videoData.colorE = "black";
          videoData.colorF = "#409eff";
          videoData.colorG = "black";
          videoData.tableType = 2;
        } else if (element === "G") {
          videoData.colorE = "black";
          videoData.colorF = "black";
          videoData.colorG = "#409eff";
          videoData.tableType = 3;
        }
      },
    });

    return {
      textArray,
      ...toRefs(videoData),
    };
  },
};
</script>

<style lang="less" scoped>
</style>