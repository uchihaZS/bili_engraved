<template>
  <div
    style="
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      justify-content: space-between;
      height: auto;
    "
  >
    <!-- 左边 -->
    <div style="width: 1380px">
      <!-- 排序栏 -->
      <div
        style="
          width: 384px;
          display: flex;
          justify-content: space-between;
          margin-left: 50px;
        "
      >
        <el-button text plain style="font-size: 18px" @click="fansort"
          >追番人数</el-button
        >
        <el-button text plain style="font-size: 18px" @click="scoresort"
          >最高评分</el-button
        >
        <el-button text plain style="font-size: 18px" @click="playnumsort"
          >播放数量</el-button
        >
        <el-button text plain style="font-size: 18px" @click="starttimesort"
          >开播时间</el-button
        >
      </div>
      <!-- 列表栏 -->
      <div v-if="textdata.length">
        <div style="margin-top: 15px; margin-left: 60px; width: 90%">
          <pic-and-text
            direction="col"
            totalHeight="365px"
            totalWidth="225px"
            borderRadius="10px"
            backgroundColor="#909399"
            picWidth="225px"
            picHeight="300px"
            rowadd="true"
            :text="textdata"
          ></pic-and-text>
        </div>
      </div>

      <!-- 翻页栏 -->
      <div></div>
    </div>
    <!-- 右边 -->
    <div>
      <p style="font-size: 20px; margin: 0px">筛选</p>
      <div
        style="
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          line-height: 40px;
          height: 600px;
          margin-top: 20px;
        "
      >
        <!-- 类型 -->
        <div class="tag" v-if="data.type.length">
          <span style="color: #a6a9ad">类型</span>
          <span
            class="toBlue"
            v-for="(i, index) in data.type"
            :key="index"
            style="margin-left: 10px"
            >{{ i }}</span
          >
        </div>
        <!-- 配音 -->
        <div v-if="data.voice.length" class="tag">
          <span style="color: #a6a9ad">配音</span>
          <span
            class="toBlue"
            v-for="(i, index) in data.voice"
            :key="index"
            style="margin-left: 10px"
            >{{ i }}</span
          >
        </div>
        <!-- 地区 -->
        <div class="tag">
          <span style="color: #a6a9ad">地区</span>
          <span
            class="toBlue"
            v-for="(i, index) in data.area"
            :key="index"
            style="margin-left: 10px"
            >{{ i }}</span
          >
        </div>
        <!-- 状态 -->
        <div v-if="data.state.length" class="tag">
          <span style="color: #a6a9ad">状态</span>
          <span
            class="toBlue"
            v-for="(i, index) in data.state"
            :key="index"
            style="margin-left: 10px"
            >{{ i }}</span
          >
        </div>
        <!-- 版权 -->
        <div v-if="data.copyright.length" class="tag">
          <span style="color: #a6a9ad">版权</span>
          <span
            class="toBlue"
            v-for="(i, index) in data.copyright"
            :key="index"
            style="margin-left: 10px"
            >{{ i }}</span
          >
        </div>
        <!-- 付费 -->
        <div class="tag">
          <span style="color: #a6a9ad">付费</span>
          <span
            class="toBlue"
            v-for="(i, index) in data.ispay"
            :key="index"
            style="margin-left: 10px"
            >{{ i }}</span
          >
        </div>
        <!-- 季度 -->
        <div v-if="data.season.length" class="tag">
          <span style="color: #a6a9ad">季度</span>
          <span
            class="toBlue"
            v-for="(i, index) in data.season"
            :key="index"
            style="margin-left: 10px"
            >{{ i }}</span
          >
        </div>
        <!-- 年份 -->
        <div class="tag">
          <div style="color: #a6a9ad; margin-right: 10px">年份</div>
          <div
            style="
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              width: 233px;
            "
          >
            <span
              class="toBlue"
              v-for="(i, index) in data.year"
              :key="index"
              style="margin: 0px 10px 10px 0px"
              >{{ i }}</span
            >
          </div>
        </div>
        <!-- 风格 -->
        <div class="tag">
          <div style="color: #a6a9ad; margin-right: 10px">风格</div>
          <div
            style="
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              width: 233px;
            "
          >
            <span
              class="toBlue"
              v-for="(i, index) in data.style"
              :key="index"
              style="margin: 0px 10px 10px 0px"
              >{{ i }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import PicAndText from "./PicAndText.vue";
export default {
  props: {
    data: Object,
  },
  components: { PicAndText },
  setup() {
    let animeSiftData = reactive({
      type: ["全部", "正片", "电影", "其他"],
      voice: ["全部", "原声", "中文配音"],
      area: ["全部", "日本", "美国", "其他"],
      state: ["全部", "完结", "连载"],
      copyright: ["全部", "独家", "其他"],
      ispay: ["全部", "免费", "付费", "大会员"],
      season: ["全部", "1月", "4月", "7月", "10月"],
      year: [
        "全部",
        "2023",
        "2022",
        "2021",
        "2020",
        "2019",
        "2018",
        "2017",
        "2016",
        "2015",
        "2014-2010",
        "2009-2005",
        "2004-2000",
        "90年代",
        "80年代",
        "更早",
      ],
      style: [
        "全部",
        "原创改",
        "漫画改",
        "小说改",
        "游戏改",
        "特摄",
        "布袋戏",
        "热血",
        "穿越",
        "奇幻",
        "战斗",
        "搞笑",
        "日常",
        "科幻",
        "萌系",
        "治愈",
        "校园",
        "子供向",
        "泡面",
        "恋爱",
        "魔法",
        "冒险",
        "历史",
        "架空",
      ],
      animedata: [
        {
          name: "番剧名1",
          fans: 100,
          playnum: 555,
          starttime: "2023-1-1",
          score: 10,
          isEnd: true,
          episode: 12,
        },
        {
          name: "番剧名2",
          fans: 11000,
          playnum: 595,
          score: 2,
          starttime: "2023-2-1",
          isEnd: true,
          episode: 24,
        },
        {
          name: "番剧名3",
          fans: 12000,
          playnum: 585,
          score: 1,
          starttime: "2023-3-1",
          isEnd: true,
          episode: 26,
        },
        {
          name: "番剧名4",
          fans: 2000,
          playnum: 545,
          score: 5,
          starttime: "2023-4-1",
          isEnd: false,
          episode: 2,
        },
        {
          name: "番剧名5",
          fans: 4000,
          playnum: 565,
          score: 4,
          starttime: "2023-5-1",
          isEnd: false,
          episode: 4,
        },
        {
          name: "番剧名6",
          fans: 7000,
          playnum: 155,
          starttime: "2023-6-1",
          isEnd: false,
          episode: 11,
        },
        {
          name: "番剧名7",
          fans: 8000,
          score: 8,
          playnum: 255,
          starttime: "2023-7-1",
          isEnd: true,
          episode: 36,
        },
        {
          name: "番剧名8",
          fans: 5000,
          playnum: 755,
          score: 5,
          starttime: "2023-8-1",
          isEnd: true,
          episode: 48,
        },
        {
          name: "番剧名9",
          fans: 2000,
          playnum: 455,
          score: 7,
          starttime: "2023-9-1",
          isEnd: true,
          episode: 64,
        },
        {
          name: "番剧名10",
          fans: 1070,
          playnum: 455,
          score: 10,
          starttime: "2023-10-1",
          isEnd: true,
          episode: 12,
        },
        {
          name: "番剧名11",
          fans: 1200,
          playnum: 355,
          score: 9,
          starttime: "2023-11-1",
          isEnd: true,
          episode: 12,
        },
        {
          name: "番剧名12",
          fans: 1800,
          playnum: 45,
          score: 6,
          starttime: "2023-12-1",
          isEnd: false,
          episode: 12,
        },
        {
          name: "番剧名13",
          fans: 100,
          playnum: 5255,
          score: 7,
          starttime: "2023-1-2",
          isEnd: true,
          episode: 12,
        },
        {
          name: "番剧名14",
          fans: 10,
          playnum: 5555,
          score: 8,
          starttime: "2023-1-3",
          isEnd: true,
          episode: 12,
        },
        {
          name: "番剧名15",
          fans: 1780,
          playnum: 5515,
          score: 9,
          starttime: "2023-2-4",
          isEnd: true,
          episode: 23,
        },
        {
          name: "番剧名16",
          fans: 1500,
          playnum: 5525,
          score: 0,
          starttime: "2023-3-5",
          isEnd: true,
          episode: 11,
        },
        {
          name: "番剧名17",
          fans: 1020,
          playnum: 5535,
          score: 3,
          starttime: "2023-4-6",
          isEnd: true,
          episode: 10,
        },
        {
          name: "番剧名18",
          fans: 1050,
          playnum: 5455,
          score: 9,
          starttime: "2023-7-9",
          isEnd: false,
          episode: 112,
        },
        {
          name: "番剧名19",
          fans: 1030,
          playnum: 5545,
          score: 10,
          starttime: "2023-8-4",
          isEnd: true,
          episode: 120,
        },
        {
          name: "番剧名20",
          fans: 10740,
          playnum: 5535,
          score: 10,
          starttime: "2023-2-28",
          isEnd: false,
          episode: 54,
        },
      ],
      fansType: 0,
      scoreType: 0,
      playnumType: 0,
      starttimeType: 0,
      arrType: 1,
    });

    // 根据元素排序
    function sortByProp(arr, prop) {
      const ascArr = [...arr].sort((a, b) => a[prop] - b[prop]);
      const descArr = [...arr].sort((a, b) => b[prop] - a[prop]);
      return { ascArr, descArr };
    }

    var fansResult = sortByProp(animeSiftData.animedata, "fans");
    var fansTobig = fansResult.ascArr;
    var fansTosmall = fansResult.descArr;
    function fansort() {
      animeSiftData.arrType = 1;
      animeSiftData.fansType++;
      getOnlyText.check();
      console.log(animeSiftData.arrType, "fansType:" + animeSiftData.fansType);
    }
    var playnumResult = sortByProp(animeSiftData.animedata, "playnum");
    var playnumTobig = playnumResult.ascArr;
    var playnumTosmall = playnumResult.descArr;
    function playnumsort() {
      animeSiftData.arrType = 3;
      animeSiftData.playnumType++;
      getOnlyText.check();
      console.log(
        animeSiftData.arrType,
        "playnumType:" + animeSiftData.playnumType
      );
    }
    var starttimeResult = sortByProp(animeSiftData.animedata, "starttime");
    var starttimeTobig = starttimeResult.ascArr;
    var starttimeTosmall = starttimeResult.descArr;
    function starttimesort() {
      animeSiftData.arrType = 4;
      animeSiftData.starttimeType++;
      getOnlyText.check();
      console.log(
        animeSiftData.arrType,
        "starttimeType:" + animeSiftData.starttimeType
      );
    }
    var scoreResult = sortByProp(animeSiftData.animedata, "score");
    var scoreTobig = scoreResult.ascArr;
    var scoreTosmall = scoreResult.descArr;
    function scoresort() {
      animeSiftData.arrType = 2;
      animeSiftData.scoreType++;
      getOnlyText.check();
      console.log(
        animeSiftData.arrType,
        "scoreType:" + animeSiftData.scoreType
      );
    }
    let getOnlyText = reactive({
      check() {
        // 元素名更换和判断
        if (animeSiftData.arrType == 1) {
          // 追番人数排序
          if (animeSiftData.fansType % 2 != 0) {
            onlytext.textdata = fansTobig.map(
              ({ name: rowOne, episode, isEnd }) => {
                let textTwo;
                if (episode === undefined || episode === null) {
                  textTwo = "敬请期待";
                } else if (isEnd) {
                  textTwo = `全${episode}话`;
                } else {
                  textTwo = `更新到第${episode}话`;
                }
                return { rowOne, textTwo };
              }
            );
          } else if (animeSiftData.fansType % 2 == 0) {
            onlytext.textdata = fansTosmall.map(
              ({ name: rowOne, episode, isEnd }) => {
                let textTwo;
                if (episode === undefined || episode === null) {
                  textTwo = "敬请期待";
                } else if (isEnd) {
                  textTwo = `全${episode}话`;
                } else {
                  textTwo = `更新到第${episode}话`;
                }
                return { rowOne, textTwo };
              }
            );
          }
        } else if (animeSiftData.arrType == 2) {
          // 评分人数排序
          if (animeSiftData.scoreType % 2 != 0) {
            onlytext.textdata = scoreTobig.map(
              ({ name: rowOne, episode, isEnd }) => {
                let textTwo;
                if (episode === undefined || episode === null) {
                  textTwo = "敬请期待";
                } else if (isEnd) {
                  textTwo = `全${episode}话`;
                } else {
                  textTwo = `更新到第${episode}话`;
                }
                return { rowOne, textTwo };
              }
            );
          } else if (animeSiftData.scoreType % 2 == 0) {
            onlytext.textdata = scoreTosmall.map(
              ({ name: rowOne, episode, isEnd }) => {
                let textTwo;
                if (episode === undefined || episode === null) {
                  textTwo = "敬请期待";
                } else if (isEnd) {
                  textTwo = `全${episode}话`;
                } else {
                  textTwo = `更新到第${episode}话`;
                }
                return { rowOne, textTwo };
              }
            );
          }
        } else if (animeSiftData.arrType == 3) {
          // 播放人数排序
          if (animeSiftData.playnumType % 2 != 0) {
            onlytext.textdata = playnumTobig.map(
              ({ name: rowOne, episode, isEnd }) => {
                let textTwo;
                if (episode === undefined || episode === null) {
                  textTwo = "敬请期待";
                } else if (isEnd) {
                  textTwo = `全${episode}话`;
                } else {
                  textTwo = `更新到第${episode}话`;
                }
                return { rowOne, textTwo };
              }
            );
          } else if (animeSiftData.playnumType % 2 == 0) {
            onlytext.textdata = playnumTosmall.map(
              ({ name: rowOne, episode, isEnd }) => {
                let textTwo;
                if (episode === undefined || episode === null) {
                  textTwo = "敬请期待";
                } else if (isEnd) {
                  textTwo = `全${episode}话`;
                } else {
                  textTwo = `更新到第${episode}话`;
                }
                return { rowOne, textTwo };
              }
            );
          }
        } else if (animeSiftData.arrType == 4) {
          // 开播时间排序
          if (animeSiftData.starttimeType % 2 != 0) {
            onlytext.textdata = starttimeTobig.map(
              ({ name: rowOne, episode, isEnd }) => {
                let textTwo;
                if (episode === undefined || episode === null) {
                  textTwo = "敬请期待";
                } else if (isEnd) {
                  textTwo = `全${episode}话`;
                } else {
                  textTwo = `更新到第${episode}话`;
                }
                return { rowOne, textTwo };
              }
            );
          } else if (animeSiftData.starttimeType % 2 == 0) {
            onlytext.textdata = starttimeTosmall.map(
              ({ name: rowOne, episode, isEnd }) => {
                let textTwo;
                if (episode === undefined || episode === null) {
                  textTwo = "敬请期待";
                } else if (isEnd) {
                  textTwo = `全${episode}话`;
                } else {
                  textTwo = `更新到第${episode}话`;
                }
                return { rowOne, textTwo };
              }
            );
          }
        }
        console.log(onlytext.textdata);
      },
    });
    let onlytext = reactive({
      textdata: [],
    });
    onMounted(() => {
      fansort();
      console.log("mounted");
      // console.log(onlytext.textdata);
    });

    return {
      sortByProp,
      fansTobig,
      fansTosmall,
      playnumTobig,
      playnumTosmall,
      starttimeTobig,
      starttimeTosmall,
      scoreTobig,
      scoreTosmall,
      fansort,
      playnumsort,
      starttimesort,
      scoresort,
      ...toRefs(getOnlyText),
      ...toRefs(onlytext),
      ...toRefs(animeSiftData),
    };
  },
};
</script>

<style lang="less" scoped>
.tag {
  width: 275px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.toBlue:hover {
  color: #409eff;
}
</style>