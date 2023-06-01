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
            <div style="width: 100%; height: 100%"></div>
          </el-col>
          <!-- 中间主要内容 -->
          <el-col :span="20" style="display: flex">
            <el-container>
              <!-- 左边 -->
              <el-aside width="250px">
                <div
                  style="
                    width: 250px;
                    height: 210px;
                    background-color: white;
                    border-radius: 5px;
                  "
                >
                  <div class="leftBG"></div>
                  <div style="display: flex">
                    <el-avatar
                      :size="60"
                      :src="circleUrl"
                      style="position: relative; top: -20px; left: 20px"
                    ></el-avatar>
                    <p style="margin-left: 40px; margin-top: 10px">用户名</p>
                  </div>
                  <div
                    style="
                      display: flex;
                      justify-content: space-around;
                      width: auto;
                      height: 40px;
                      text-align: center;
                      margin-top: 20px;
                    "
                  >
                    <span style="margin-top: -29px" class="avatag">
                      <p
                        style="height: 10px; font-size: 15px; font-weight: 600"
                      >
                        47
                      </p>
                      <p style="font-size: 13px">关注</p>
                    </span>
                    <span style="margin-top: -29px" class="avatag">
                      <p
                        style="height: 10px; font-size: 15px; font-weight: 600"
                      >
                        114514
                      </p>
                      <p style="font-size: 13px">粉丝</p>
                    </span>
                    <span style="margin-top: -29px" class="avatag">
                      <p
                        style="height: 10px; font-size: 15px; font-weight: 600"
                      >
                        9
                      </p>
                      <p style="font-size: 13px">动态</p>
                    </span>
                  </div>
                </div>
              </el-aside>
              <!-- 中间 -->
              <el-main
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: flex-start;
                "
              >
                <!-- 发表动态 -->
                <div
                  style="
                    width: 1050px;
                    height: 200px;
                    background-color: white;
                    margin-top: 0px;
                    border-radius: 5px;
                  "
                >
                  <!-- 输入框 -->
                  <el-input
                    v-model="textarea"
                    :rows="4"
                    resize="none"
                    type="textarea"
                    placeholder="有什么想和大家分享的?"
                    style="
                      border: 0 none;
                      outline: medium;
                      font-size: 18px;
                      width: 98%;
                      height: 130px;
                      margin: 10px;
                      resize: none;
                    "
                  />
                  <div style="display: flex">
                    <div
                      style="
                        border-right: 1px solid #cfd3dc;
                        width: 91%;
                        display: flex;
                        padding: 0px 10px;
                      "
                    >
                      <el-button type="info" plain>表情</el-button>
                      <el-button type="info" plain>图片</el-button>
                      <el-button type="info" plain>艾特</el-button>
                      <el-button type="info" plain>投票</el-button>
                      <el-button type="info" plain>定时</el-button>
                      <el-button type="info" plain>直播</el-button>
                    </div>
                    <el-button type="primary" style="margin-left: 10px"
                      >发送</el-button
                    >
                  </div>
                </div>
                <!-- 横向列表 -->
                <div
                  style="
                    width: 1050px;
                    height: 100px;
                    background-color: white;
                    margin-top: 20px;
                    border-radius: 5px;
                  "
                >
                  <el-scrollbar>
                    <div style="display: flex">
                      <div
                        v-for="i in 20"
                        :key="i"
                        style="
                          width: 80px;
                          flex-shrink: 0;
                          display: flex;
                          flex-direction: column;
                          align-items: center;
                          margin-top: 10px;
                        "
                      >
                        <el-avatar :size="40" :src="circleUrl"></el-avatar>
                        <p style="margin-top: 10px">用户名{{ i }}</p>
                      </div>
                    </div>
                  </el-scrollbar>
                </div>
                <!-- 菜单栏 -->
                <div
                  style="
                    width: 1050px;
                    height: 50px;
                    background-color: white;
                    margin-top: 20px;
                    border-radius: 5px;
                  "
                >
                  <div style="display: flex; justify-content: space-evenly">
                    <div class="tag">
                      <div>全部</div>
                      <div class="direction"></div>
                    </div>
                    <div class="tag">
                      <div>视频投稿</div>
                      <div class="direction"></div>
                    </div>
                    <div class="tag">
                      <div>追番追剧</div>
                      <div class="direction"></div>
                    </div>
                    <div class="tag">
                      <div>专栏</div>
                      <div class="direction"></div>
                    </div>
                  </div>
                </div>
                <!-- 动态列表 -->
                <div style="width: 1050px; height: auto">
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
                        align-items: center;
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
                      <el-dropdown
                        trigger="click"
                        style="margin-left: 765px; margin-top: 0px"
                      >
                        <el-icon
                          style="
                            transform: rotate(90deg);
                            width: 25px;
                            height: 25px;
                          "
                          size="large"
                          ><MoreFilled style="width: 25px; height: 25px"
                        /></el-icon>
                        <template #dropdown>
                          <el-dropdown-menu>
                            <el-dropdown-item>举报</el-dropdown-item>
                          </el-dropdown-menu>
                        </template>
                      </el-dropdown>
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
                        align-items:center;
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
                      <el-dropdown
                        trigger="click"
                        style="margin-left: 765px; margin-top: 0px"
                      >
                        <el-icon
                          style="
                            transform: rotate(90deg);
                            width: 25px;
                            height: 25px;
                          "
                          size="large"
                          ><MoreFilled style="width: 25px; height: 25px"
                        /></el-icon>
                        <template #dropdown>
                          <el-dropdown-menu>
                            <el-dropdown-item>举报</el-dropdown-item>
                          </el-dropdown-menu>
                        </template>
                      </el-dropdown>
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
              </el-main>
              <!-- 右边 -->
              <el-aside width="250px">
                <div
                  style="
                    width: 100%;
                    height: auto;
                    background-color: white;
                    border-radius: 5px;
                  "
                >
                  <p
                    style="font-size: 22px; margin-top: 0px; margin-left: 10px"
                  >
                    话题
                  </p>
                  <div
                    style="
                      display: flex;
                      flex-direction: column;
                      align-items: flex-start;
                    "
                  >
                    <div v-for="i in 6" :key="i" style="margin-left: 10px">
                      <p style="font-size: 18px">话题名{{ i }}</p>
                      <div>
                        <span style="font-size: 15px">浏览数</span>
                        <span style="margin-left: 10px; font-size: 15px"
                          >讨论数</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </el-aside>
            </el-container>
          </el-col>
          <!-- 右边空白 -->
          <el-col :span="2">
            <div style="width: 100%; height: 100%"></div
          ></el-col>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
