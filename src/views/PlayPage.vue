<template>
  <div>
    <el-container>
      <el-header>
        <!-- 顶部菜单栏 -->
        <header-nav></header-nav>
      </el-header>
      <el-main class="el-main">
        <div class="row">
          <el-row style="width: 100%">
            <el-col :span="2">
              <div
                style="background-color: green; width: 100%; height: 100%"
              ></div>
            </el-col>
            <!-- 中心内容 -->
            <el-col :span="20" style="background-color: white">
              <div style="display: flex; flex-direction: row">
                <!-- 左边 -->
                <div style="display: flex; flex-direction: column; width: auto">
                  <!-- 标题栏 -->
                  <h1 style="margin-top: 0px">标题</h1>
                  <div style="color: #9499a0; margin-bottom: 30px">
                    <span>播放 {{ playback }}</span>
                    <span style="margin-left: 10px">弹幕 {{ danmu }}</span>
                    <span style="margin-left: 10px">时间 {{ times }}</span>
                  </div>
                  <!-- 播放区域 -->
                  <div style="width: 1165px; height: auto">
                    <el-card
                      style="width: 100%; height: auto; padding: 0px"
                      :body-style="{ padding: '0px' }"
                    >
                      <!-- 播放器 -->
                      <Artplayer
                        style="width: 1170px; height: 660px"
                        :option="player"
                      />

                      <div
                        style="
                          width: 1165px;
                          height: 55px;
                          background-color: white;
                          display: flex;
                          flex-flow: row nowrap;
                          align-items: center;
                          justify-content: flex-start;
                        "
                      >
                        <span style="margin-left: 10px; width: 300px"
                          >114人正在观看，已装填{{ danmuLen }}条弹幕</span
                        >
                        <span>
                          <el-input
                            v-model="sendDanmu"
                            placeholder="发个友善的弹幕见证当下"
                            class="input-with-select"
                          >
                            <template #append>
                              <el-button type="primary" @click="send"
                                >发送</el-button
                              >
                            </template>
                          </el-input>
                        </span>
                      </div>
                    </el-card>
                  </div>
                  <!-- 一键三连 -->
                  <div
                    style="
                      width: 100%;
                      height: 30px;
                      background-color: white;
                      display: flex;
                      margin-top: 15px;
                      display: flex;
                      flex-direction: row;
                      flex-wrap: nowrap;
                      justify-content: space-between;
                    "
                  >
                    <div>
                      <el-button type="primary" text bg size="large"
                        >点赞 5432</el-button
                      >
                      <el-button type="primary" text bg size="large"
                        >投币 5463</el-button
                      >
                      <el-button type="primary" text bg size="large"
                        >收藏 285</el-button
                      >
                      <el-button type="primary" text bg size="large"
                        >分享 876</el-button
                      >
                    </div>
                    <el-button type="danger" text bg size="large"
                      >稿件投诉</el-button
                    >
                  </div>
                  <el-divider />
                  <!-- 视频简介 -->
                  <div>
                    <!-- 文字描述 -->
                    <div>
                      <p>
                        月族各位兄弟姐妹的点滴支持，我们制作组一一尽记心上。
                      </p>
                      <p>《残響散歌》真.完整粤语版，无限升级，终极呈现！</p>
                      <p>
                        这一场华丽的声画盛宴，全为了答谢大家一直以来的支持。
                      </p>
                      <p>你们喜欢，就是我们最大的创作动力。</p>
                    </div>
                    <!-- tag -->
                    <div style="display">
                      <el-button
                        type="info"
                        size="default"
                        round
                        color="#CFD3DC"
                        >残響散歌</el-button
                      >
                      <el-button
                        type="info"
                        color="#CFD3DC"
                        size="default"
                        round
                        style="margin-left: 10px"
                        >Aimer</el-button
                      >
                      <el-button
                        type="info"
                        color="#CFD3DC"
                        size="default"
                        round
                        style="margin-left: 10px"
                        >粤语</el-button
                      >
                      <el-button
                        color="#CFD3DC"
                        type="info"
                        size="default"
                        round
                        style="margin-left: 10px"
                        >鬼灭之刃</el-button
                      >
                      <el-button
                        color="#CFD3DC"
                        type="info"
                        size="default"
                        round
                        style="margin-left: 10px"
                        >翻唱</el-button
                      >
                      <el-button
                        color="#CFD3DC"
                        type="info"
                        size="default"
                        round
                        style="margin-left: 10px"
                        >音乐</el-button
                      >
                    </div>
                  </div>
                  <el-divider />
                  <!-- 评论区 -->
                  <div style="height: auto; width: 100%">
                    <div style="display: flex">
                      <span>
                        <h3>评论 114</h3>
                      </span>
                      <span
                        style="
                          display: flex;
                          font-size: 20px;
                          align-items: center;
                          justify-content: flex-start;
                          flex-wrap: nowrap;
                          flex-direction: row;
                        "
                      >
                        <el-button
                          type="primary"
                          size="large"
                          text
                          style="font-size: 20px"
                          >最热</el-button
                        >
                        <p>|</p>
                        <el-button
                          type="primary"
                          size="large"
                          text
                          style="font-size: 20px"
                          >最新</el-button
                        >
                      </span>
                    </div>
                    <!-- 发评论 -->
                    <div
                      style="
                        display: flex;
                        flex-direction: row;
                        flex-wrap: nowrap;
                        align-items: center;
                      "
                    >
                      <el-avatar size="large" :src="circleUrl" />
                      <input
                        type="text"
                        placeholder="发一条友善的评论"
                        v-model="pinglun"
                        style="
                          height: 50px;
                          width: 1010px;
                          margin-left: 20px;
                          border-radius: 10px;
                          border: 1px solid #c9ccd0;
                        "
                      />
                      <el-button
                        @click="sendPinglun"
                        type="primary"
                        size="large"
                        color=" #66b1ff"
                        style="
                          height: 50px;
                          width: 60px;
                          margin-left: 10px;
                          color: white;
                          font-size: 18px;
                        "
                        >发布</el-button
                      >
                    </div>
                    <!-- 评论内容 -->
                    <div style="width: 100%; height: auto; margin-top: 30px">
                      <div
                        v-for="(item, index) in commentData"
                        :key="index"
                        style="display: flex; flex-direction: column"
                      >
                        <!-- 头像和用户名 -->
                        <div
                          style="
                            display: flex;
                            flex-direction: row;
                            align-items: flex-end;
                            flex-wrap: nowrap;
                            justify-content: flex-start;
                          "
                        >
                          <el-avatar :size="50" :src="circleUrl" />
                          <p style="margin-left: 15px; font-size: 18px">
                            {{ item.username }}
                          </p>
                        </div>
                        <!-- 内容 -->
                        <div
                          style="
                            display: flex;
                            flex-direction: column;
                            margin-left: 50px;
                          "
                        >
                          <p style="font-size: 20px">{{ item.content }}</p>
                          <!-- 时间和点赞 -->
                          <div style="display: flex; flex-direction: row">
                            <p>时间:{{ item.time }}</p>
                            <p style="margin-left: 10px">
                              点赞:{{ item.goods }}
                            </p>
                          </div>
                          <!-- 他人回复 -->
                          <div v-if="item.answer != null">
                            <div
                              v-for="i in item.answer"
                              :key="i"
                              style="
                                display: flex;
                                flex-direction: column;
                                line-height: 0px;
                              "
                            >
                              <!-- 回复的头像和用户名 -->
                              <div
                                style="
                                  display: flex;
                                  flex-direction: row;
                                  align-items: center;
                                "
                              >
                                <el-avatar :size="35" :src="circleUrl" />
                                <p style="margin-left: 15px; font-size: 15px">
                                  {{ i.username }}
                                </p>
                                <!-- 回复内容 -->
                                <p style="margin-left: 15px; font-size: 18px">
                                  {{ i.content }}
                                </p>
                              </div>

                              <div
                                style="
                                  display: flex;
                                  flex-direction: column;
                                  margin-left: 50px;
                                "
                              >
                                <!-- 回复时间和点赞 -->
                                <div style="display: flex; flex-direction: row">
                                  <p>时间:{{ i.time }}</p>
                                  <p style="margin-left: 10px">
                                    点赞:{{ i.goods }}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <el-divider />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 右边-->
                <div
                  style="
                    position: relative;
                    left: 30px;
                    background-color: red;
                    width: 100%;
                  "
                >
                  <!-- 头像信息 -->
                  <div style="display: flex; width: 100%">
                    <el-avatar shape="square" :size="90" :src="squareUrl" />
                    <div
                      style="
                        width: 100%;
                        line-height: 7px;
                        margin-left: 10px;
                        margin-top: -10px;
                      "
                    >
                      <p style="font-size: 20px; font-weight: bold">作者名</p>
                      <p>介绍.................</p>
                      <el-button type="primary" style="width: 70%"
                        >+关注 2887</el-button
                      >
                    </div>
                  </div>
                  <!-- 弹幕列表 -->
                  <div
                    style="
                      width: 100%;
                      margin-top: 10px;
                      max-height: 720px;
                      min-height: 40px;
                    "
                  >
                    <el-button
                      type="info"
                      @click="changeBtn"
                      size="large"
                      color="#CFD3DC"
                      style="width: 100%"
                      >弹幕列表</el-button
                    >
                    <!-- 列表 -->
                    <div v-show="showList == 1" style="width: auto">
                      <el-table
                        :data="danmukuLB"
                        style="width: 100%"
                        max-height="680px"
                      >
                        <el-table-column
                          prop="time"
                          label="发送时间"
                          width="100"
                        />
                        <el-table-column prop="text" label="内容" width="150" />
                        <el-table-column prop="date" label="日期" width="110" />
                      </el-table>
                    </div>
                  </div>
                  <!-- 推荐视频列表 -->
                  <div
                    style="
                      width: 100%;
                      display: flex;
                      flex-direction: column;
                      margin-top: 10px;
                    "
                  >
                    <div
                      v-for="(item, index) in tuijianData"
                      :key="index"
                      style="
                        display: flex;
                        flex-direction: row;
                        flex-wrap: nowrap;
                        justify-content: flex-start;
                        align-items: flex-end;
                        margin-top: 10px;
                      "
                    >
                      <!-- 封面 -->
                      <div
                        style="
                          background-color: #909399;
                          width: 45%;
                          height: 100px;
                          border-radius: 15px;
                        "
                      >
                        封面
                      </div>
                      <!-- 推荐文字 -->
                      <div style="margin-left: 10px">
                        <p>标题{{ item.name }}</p>
                        <p>作者{{ item.author }}</p>
                        <span>播放量{{ item.plays }}</span>
                        <span style="margin-left: 10px"
                          >弹幕{{ item.danmus }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>

            <el-col :span="2">
              <div
                style="background-color: green; width: 100%; height: 100%"
              ></div
            ></el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { reactive, toRefs, watch, onBeforeMount, onMounted } from "vue";
import HeaderNav from "../components/HeaderNav.vue";
import { ElMessage } from "element-plus";
import Artplayer from "../components/Artplayer.vue";
import artplayerPluginDanmuku from "artplayer-plugin-danmuku";

export default {
  components: { HeaderNav, Artplayer },
  setup() {
    // 标题栏
    let titlebar = reactive({
      playback: 114514,
      danmu: 1919,
      times: "114-5-14  19:19:08",
    });
    // 头像
    let avatar = reactive({
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    });
    // 弹幕
    // let x = reactive({
    //   player: {
    //     container: ".artplayer-app",
    //     url: "/assets/sample/video.mp4",
    //     plugins: [
    //       artplayerPluginDanmuku({
    //         danmuku: "/assets/sample/danmuku.xml",
    //       }),
    //     ],
    //     controls: [
    //       {
    //         position: "right",
    //         html: "发送弹幕",
    //         click: function () {
    //           var text = prompt("请输入弹幕文本", "弹幕测试文本");
    //           if (!text || !text.trim()) return;
    //           var color =
    //             "#" + Math.floor(Math.random() * 0xffffff).toString(16);
    //           var art = new Artplayer(x.player);
    //           art.plugins.artplayerPluginDanmuku.emit({
    //             text: text,
    //             color: color,
    //             border: true,
    //           });
    //         },
    //       },
    //     ],
    //   },
    // });

    // var art = new Artplayer(x.player);
    //播放器
    let videoOption = reactive({
      // 必须要用player作为对象推送
      player: {
        container: "width: 1170px;height: 660px;",
        url: "/cx.mp4", //视频源https://artplayer.org/assets/sample/video.mp4
        theme: "#23ade5",
        autoplay: true,
        fullscreen: true, //全屏
        fullscreenWeb: true, //网页全屏
        lang: "zh-cn",
        pip: true, //画中画
        autoSize: true,
        autoMini: true,
        isLive: false, //直播模式
        muted: false, //静音
        setting: true,
        loop: false, //循环播放
        flip: true, //视频镜像
        playbackRate: true, //倍速
        aspectRatio: true, //长宽比
        //时间线点位
        highlight: [
          {
            time: 22,
            text: "开头logo",
          },
          {
            time: 43,
            text: "千倍奉还",
          },
          {
            time: 50,
            text: "第一段高潮",
          },
          {
            time: 89,
            text: "第二段主歌",
          },
          {
            time: 133,
            text: "副歌",
          },
          {
            time: 172,
            text: "结束",
          },
        ],
        //hover缩略图
        thumbnails: {
          url: "/cxthum.png",
          number: 160, // 数量
          width: 160, // 宽度
          column: 10,
        },
        // 弹幕数组(视频用)
        danmukuList: [
          // {
          //   text: "111", // 弹幕文本
          //   time: 1, // 发送时间，单位秒
          //   color: "#fff", // 弹幕局部颜色
          //   border: false, // 是否显示描边
          //   mode: 0, // 弹幕模式: 0表示滚动, 1静止
          // },
        ],
        // 插件
        plugins: [
          // 弹幕库
          artplayerPluginDanmuku({
            // 弹幕数组
            danmuku: () => videoOption.player.danmukuList,
            speed: 7, // 弹幕持续时间，单位秒，范围在[1 ~ 10]
            opacity: 1, // 弹幕透明度，范围在[0 ~ 1]
            fontSize: 25, // 字体大小，支持数字和百分比
            color: "#FFFFFF", // 默认字体颜色
            mode: 0, // 默认模式，0-滚动，1-静止
            margin: [10, "25%"], // 弹幕上下边距，支持数字和百分比
            antiOverlap: true, // 是否防重叠
            useWorker: true, // 是否使用 web worker
            synchronousPlayback: false, // 是否同步到播放速度
            lockTime: 5, // 输入框锁定时间，单位秒，范围在[1 ~ 60]
            maxLength: 100, // 输入框最大可输入的字数，范围在[0 ~ 500]
            minWidth: 200, // 输入框最小宽度，范围在[0 ~ 500]，填 0 则为无限制
            maxWidth: 400, // 输入框最大宽度，范围在[0 ~ Infinity]，填 0 则为 100% 宽度
            theme: "dark",
          }),
        ],
        // 发送弹幕
        controls: [
          {
            position: "right",
            html: "发送弹幕",
            click: function () {
              var text = prompt("请输入弹幕文本", "弹幕测试文本");
              if (!text || !text.trim()) return;
              var color =
                "#" + Math.floor(Math.random() * 0xffffff).toString(16);
              // var art = new Artplayer(videoOption.player);
              videoOption.player.plugins.artplayerPluginDanmuku.emit({
                text: text,
                color: color,
                border: true,
              });
              videoOption.player.danmukuList.push({
                text: text,
                color: color,
                time:'test',
                mode:0,
                border: false,
              })
            },
          },
        ],
      },
    });

    let danmuLiebiao = reactive({
      // 弹幕数组(列表用)
      danmukuLB: [],
      // 以下两个是控制弹幕列表显示
      state: false,
      showList: 2, //当为1时才显示,默认为关
      // 是否显示弹幕列表
      changeBtn() {
        danmuLiebiao.showList = danmuLiebiao.state == false ? "1" : "2";
        danmuLiebiao.state = !danmuLiebiao.state;
        console.log("aaa");
      },
    });
    //推荐视频列表
    let tuijian = reactive({
      // 推荐视频数据
      tuijianData: [
        {
          name: "a",
          author: "aa",
          plays: 1,
          danmus: 1,
        },
        {
          name: "b",
          author: "bb",
          plays: 2,
          danmus: 2,
        },
        {
          name: "c",
          author: "cc",
          plays: 3,
          danmus: 3,
        },
        {
          name: "d",
          author: "dd",
          plays: 4,
          danmus: 4,
        },
        {
          name: "e",
          author: "ee",
          plays: 5,
          danmus: 5,
        },
        {
          name: "f",
          author: "ff",
          plays: 6,
          danmus: 6,
        },
        {
          name: "g",
          author: "gg",
          plays: 7,
          danmus: 7,
        },
      ],
    });
    // 评论区
    let comment = reactive({
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      pinglun: "",
      // 添加评论
      sendPinglun() {
        let addCom = {
          username: "tester",
          content:'',
          time: "xxxx-xx-xx 4:04:00",
          goods: "xxx",
        };
        addCom.content = comment.pinglun;
        comment.commentData.push(addCom);
      },

      commentData: [
        {
          username: "一",
          content: "123456789",
          time: "20xx-12-11 20:08",
          goods: 514,
          answer: [
            {
              username: "哈哈",
              content: "b回复a",
              time: "20xx-10-01 10:48",
              goods: 114,
            },
            {
              username: "老六",
              content: "z回复a",
              time: "20xx-10-01 10:48",
              goods: 10,
            },
          ],
        },
        {
          username: "二",
          content: "qwer",
          time: "20xx-04-01 17:08",
          goods: 1919,
          answer: [
            {
              username: "嘿嘿",
              content: "ggg回复c",
              time: "20xx-10-01 10:48",
              goods: 4,
            },
          ],
        },
        {
          username: "三",
          content: "123456789",
          time: "20xx-05-21 10:38",
          goods: 810,
        },
      ],
      pinglunSuccess() {
        ElMessage({
          message: "评论成功.",
          type: "success",
        });
        comment.pinglun = "";
      },
      pinglunError() {
        ElMessage({
          message: "评论失败.",
          type: "error",
        });
      },
    });
    // 监听评论是否增加
    watch(
      () => [...comment.commentData],
      (now, old) => {
        if (now != old) {
          comment.pinglunSuccess();
        } else if (now == old) {
          comment.pinglunError();
        }
      }
    );

    watch(
      () => [...videoOption.player.danmukuList],
      (now, old) => {
        if (now != old) {
          videoOption.player.danmukuList=now
          console.log('弹幕总数改变')
        } else if (now == old) {
          return
        }
      }
    );

    function randomColor() {
      var color = "#";
      for (let i = 0; i < 6; i++) {
        color += ((Math.random() * 16) | 0).toString(16);
      }
      return color;
    }

    function beginDanmu() {
      let danmukuLength = 0;
      let modee = 0;
      let timee = 0;
      let rgb = "";
      let num = "";
      for (let i = 1; i <= 514; i++) {
        modee = Math.round(Math.random()); //0 to 1
        timee = Math.floor(Math.random() * 189) + 1; //1 to 189
        rgb = randomColor();
        num = i.toString();
        let temp = {
          text: num,
          mode: modee,
          time: timee,
          color: rgb,
          border: false,
          date: "01-01 20:23",
        };
        videoOption.player.danmukuList.push(temp);
        danmuLiebiao.danmukuLB.push(temp);
        danmukuLength = videoOption.player.danmukuList.length;
      }

      // console.log(videoOption.player.danmukuList);
      // console.log(danmukuLength);
      console.log("初始化弹幕内容");
      return danmukuLength;
    }
    let danmuLen = beginDanmu();

    function saveList() {
      danmuLiebiao.danmukuLB = videoOption.player.danmukuList;
    }

    onBeforeMount(() => {
      beginDanmu();
    });

    onMounted(() => {
      saveList();
    });

    return {
      danmuLen,
      ...toRefs(titlebar),
      ...toRefs(avatar),
      ...toRefs(videoOption),
      ...toRefs(danmuLiebiao),
      ...toRefs(tuijian),
      ...toRefs(comment),
    };
  },
};
</script>

<style scoped lang="less">
.el-main {
  display: flex;
  height: auto;
  overflow-y: auto;
  justify-content: center;
  // border: 1px solid rgb(219, 219, 0);
  background-color: #ffffff;
}
.el-main::-webkit-scrollbar {
  display: none;
}
.row {
  // margin-top: 188px;
  height: auto;
  width: 100%;
  display: flex;
  overflow-y: auto;
  // border: 1px solid rgb(153, 8, 32);
  justify-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
}
.row::-webkit-scrollbar {
  display: none;
}

.input-with-select {
  background-color: var(--el-fill-color-blank);
  width: 690px;
  height: 45px;
  margin-left: 160px;
}

.artplayer-app {
  width: 1170px;
  height: 660px;
}
</style>