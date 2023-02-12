<template>
  <el-container>
    <el-header>
      <header-nav></header-nav>
    </el-header>
    <el-main class="el-main">
      <div class="row">
        <el-row style="width: 100%">
          <!-- 左边空白 -->
          <el-col :span="2">
            <div
              style="background-color: #f4f5f7; width: 100%; height: 100%"
            ></div>
          </el-col>
          <!-- 中间主要内容 -->
          <el-col :span="20" style="background-color: white">
            <personal-head></personal-head>
            <div style="display: flex; width: 100%; background-color: #f4f5f7">
              <!-- 左边 -->
              <div
                style="
                  width: 75%;
                  background-color: #ffffff;
                  height: auto;
                  border-radius: 10px;
                  margin-top: 10px;
                  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
                "
              >
                <!-- 置顶视频 -->
                <div style="display: flex; height: 300px">
                  <div
                    style="
                      width: 400px;
                      height: 300px;
                      background-color: #909399;
                      margin-top: 12px;
                      margin-left: 20px;
                      border-radius: 10px;
                    "
                  >
                    封面
                  </div>
                  <div style="margin-left: 15px; margin-top: -5px">
                    <p style="font-size: 20px; font-weight: 500">视频名</p>
                    <div
                      style="
                        display: flex;
                        width: 160px;
                        justify-content: space-between;
                      "
                    >
                      <span>播放数</span>
                      <span>弹幕数</span>
                      <span>时间</span>
                    </div>
                    <p>视频简介</p>
                  </div>
                </div>
                <el-divider></el-divider>
                <!-- 视频部分 -->
                <div>
                  <div style="display: flex; align-items: center">
                    <p style="font-size: 24px; margin-left: 14px">TA的视频</p>
                    <div
                      style="
                        display: flex;
                        width: 200px;
                        margin-left: 15px;
                        justify-content: space-between;
                      "
                    >
                      <span class="tag">最新发布</span>
                      <span class="tag">最多播放</span>
                      <span class="tag">最多收藏</span>
                    </div>
                    <el-button style="margin-left: 661px">播放全部</el-button>
                    <el-button @click="toPersonalVid" style="margin-left: 10px"
                      >更多</el-button
                    >
                  </div>
                  <div
                    style="
                      width: 100%;
                      padding: 0px 10px;
                      display: flex;
                      flex-wrap: wrap;
                      flex-direction: row;
                      justify-content: space-around;
                      margin-left: -10px;
                    "
                  >
                    <div
                      v-for="i in 10"
                      :key="i"
                      style="width: 200px; height: 260px"
                    >
                      <div
                        style="
                          width: 100%;
                          height: 165px;
                          background-color: #909399;
                          border-radius: 10px;
                        "
                      ></div>
                      <p>视频名{{ i }}</p>
                      <div
                        style="
                          display: flex;
                          width: 150px;
                          justify-content: space-between;
                        "
                      >
                        <span>播放数</span>
                        <span>时间</span>
                      </div>
                    </div>
                  </div>
                </div>
                <el-divider></el-divider>
                <!-- 合集部分 -->
                <div>
                  <div style="display: flex; align-items: center">
                    <p style="font-size: 24px; margin-left: 15px">合集</p>
                    <el-button style="margin-left: 924px">播放全部</el-button>
                    <el-button @click="toPersonalVid" style="margin-left: 14px"
                      >更多</el-button
                    >
                  </div>
                  <div
                    style="
                      width: 100%;
                      padding: 0px 10px;
                      display: flex;
                      flex-wrap: wrap;
                      flex-direction: row;
                      justify-content: space-around;
                      margin-left: -10px;
                    "
                  >
                    <div
                      v-for="i in 5"
                      :key="i"
                      style="width: 200px; height: 260px"
                    >
                      <div
                        style="
                          width: 100%;
                          height: 165px;
                          background-color: #909399;
                          border-radius: 10px;
                        "
                      ></div>
                      <p>合集名{{ i }}</p>
                      <div
                        style="
                          display: flex;
                          width: 150px;
                          justify-content: space-between;
                        "
                      >
                        <span>播放数</span>
                        <span>时间</span>
                      </div>
                    </div>
                  </div>
                </div>
                <el-divider></el-divider>
                <!-- 收藏夹 -->
                <div>
                  <div style="display: flex; align-items: center">
                    <p style="font-size: 24px; margin-left: 15px">TA的收藏夹</p>
                    <el-button @click="toPersonalVid" style="margin-left: 949px"
                      >更多</el-button
                    >
                  </div>
                  <div
                    style="
                      width: 100%;
                      padding: 0px 10px;
                      display: flex;
                      flex-wrap: wrap;
                      flex-direction: row;
                      justify-content: space-around;
                      margin-left: -10px;
                    "
                  >
                    <div
                      v-for="i in 5"
                      :key="i"
                      style="width: 200px; height: 260px"
                    >
                      <div
                        style="
                          width: 100%;
                          height: 165px;
                          background-color: #909399;
                          border-radius: 10px;
                        "
                      ></div>
                      <p>收藏夹名{{ i }}</p>
                    </div>
                  </div>
                </div>
                <el-divider></el-divider>
                <!-- 订阅番剧 -->
                <div>
                  <div style="display: flex; align-items: center">
                    <p style="font-size: 24px; margin-left: 15px">订阅番剧</p>
                    <el-button @click="toPersonalVid" style="margin-left: 978px"
                      >更多</el-button
                    >
                  </div>
                  <div
                    style="
                      width: 100%;
                      padding: 0px 25px;
                      display: flex;
                      flex-wrap: wrap;
                      flex-direction: row;
                      justify-content: space-between;
                      margin-left: -10px;
                    "
                  >
                    <div
                      v-for="i in 4"
                      :key="i"
                      style="width: 500px; height: 260px; display: flex"
                    >
                      <div
                        style="
                          width: 30%;
                          height: 200px;
                          background-color: #909399;
                          border-radius: 10px;
                        "
                      ></div>
                      <div style="width: 60%; margin-left: 15px">
                        <p style="font-size: 22px; margin-top: 0px">
                          番剧名{{ i }}
                        </p>
                        <p>介绍</p>
                      </div>
                    </div>
                  </div>
                </div>
                <el-divider></el-divider>
                <!-- 最近投币视频 -->
                <div>
                  <div style="display: flex; align-items: center">
                    <p style="font-size: 24px; margin-left: 15px">
                      最近投币视频
                    </p>
                  </div>
                  <div
                    style="
                      width: 100%;
                      padding: 0px 10px;
                      display: flex;
                      flex-wrap: wrap;
                      flex-direction: row;
                      justify-content: space-around;
                      margin-left: -10px;
                    "
                  >
                    <div
                      v-for="i in 5"
                      :key="i"
                      style="width: 200px; height: 260px"
                    >
                      <div
                        style="
                          width: 100%;
                          height: 165px;
                          background-color: #909399;
                          border-radius: 10px;
                        "
                      ></div>
                      <p>视频名{{ i }}</p>
                      <div
                        style="
                          display: flex;
                          width: 150px;
                          justify-content: space-between;
                        "
                      >
                        <span>播放数</span>
                        <span>弹幕</span>
                      </div>
                    </div>
                  </div>
                </div>
                <el-divider></el-divider>
                <!-- 最近点赞视频 -->
                <div>
                  <div style="display: flex; align-items: center">
                    <p style="font-size: 24px; margin-left: 15px">
                      最近点赞视频
                    </p>
                  </div>
                  <div
                    style="
                      width: 100%;
                      padding: 0px 10px;
                      display: flex;
                      flex-wrap: wrap;
                      flex-direction: row;
                      justify-content: space-around;
                      margin-left: -10px;
                    "
                  >
                    <div
                      v-for="i in 10"
                      :key="i"
                      style="width: 200px; height: 260px"
                    >
                      <div
                        style="
                          width: 100%;
                          height: 165px;
                          background-color: #909399;
                          border-radius: 10px;
                        "
                      ></div>
                      <p>视频名{{ i }}</p>
                      <div
                        style="
                          display: flex;
                          width: 150px;
                          justify-content: space-between;
                        "
                      >
                        <span>播放数</span>
                        <span>弹幕数</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 右边 -->
              <div
                style="
                  width: 25%;
                  background-color: #f4f5f7;
                  height: auto;
                  margin-left: 1%;
                  margin-top: 10px;
                  border-radius: 10px;
                "
              >
                <!-- 直播间 -->
                <el-card style="width: 100%; height: 200px">
                  <template #header>
                    <span style="font-size: 18px; font-weight: 600"
                      >直播间</span
                    >
                  </template>
                  <div
                    style="
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    "
                  >
                    主播当前不在
                  </div>
                </el-card>
                <!-- 公告 -->
                <el-card style="width: 100%; height: 200px; margin-top: 10px">
                  <template #header>
                    <span style="font-size: 18px; font-weight: 600">公告</span>
                  </template>
                  <div
                    style="
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    "
                  >
                    公告内容
                  </div>
                </el-card>
                <!-- 个人资料 -->
                <el-card
                  header="个人资料"
                  style="width: 100%; height: 200px; margin-top: 10px"
                >
                  <div
                    style="
                      width: 100%;
                      display: flex;
                      justify-content: flex-start;
                      flex-direction: column;
                    "
                  >
                    <p>UID:xxx</p>
                    <p>生日:xx-xx</p>
                  </div>
                </el-card>
              </div>
            </div>
          </el-col>
          <el-col :span="2">
            <!-- 右边空白 -->
            <div
              style="background-color: #f4f5f7; width: 100%; height: 100%"
            ></div
          ></el-col>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import PersonalHead from "@/components/PersonalHead.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import { useRouter } from "vue-router";
export default {
  components: { PersonalHead, HeaderNav },
  setup() {
    const router = useRouter();
    function toPersonalVid() {
      router.push({ path: "/personalvid" });
    }

    return {
      toPersonalVid,
    };
  },
};
</script>

<style lang="less" scoped>
.row {
  margin-top: 0px;
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

.el-main {
  display: flex;
  height: auto;
  overflow-y: auto;
  justify-content: center;
  --el-main-padding: 0px;
  background-color: #ffffff;
}
.el-main::-webkit-scrollbar {
  display: none;
}

.tag {
  font-size: 14px;
}
.tag:hover {
  color: #409eff;
}
</style>