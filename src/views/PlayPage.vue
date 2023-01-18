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
                  <h1>标题</h1>
                  <div style="color: #9499a0">
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
                      <video
                        width="1170px"
                        height="660px"
                        src="../assets/canxiang.mp4"
                        controls="controls"
                        style="width: 1170px; height: 660px"
                      ></video>
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
                        <span style="margin-left: 10px"
                          >114人正在观看，已装填514条弹幕</span
                        >
                        <span>
                          <el-input
                            v-model="sendDanmu"
                            placeholder="发个友善的弹幕见证当下"
                            class="input-with-select"
                          >
                            <template #append>
                              <el-button type="primary">发送</el-button>
                            </template>
                          </el-input>
                        </span>
                      </div>
                    </el-card>
                  </div>

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
                      justify-content: flex-start;
                    "
                  >
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
                  <el-divider />
                </div>
                <!-- 右边-->
                <div
                  style="margin-left: 30px; background-color: red; width: 100%"
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
                      <p style="font-size: 20px; font-weight: bold">用户名</p>
                      <p>介绍.................</p>
                      <el-button type="primary" style="width: 70%"
                        >+关注 {{ fans }}</el-button
                      >
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
import { reactive, toRefs } from "@vue/reactivity";
import HeaderNav from "../components/HeaderNav.vue";
import MainFramework from "../components/MainFramework.vue";
export default {
  components: { HeaderNav, MainFramework },
  setup() {
    let titlebar = reactive({
      playback: 114514,
      danmu: 1919,
      times: "114-5-14  19:19:08",
    });

    let avatar = reactive({
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    });

    return {
      ...toRefs(titlebar),
      ...toRefs(avatar),
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
  width: 936px;
  height: 45px;
  margin-left: 20px;
}
</style>