import { reactive, ref, toRefs } from "vue";
import { MoreFilled } from "@element-plus/icons-vue";
export default {
  components: { HeaderNav,MoreFilled },
  setup() {
    const circleUrl =
      "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";

    let textarea = ref("");

    return {
      circleUrl,
      textarea,
    };
  },
};
</script>

<style lang="less" scoped>
.row {
  margin-top: 10px;
  height: auto;
  width: 100%;
  display: flex;
  overflow-y: auto;
  opacity: 1;
  justify-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
}
.row::-webkit-scrollbar {
  display: none;
}

.el-main {
  display: flex;
  width: 100%;
  height: auto;
  overflow-y: auto;
  justify-content: center;
  --el-main-padding: 0px;
  background-image: url('@/assets/DyaBG.png');
  background-position-x: center;
  background-position-y: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
}
.el-main::-webkit-scrollbar {
  display: none;
}

.leftBG {
  width: 100%;
  margin: 0px 0px;
  height: 66px;
  background-image: url('@/assets/smallPBG.webp');
  background-size: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.avatag:hover {
  color: #409eff;
}
.tag {
  font-size: 18px;
  height: 75px;
  margin-top: 12px;
  align-items: center;
  display: flex;
  width: auto;
  flex-direction: column;
  flex-wrap: nowrap;
  // justify-content: center;
}
.tag:hover {
  color: #409eff;
}
.tag:hover .direction {
  background-color: #409eff;
}
.direction {
  height: 2px;
  width: 100%;
  position: relative;
  top: 13px;
}
</style>