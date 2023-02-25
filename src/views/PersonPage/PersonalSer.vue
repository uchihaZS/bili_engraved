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
              <div style="position: relative; top: 20px; left: 20px">
                <p style="font-size: 22px">TA的合集和视频列表</p>
              </div>
              <div
                style="
                  width: auto;
                  height: auto;
                  padding: 0px 10px;
                  display: flex;
                  flex-wrap: wrap;
                  flex-direction: row;
                  justify-content: space-around;
                  margin-top:45px;
                "
              >
                <div v-for="i in 18" :key="i" style="width: 15%; height: 300px">
                  <div
                    style="
                      width: 100%;
                      height: 205px;
                      background-color: #909399;
                      border-radius: 10px;
                    "
                  ></div>
                  <p>合集名{{ i }}</p>
                  <p>时间</p>
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
export default {
  components: { PersonalHead, HeaderNav },
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
</style>