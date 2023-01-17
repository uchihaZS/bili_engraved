<template>
  <div>
    <el-container>
      <el-header>
        <header-nav></header-nav>
      </el-header>
      <el-main class="el-main">
        <div class="row">
          <el-row style="width: 100%">
            <el-col :span="1">
              <div
                style="background-color: green; width: 100%; height: 100%"
              ></div>
            </el-col>
            <el-col :span="22" style="background-color: white">
              <h1>aaa</h1>
            </el-col>
            <el-col :span="1">
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
import HeaderNav from "../components/HeaderNav.vue";
import MainFramework from "../components/MainFramework.vue";
export default {
  components: { HeaderNav, MainFramework },
  setup() {},
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
</style>