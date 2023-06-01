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
          <el-col :span="20">
            <el-container>
              <!-- 左栏 -->
              <el-aside
                width="200px"
                style="background-color: rgba(255, 255, 255, 0.8)"
              >
                <p
                  style="text-align: center; font-size: 20px; font-weight: 600;cursor: pointer;"
                >
                  消息中心
                </p>
                <div
                  style="
                    height: 200px;
                    display: flex;
                    padding: 0px 20px;
                    border-bottom: 1px solid #cfd3dc;
                    justify-content: center;
                  "
                >
                  <ul
                    style="
                      line-height: 45px;
                      color: #6b757b;
                      font-size: 18px;
                      margin: 0px;
                      padding: 0px;
                      font-weight: 600;
                      text-indent: 0px;
                      cursor: pointer;
                    "
                  >
                    <li @click="answerMe" tabindex="1">回复我的</li>
                    <li @click="goods" tabindex="2" :style="onestyle">
                      收到的赞
                    </li>
                    <li @click="sysMsg" tabindex="3">系统通知</li>
                    <li @click="myMsg" tabindex="4">我的信息</li>
                  </ul>
                </div>
                <p
                  style="
                    text-align: center;
                    font-size: 18px;
                    font-weight: 600;
                    margin-top: 15px;
                    color: #6b757b;
                    cursor: pointer;
                  "
                  class="asideOpt"
                  @click="MsgOpt"
                >
                  消息设置
                </p>
              </el-aside>
              <!-- 右栏 -->
              <el-main>
                <div
                  style="
                    background-color: rgba(255, 255, 255, 0.5);
                    width: 100%;
                    height: auto;
                  "
                >
                  <!-- 头部栏 -->
                  <div
                    style="
                      background-color: white;
                      border-radius: 5px;
                      width: 98%;
                      display: flex;
                      height: 50px;
                      align-items: center;
                      margin: 10px;
                    "
                  >
                    <span style="font-size: 18px; margin-left: 15px">{{
                      rightNav
                    }}</span>
                  </div>
                  <!-- 列表 -->
                  <div
                    style="
                      width: 98%;
                      height: auto;
                      background-color: white;
                      margin: 10px;
                      border-radius: 5px;
                    "
                  >
                    <div
                      style="
                        width: 100%;
                        height: 150px;
                        border-bottom: 1px solid #cfd3dc;
                        margin-top: 15px;
                        display: flex;
                        align-items: center;
                      "
                      v-for="i in 10"
                      :key="i"
                    >
                      <!-- 头像 -->
                      <div style="margin: 10px 0px 0px 20px">
                        <el-avatar :size="40" :src="circleUrl"></el-avatar>
                        <el-avatar
                          :size="40"
                          :src="circleUrl"
                          style="
                            z-index: 5;
                            position: relative;
                            position: relative;
                            top: -20px;
                            left: -30px;
                          "
                        ></el-avatar>
                      </div>
                      <!-- 中间回复内容 -->
                      <div style="margin-left: 15px">
                        <div>
                          <span>用户名1,用户名2</span>
                          <span style="margin-left: 15px"
                            >等总计XX人赞了我的评论</span
                          >
                        </div>

                        <div style="margin-top: 20px">
                          <span class="midcontent">20XX年XX月XX日 XX:XX</span>
                        </div>
                      </div>
                      <!-- 右边回复来源 -->
                      <div style="width: 100px; margin-left: 805px">
                        <p
                          style="
                            width: 100px;
                            color: #a6a9ad;
                            margin-top: -15px;
                          "
                        >
                          引用的回复来源
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </el-main>
            </el-container>
          </el-col>
          <el-col :span="2">
            <!-- 右边空白 -->
            <div style="width: 100%; height: 100%"></div
          ></el-col>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
import { reactive, toRefs } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import router from "@/router";
export default {
  components: { HeaderNav },
  setup() {
    let leftUL = reactive({
      rightNav: "收到的赞",
      onestyle: "color:#409eff",
      answerMe() {
        router.push({ path: "/answerme" });
      },
      goods() {
        leftUL.rightNav = "收到的赞";
        leftUL.onestyle = "color:#409eff";
      },
      sysMsg() {
        router.push({ path: "/sysmsg" });
      },
      myMsg() {
        router.push({ path: "/mymsg" });
      },
      MsgOpt() {
        router.push({ path: "/msgopt" });
      },
    });

    onMounted(() => {
      leftUL.goods();
    });

    return {
      ...toRefs(leftUL),
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
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
  background-image: url('@/assets/infocenterbg.jpg');
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

li:focus {
  color: #409eff;
}

.asideOpt {
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  margin-top: 15px;
}

.midcontent {
  font-size: 14px;
  color: #cfd3dc;
}
</style>