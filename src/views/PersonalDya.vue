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
                  background-color: #f4f5f7;
                  height: auto;
                  margin-top: 10px;
                "
              >
                <!-- 视频动态 -->
                <div
                  style="
                    width: 100%;
                    height: auto;
                    border-radius: 10px;
                    margin-top: 10px;
                    background-color: white;
                    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
                  "
                >
                  <!-- 头像栏 -->
                  <div
                    style="
                      width: 100%;
                      padding: 0px 15px;
                      height: 60px;
                      display: flex;
                      align-items: flex-start;
                      position: relative;
                      top: 50px;
                      left: 31px;
                    "
                  >
                    <el-avatar :size="60" :src="circleUrl"></el-avatar>
                    <div style="margin-left: 15px; height: 60px">
                      <p style="font-size: 18px; margin: 0px auto">用户名</p>
                      <div style="margin-top: 10px; font-size: 14px">
                        <span>发布时间</span>
                        <span style="margin-left: 10px">投稿了视频</span>
                      </div>
                    </div>
                  </div>
                  <!-- 视频框 -->
                  <div
                    style="
                      margin-top: 70px;
                      display: flex;
                      margin-left: 120px;
                      border-radius: 5px;
                      border: 1px solid gray;
                      width: 500px;
                    "
                  >
                    <div
                      style="
                        width: 200px;
                        height: 140px;
                        background-color: #909399;
                      "
                    ></div>
                    <div
                      style="
                        display: flex;
                        flex-direction: column;
                        width: 200px;
                        margin-left: 15px;
                      "
                    >
                      <p
                        style="font-size: 18px; margin: 0px 0px"
                        class="toBlue"
                      >
                        视频名
                      </p>
                      <div style="margin-top: 80px">
                        <span style="font-size: 14px">播放数</span>
                        <span style="margin-left: 20px; font-size: 14px">
                          弹幕数
                        </span>
                      </div>
                    </div>
                  </div>
                  <!-- 底栏 -->
                  <div
                    style="
                      display: flex;
                      width: 400px;
                      margin: 10px 0px 10px 120px;
                      flex-direction: row;
                      height: 50px;
                      justify-content: flex-start;
                    "
                  >
                    <span>分享</span>
                    <span style="margin-left: 40px">评论</span>
                    <span style="margin-left: 40px">点赞</span>
                  </div>
                </div>
                <!-- 普通动态 -->
                <div
                  style="
                    width: 100%;
                    height: auto;
                    border-radius: 10px;
                    margin-top: 10px;
                    background-color: white;
                    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
                  "
                >
                  <!-- 头像栏 -->
                  <div
                    style="
                      width: 100%;
                      padding: 0px 15px;
                      height: 60px;
                      display: flex;
                      align-items: flex-start;
                      position: relative;
                      top: 50px;
                      left: 31px;
                    "
                  >
                    <el-avatar :size="60" :src="circleUrl"></el-avatar>
                    <div style="margin-left: 15px; height: 60px">
                      <p style="font-size: 18px; margin: 0px auto">用户名</p>
                      <div style="margin-top: 10px; font-size: 14px">
                        <span>发布时间</span>
                        <span style="margin-left: 10px">投稿了视频</span>
                      </div>
                    </div>
                  </div>
                  <!-- 内容框 -->
                  <div
                    style="
                      width: 500px;
                      height: auto;
                      margin-top: 51px;
                      margin-left: 120px;
                    "
                  >
                    <p>
                      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </p>
                    <p>
                      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </p>
                    <p>
                      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </p>
                  </div>
                  <!-- 底栏 -->
                  <div
                    style="
                      display: flex;
                      width: 400px;
                      margin: 10px 0px 10px 120px;
                      flex-direction: row;
                      height: 50px;
                      justify-content: flex-start;
                    "
                  >
                    <span>分享</span>
                    <span style="margin-left: 40px">评论</span>
                    <span style="margin-left: 40px">点赞</span>
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
export default {
  components: { PersonalHead, HeaderNav },
  setup() {
    let circleUrl =
      "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";

    return {
      circleUrl,
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

.toBlue:hover {
  color: #409eff;
}
</style>