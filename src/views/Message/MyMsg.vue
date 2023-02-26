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
                    <li @click="myMsg" tabindex="4" :style="onestyle">
                      我的信息
                    </li>
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
                  <!-- 对话部分 -->
                  <div
                    style="
                      width: 98%;
                      height: auto;
                      background-color: white;
                      margin: 10px;
                    "
                  >
                    <el-container style="height: auto">
                      <!-- 用户列表 -->
                      <el-aside width="250px" style="height: auto">
                        <div
                          style="
                            width: 250px;
                            height: 50px;
                            text-align: center;
                            border-bottom: 1px solid #cdd0d6;
                            position: absolute;
                            top: 70px;
                            font-size: 20px;
                            background-color: white;
                          "
                        >
                          <p style="position: relative; top: 11px; margin: 0px">
                            近期消息
                          </p>
                        </div>
                        <div
                          style="margin-top: 50px; border-top: 1px solid black"
                          class="leftScro"
                        >
                          <el-scrollbar height="850px">
                            <div
                              v-for="i in 15"
                              :key="i"
                              style="
                                display: flex;
                                align-items: center;
                                height: 70px;
                                width: 100%;
                                justify-content: center;
                              "
                              class="miniAside"
                              :tabindex="i"
                            >
                              <el-avatar
                                :size="40"
                                :src="circleUrl"
                              ></el-avatar>
                              <h4 style="margin-left: 5px">用户名{{ i }}</h4>
                            </div>
                          </el-scrollbar>
                        </div>
                      </el-aside>
                      <!-- 对话框 -->
                      <el-main
                        style="
                          width: 100%;
                          height: 900px;
                          display: flex;
                          flex-direction: column;
                        "
                      >
                        <!-- 顶栏 -->
                        <div
                          style="
                            width: 1095px;
                            height: 50px;
                            text-align: center;
                            border-bottom: 1px solid #cdd0d6;
                            border-left: 1px solid #cdd0d6;
                            position: absolute;
                            top: 70px;
                            font-size: 20px;
                            background-color: white;
                          "
                        >
                          <p style="position: relative; top: 11px; margin: 0px">
                            用户名
                          </p>
                        </div>
                        <!-- 内容 -->
                        <div class="talkcontent">
                          <el-scrollbar height="100%">
                            <div v-for="(item, index) in talkList" :key="index">
                              <!-- 对方 -->
                              <div
                                v-if="item.uid == 1"
                                style="width: 100%; min-height: 100px"
                              >
                                <p style="text-align: center; color: #909399">
                                  {{ item.date }}
                                </p>
                                <div
                                  style="
                                    display: flex;
                                    align-items: flex-start;
                                    margin-left: 20px;
                                  "
                                >
                                  <el-avatar
                                    :size="40"
                                    :src="circleUrl"
                                  ></el-avatar>
                                  <div
                                    style="
                                      margin-left: 15px;
                                      background-color: white;
                                      color: black;
                                      font-size: 18px;
                                      border-top-left-radius: 0px;
                                      border-top-right-radius: 20px;
                                      border-bottom-right-radius: 20px;
                                      border-bottom-left-radius: 20px;
                                      min-width: 100px;
                                      max-width: 800px;
                                      height: 40px;
                                      word-wrap: break-word;
                                      word-break: break-all;
                                      padding: 5px;
                                      display: flex;
                                      justify-content: center;
                                      align-items: center;
                                    "
                                  >
                                    <p style="margin: 0px">
                                      {{ item.context }}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <!-- 自己 -->
                              <div
                                v-if="item.uid == 2"
                                style="width: 100%; min-height: 100px"
                              >
                                <p style="text-align: center; color: #909399">
                                  {{ item.date }}
                                </p>
                                <div
                                  style="
                                    display: flex;
                                    align-items: flex-start;
                                    margin-left: 920px;
                                  "
                                >
                                  <div
                                    style="
                                      background-color: #409eff;
                                      color: white;
                                      font-size: 18px;
                                      border-top-left-radius: 20px;
                                      border-top-right-radius: 0px;
                                      border-bottom-right-radius: 20px;
                                      border-bottom-left-radius: 20px;
                                      min-width: 100px;
                                      max-width: 800px;
                                      height: 40px;
                                      word-wrap: break-word;
                                      word-break: break-all;
                                      padding: 5px;
                                      display: flex;
                                      justify-content: center;
                                      align-items: center;
                                    "
                                  >
                                    <p style="margin: 0px">
                                      {{ item.context }}
                                    </p>
                                  </div>
                                  <el-avatar
                                    style="margin-left: 15px"
                                    :size="40"
                                    :src="circleUrl"
                                  ></el-avatar>
                                </div>
                              </div>
                            </div>
                          </el-scrollbar>
                        </div>
                        <!-- 输入框 -->
                        <div
                          style="
                            background-color: #e5eaf3;
                            width: 100%;
                            height: 30%;
                          "
                        >
                          <div style="margin-top: 10px">
                            <span style="margin-left: 15px"
                              ><el-button plain type="primary"
                                >图片</el-button
                              ></span
                            >
                            <span style="margin-left: 15px"
                              ><el-button plain type="primary"
                                >表情</el-button
                              ></span
                            >
                          </div>
                          <div>
                            <!-- 输入区域 -->
                            <el-input
                              v-model="textarea"
                              :rows="4"
                              resize="none"
                              type="textarea"
                              input-style="background-color:#e5eaf3"
                              style="
                                border: 0 none;
                                outline: medium;
                                font-size: 16px;
                                width: 98%;
                                height: 80px;
                                margin: 10px;
                                resize: none;
                              "
                            />
                          </div>
                          <el-button
                            type="primary"
                            style="margin: 30px 15px 0px 1023px"
                            >发送</el-button
                          >
                        </div>
                      </el-main>
                    </el-container>
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
import { reactive, ref, toRefs } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import router from "@/router";
export default {
  components: { HeaderNav },
  setup() {
    let leftUL = reactive({
      rightNav: "我的信息",
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
        leftUL.rightNav = "我的信息";
        leftUL.onestyle = "color:#409eff";
      },
      MsgOpt() {
        router.push({ path: "/msgopt" });
      },
    });
    let textarea = ref("");
    onMounted(() => {
      leftUL.myMsg();
    });

    return {
      ...toRefs(leftUL),
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      talkList: [
        { context: "123", uid: "1", date: "2022年2月31日 15:39" },
        { context: "456", uid: "1", date: "2022年3月21日 17:49" },
        { context: "789", uid: "2", date: "2022年4月32日 11:29" },
        { context: "114", uid: "1", date: "2022年5月11日 05:34" },
        { context: "514", uid: "2", date: "2022年6月21日 00:09" },
        { context: "19", uid: "1", date: "2022年7月11日 12:29" },
        { context: "19", uid: "2", date: "2022年8月1日 13:49" },
        { context: "810", uid: "1", date: "2022年9月1日 15:59" },
        {
          context:
            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
          uid: "1",
          date: "xxxx年x月x日 xx:xx",
        },
        { context: "xxx", uid: "2", date: "xxxx年x月x日 xx:xx" },
        { context: "xxx", uid: "2", date: "xxxx年x月x日 xx:xx" },
        { context: "xxx", uid: "2", date: "xxxx年x月x日 xx:xx" },
      ],
      textarea,
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
  background-image: url("C:\fake-bilibli\public\infocenterbg.jpg");
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
.miniAside {
  background-color: white;
}
.miniAside:hover {
  background-color: #cdd0d6;
}
.miniAside:focus {
  background-color: #cdd0d6;
}
.leftScro {
  height: auto;
  overflow-y: auto;
}

.leftScro::-webkit-scrollbar {
  display: none;
}

.talkcontent {
  background-color: #e5eaf3;
  width: 100%;
  height: 70%;
  border-bottom: 1px solid #cdd0d6;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}
.talkcontent::-webkit-scrollbar {
  display: none;
}
</style>