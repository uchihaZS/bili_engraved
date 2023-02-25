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
                    <li @click="sysMsg" tabindex="3">系统通知</li>
                    <li @click="myMsg" tabindex="4">我的信息</li>
                  </ul>
                </div>
                <p class="asideOpt" @click="MsgOpt" :style="onestyle">
                  消息设置
                </p>
              </el-aside>
              <!-- 右栏 -->
              <el-main>
                <div
                  style="
                    background-color: rgba(255, 255, 255, 0.5);
                    width: 100%;
                    height: 900px;
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
                  <!-- 第一个 -->
                  <div
                    style="
                      width: 98%;
                      height: 130px;
                      background-color: white;
                      margin: 10px;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: flex-start;
                      border-radius: 5px;
                    "
                  >
                    <div style="display: flex; margin-left: 50px">
                      <span>消息提醒</span>
                      <span style="color: #909399; margin-left: 10px"
                        >（关闭后，消息将不再进行提醒）</span
                      >
                    </div>

                    <div style="margin-left: 50px; margin-top: 15px">
                      <el-radio-group v-model="remindAA">
                        <el-radio label="1" size="large" border>开启</el-radio>
                        <el-radio label="2" size="large" border>关闭</el-radio>
                      </el-radio-group>
                    </div>
                  </div>
                  <!-- 第二个 -->
                  <div
                    style="
                      width: 98%;
                      height: 130px;
                      background-color: white;
                      margin: 10px;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: flex-start;
                      border-radius: 5px;
                    "
                  >
                    <div style="display: flex; margin-left: 50px">
                      <span>私信智能拦截</span>
                      <span style="color: #909399; margin-left: 10px"
                        >（开启后，将自动拦截疑似骚扰和不良的会话）</span
                      >
                    </div>

                    <div style="margin-left: 50px; margin-top: 15px">
                      <el-radio-group v-model="remindBB">
                        <el-radio label="1" size="large" border>开启</el-radio>
                        <el-radio label="2" size="large" border>关闭</el-radio>
                      </el-radio-group>
                    </div>
                  </div>
                  <!-- 三四五 -->
                  <div
                    style="
                      width: 98%;
                      height: 390px;
                      background-color: white;
                      margin: 10px;

                      border-radius: 5px;
                    "
                  >
                    <!-- 第三个 -->
                    <div
                      style="
                        width: 100%;
                        height: 130px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: flex-start;
                        border-bottom: 1px solid var(--el-border-color);
                      "
                    >
                      <div style="display: flex; margin-left: 50px">
                        <span>回复我的消息提醒</span>
                        <span style="color: #909399; margin-left: 10px"
                          >（接受谁的评论消息提醒）</span
                        >
                      </div>

                      <div style="margin-left: 50px; margin-top: 15px">
                        <el-radio-group v-model="remindCC">
                          <el-radio label="1" size="large" border
                            >所有人</el-radio
                          >
                          <el-radio label="2" size="large" border
                            >关注的人</el-radio
                          >
                          <el-radio label="3" size="large" border
                            >不接受所有消息提醒</el-radio
                          >
                        </el-radio-group>
                      </div>
                    </div>
                    <!-- 第四个 -->
                    <div
                      style="
                        width: 100%;
                        height: 130px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: flex-start;
                        border-bottom: 1px solid var(--el-border-color);
                      "
                    >
                      <div style="display: flex; margin-left: 50px">
                        <span>@我的消息提醒</span>
                        <span style="color: #909399; margin-left: 10px"
                          >（接受谁的@消息提醒）</span
                        >
                      </div>

                      <div style="margin-left: 50px; margin-top: 15px">
                        <el-radio-group v-model="remindDD">
                          <el-radio label="1" size="large" border
                            >所有人</el-radio
                          >
                          <el-radio label="2" size="large" border
                            >关注的人</el-radio
                          >
                          <el-radio label="3" size="large" border
                            >不接受所有消息提醒</el-radio
                          >
                        </el-radio-group>
                      </div>
                    </div>
                    <!-- 第五个 -->
                    <div
                      style="
                        width: 100%;
                        height: 130px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: flex-start;
                      "
                    >
                      <div style="display: flex; margin-left: 50px">
                        <span>收到的赞消息提醒</span>
                      </div>

                      <div style="margin-left: 50px; margin-top: 15px">
                        <el-radio-group v-model="remindEE">
                          <el-radio label="1" size="large" border
                            >开启</el-radio
                          >
                          <el-radio label="2" size="large" border
                            >关闭</el-radio
                          >
                        </el-radio-group>
                      </div>
                    </div>
                  </div>
                  <!-- 第六个 -->
                  <div
                    style="
                      width: 98%;
                      height: 130px;
                      background-color: white;
                      margin: 10px;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: flex-start;
                      border-radius: 5px;
                    "
                  >
                    <div style="display: flex; margin-left: 50px">
                      <span>收起未关注人消息</span>
                      <span style="color: #909399; margin-left: 10px"
                        >（开启后，未关注人消息将被折叠起来）</span
                      >
                    </div>

                    <div style="margin-left: 50px; margin-top: 15px">
                      <el-radio-group v-model="remindFF">
                        <el-radio label="1" size="large" border>开启</el-radio>
                        <el-radio label="2" size="large" border>关闭</el-radio>
                      </el-radio-group>
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
      rightNav: "消息设置",
      onestyle: "color:#409eff",

      answerMe() {
        router.push({ path: "/answerme" });
      },
      goods() {
        router.push({ path: "/msggoods" });
      },
      sysMsg() {
        router.push({ path: "/sysmsg" });
      },
      myMsg() {
        router.push({ path: "/mymsg" });
      },

      MsgOpt() {
        leftUL.rightNav = "消息设置";
        leftUL.onestyle = "color:#409eff";
      },
    });

    let option = reactive({
      remindAA: "1",
      remindBB: "1",
      remindCC: "1",
      remindDD: "1",
      remindEE: "1",
      remindFF: "2",
    });

    onMounted(() => {
      leftUL.MsgOpt();
    });

    return {
      ...toRefs(leftUL),
      ...toRefs(option),
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
  color: #6b757b;
}
</style>