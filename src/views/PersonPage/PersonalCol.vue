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
            <el-container style="margin-top: 10px; border-radius: 10px">
              <!-- 侧栏 -->
              <el-aside
                width="210px"
                style="
                  border-right: 1px solid #e5eaf3;
                  background-color: #ffffff;
                  height: auto;
                "
              >
                <el-menu default-active="1-1" mode="vertical">
                  <el-sub-menu index="1">
                    <template #title>
                      <span style="font-size:18px">TA的创建</span>
                    </template>
                    <el-menu-item index="1-1" style="font-size:16px">收藏夹一</el-menu-item>
                    <el-menu-item index="1-2" style="font-size:16px">收藏夹二</el-menu-item>
                  </el-sub-menu>
                  <el-sub-menu index="2" >
                    <template #title>
                      <span style="font-size:18px">TA的收藏</span>
                    </template>
                    <el-menu-item index="2-1" style="font-size:16px">收藏夹三</el-menu-item>
                    <el-menu-item index="2-2" style="font-size:16px">收藏夹四</el-menu-item>
                  </el-sub-menu>
                </el-menu>
              </el-aside>
              <!-- 右边主内容 -->
              <el-main style="display: flex; flex-direction: column">
                <per-context></per-context>
              </el-main>
            </el-container>
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
import PerContext from "@/components/PersonCom/PerContext.vue"
import HeaderNav from "@/components/HeaderNav.vue";
export default {
  components: { PersonalHead, HeaderNav,PerContext },
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