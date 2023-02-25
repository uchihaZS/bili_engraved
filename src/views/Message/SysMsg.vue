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
                  style="text-align: center; font-size: 20px; font-weight: 600"
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
                    "
                  >
                    <li @click="answerMe" tabindex="1">回复我的</li>
                    <li @click="goods" tabindex="2">收到的赞</li>
                    <li @click="sysMsg" tabindex="3" :style="onestyle">
                      系统通知
                    </li>
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
                      margin: 10px;
                      height: 125px;
                      background-color: white;
                      border-radius: 10px;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      box-shadow: var(--el-box-shadow-lighter);
                    "
                    v-for="i in 10" :key="i"
                  >
                    <div style="display: flex; margin-left: 50px;align-items: center;">
                      <span style="font-weight: 600">主题名</span>
                      <span style="margin-left: 15px; color: #cfd3dc"
                        >20XX年XX月XX日 XX:XX</span
                      >
                    </div>
                    <div style="margin-left: 50px;">
                      <p>
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx(简介)
                      </p>
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
      rightNav: "系统通知",
      onestyle: "color:#409eff",

      answerMe() {
        router.push({ path: "/answerme" });
      },
      goods() {
        router.push({ path: "/msggoods" });
      },

      myMsg() {
        router.push({ path: "/mymsg" });
      },
      MsgOpt() {
        router.push({ path: "/msgopt" });
      },
      sysMsg() {
        leftUL.rightNav = "系统通知";
        leftUL.onestyle = "color:#409eff";
      },
    });

    onMounted(() => {
      leftUL.sysMsg();
    });

    return {
      ...toRefs(leftUL),
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
  background-image: url("../../../public/infocenterbg.jpg");
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
</style>