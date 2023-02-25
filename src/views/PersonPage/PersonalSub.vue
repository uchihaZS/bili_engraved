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
          <el-col :span="20" style="background-color: #f4f5f7">
            <personal-head></personal-head>
            <div
              style="
                margin-top: 10px;
                width: 100%;
                height: auto;
                border-radius: 10px;
                background-color: white;
              "
            >
              <div
                style="
                  position: relative;
                  top: 20px;
                  display: flex;
                  left: 20px;
                  align-items: center;
                "
              >
                <p style="font-size: 22px">我的订阅</p>
                <div
                  style="
                    display: flex;
                    width: 100px;
                    justify-content: space-around;
                  "
                >
                  <span class="leftTag">追番</span>
                  <span class="leftTag">追剧</span>
                </div>
                <div
                  style="
                    display: flex;
                    margin-left: 1235px;
                    font-size: 20px;
                    align-items: center;
                  "
                >
                  <p style="font-size: 19px;">筛选：</p>
                  <el-dropdown trigger="click" @command="handleCommand">
                    <p
                      :style="{ fontSize: '19px', color: 'black' }"
                      v-hoverBlue
                    >
                      {{ dropName }}
                    </p>
                    <template #dropdown>
                      <el-dropdown-menu>
                        <el-dropdown-item command="全部">全部</el-dropdown-item>
                        <el-dropdown-item command="想看">想看</el-dropdown-item>
                        <el-dropdown-item command="在看">在看</el-dropdown-item>
                        <el-dropdown-item command="看过">看过</el-dropdown-item>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                </div>
              </div>
              <!-- 列表 -->
              <div
                style="
                  width: 100%;
                  height: auto;
                  display: flex;
                  justify-content: center;
                  margin-top: 20px;
                "
              >
                <div
                  style="
                    width: 98%;
                    height: auto;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                  "
                >
                  <div
                    v-for="i in 15"
                    :key="i"
                    style="
                      width: 30%;
                      height: 300px;
                      display: flex;
                      justify-content: space-around;
                      flex-warp: warp;
                    "
                  >
                    <div
                      style="
                        width: 40%;
                        height: 80%;
                        border-radius: 10px;
                        background-color: #909399;
                      "
                    ></div>
                    <div style="margin-left: 10px; width: 55%">
                      <p style="font-size: 24px; margin-top: 0px">
                        番剧名{{ i }}
                      </p>
                      <p style="font-size: 18px">番剧介绍</p>
                      <p style="font-size: 18px">番剧 | 地区</p>
                      <p style="font-size: 18px">尚未观看 | 全12集</p>
                      <el-dropdown
                        trigger="click"
                        style="margin-left: 200px; margin-top: 30px"
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
                            <el-dropdown-item>取消追番</el-dropdown-item>
                          </el-dropdown-menu>
                        </template>
                      </el-dropdown>
                    </div>
                  </div>
                </div>
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
import PersonalHead from "@/components/PersonCom/PersonalHead.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import { reactive, toRefs } from "@vue/reactivity";
import { MoreFilled } from "@element-plus/icons-vue";
export default {
  components: { PersonalHead, HeaderNav, MoreFilled },
  // 自定义指令
  directives: {
    // 指令名
    hoverBlue: {
      mounted(el) {
        el.addEventListener("mouseover", () => {
          el.style.color = "#409eff";
        });
        el.addEventListener("mouseout", () => {
          el.style.color = "black";
        });
      },
    },
  },
  setup() {
    let dropdownMenu = reactive({
      dropName: "全部",
      handleCommand(command) {
        dropdownMenu.dropName = command;
      },
    });
    return {
      ...toRefs(dropdownMenu),
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

.leftTag {
  font-size: 16px;
}
.leftTag:hover {
  color: #409eff;
}
</style>