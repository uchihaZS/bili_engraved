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
                      <vue3VideoPlay
                        width="1170px"
                        height="660px"
                        color="#409eff"
                        :src="realSrc"
                        autoPlay=true
                        type="video/mp4"
                        style="width: 1170px; height: 660px; z-index: 2"
                      />
                      <!-- 弹幕功能 -->
                      <vue-danmaku
                        v-model:danmus="danmus"
                        ref="danmakuRef"
                        fontSize="20px"
                        speeds="100"
                        style="
                          height: 210px;
                          width: 1163px;
                          position: absolute;
                          border: 1px solid yellow;
                          top: 100px;
                          z-index: 4;
                        "
                      ></vue-danmaku>
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
                          >114人正在观看，已装填{{ danmus.length }}条弹幕</span
                        >
                        <span>
                          <el-button type="primary" @click="showDanmu"
                            >{{ switchName }}弹幕</el-button
                          >
                        </span>
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
                      @click="changeList"
                      size="large"
                      color="#CFD3DC"
                      style="width: 100%"
                      >弹幕列表</el-button
                    >
                    <!-- 列表 -->
                    <div v-show="danmuList == 1" style="width: auto">
                      <el-table
                        :data="danmuData"
                        style="width: 100%"
                        max-height="680px"
                      >
                        <el-table-column
                          prop="content"
                          label="内容"
                          width="180"
                        />
                        <el-table-column prop="time" label="时间" width="180" />
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
                      v-for="(item, index) in videoData"
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
import { reactive, toRefs, watch, ref, onMounted } from "vue";
import HeaderNav from "../components/HeaderNav.vue";
import MainFramework from "../components/MainFramework.vue";
import { ElMessage } from "element-plus";
import vueDanmaku from "vue3-danmaku";
import { videoPlay } from "vue3-video-play";
import "vue3-video-play/dist/style.css";

export default {
  components: { HeaderNav, MainFramework, vueDanmaku, videoPlay },
  setup() {
    const danmakuRef = ref(null);

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
    let danmu = reactive({
      // 弹幕数据
      danmuData: [
        { content: "aaa", time: "02-28 16:48" },
        { content: "bbb", time: "02-18 16:48" },
        { content: "cc", time: "12-28 16:48" },
        { content: "ddd", time: "05-28 16:48" },
        { content: "ee", time: "01-28 16:48" },
        { content: "aaffa", time: "08-28 16:48" },
        { content: "agggggaa", time: "09-28 16:48" },
        { content: "agggggaa", time: "09-28 16:48" },
        { content: "agggggaa", time: "09-28 16:48" },
        { content: "agggggaa", time: "09-28 16:48" },
        { content: "agggggaa", time: "09-28 16:48" },
        { content: "agggggaa", time: "09-28 16:48" },
      ],
      // 只有弹幕内容无时间
      danmus: [],
      // 发送弹幕的内容
      sendDanmu: "",
      switchName: "关闭",
      // 以下两个是控制弹幕列表显示
      state: false,
      danmuList: 2, //当为1时才显示,默认为关
      // 以下两个是控制弹幕视频中显示
      showState: true,
      isShow: 4, //当为4时才显示,默认为显示
      // 是否显示弹幕列表
      changeList() {
        danmu.danmuList = danmu.state == false ? "1" : "2";
        danmu.state = !danmu.state;
      },
      // 初始化弹幕
      beginDanmu() {
        let temp = [];
        for (let a = 0; a <= 100; a++) {
          // danmu.danmus.push(a);
          danmu.danmuData.push({content:a,time:'07-09 00:47'})
        }
        for (let i = 0; i < danmu.danmuData.length; i++) {
          temp.push(danmu.danmuData[i].content);
        }
        danmu.danmus = temp;
        // console.log(danmu.danmus)
        
      },
      // 是否显示弹幕
      showDanmu() {
        danmu.isShow = danmu.showState == false ? "3" : "4";
        if (danmu.isShow == "3") {
          danmakuRef.value.show();
          danmu.showState = !danmu.showState;
          danmu.switchName = "关闭";
          // console.log('显示弹幕')
        } else if (danmu.isShow == "4") {
          danmakuRef.value.hide();
          danmu.showState = !danmu.showState;
          danmu.switchName = "显示";
          // console.log('关闭弹幕')
        }
      },
      // 发送弹幕
      send() {
        danmakuRef.value.add(danmu.sendDanmu);
        let x={content:danmu.sendDanmu,time:'xx-xx xx:xx'}
        danmu.danmuData.push(x)
        danmu.sendDanmu = "";
      },
    });

    let option = reactive({
      //主题色
      title: "", //视频名称
      realSrc:
        "https://prod-streaming-video-msn-com.akamaized.net/fb194c01-2ff6-4b4e-afbd-a00289124c4c/af7a74f5-5cb6-423e-b428-d05c0d36478d.mp4", //视频源
      muted: false, //静音
      webFullScreen: false,
      speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
      autoPlay: true, //自动播放
      loop: false, //循环播放
      mirror: false, //镜像画面
      ligthOff: false, //关灯模式
      volume: 0.3, //默认音量大小
      control: true, //是否显示控制
      controlBtns: [
        "audioTrack",
        "quality",
        "speedRate",
        "volume",
        "setting",
        "pip",
        "pageFullScreen",
        "fullScreen",
      ], //显示所有按钮,
    });

    //推荐视频列表
    let video = reactive({
      // 推荐视频数据
      videoData: [
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

    onMounted(() => {
      danmu.beginDanmu()
      console.log("初始化弹幕内容");
    });

    return {
      danmakuRef,
      ...toRefs(titlebar),
      ...toRefs(avatar),
      ...toRefs(danmu),
      ...toRefs(video),
      ...toRefs(comment),
      ...toRefs(option),
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
  margin-left: 70px;
}
</style>