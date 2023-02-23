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
              <el-main>
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
                  <div style="display:flex">
                    <div style="border-right:1px solid #CFD3DC;width:91%;display:flex;padding:0px 10px" >
                      <el-button type="info" plain>表情</el-button>
                      <el-button type="info" plain>图片</el-button>
                      <el-button type="info" plain>艾特</el-button>
                      <el-button type="info" plain>投票</el-button>
                      <el-button type="info" plain>定时</el-button>
                      <el-button type="info" plain>直播</el-button>
                    </div>
                    <el-button type="primary" style="margin-left:10px">发送</el-button>
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
export default {
  components: { HeaderNav },
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
  background-image: url("../../public/DyaBG.png");
  background-size: contain;
}
.el-main::-webkit-scrollbar {
  display: none;
}

.leftBG {
  width: 100%;
  margin: 0px 0px;
  height: 66px;
  background-image: url("../../public/smallPBG.webp");
  background-size: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.avatag:hover {
  color: #409eff;
}

.el-input {
  border: 0;
}
</style>