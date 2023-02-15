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
                width="200px"
                style="
                  border-right: 1px solid #e5eaf3;
                  background-color: #ffffff;
                "
              >
                <div class="asideSel" tabindex="1" @click="tab = 1">
                  <p>视频</p>
                  <p>数量</p>
                </div>
                <div class="asideSel" tabindex="2" @click="tab = 2">
                  <p>音频</p>
                  <p>数量</p>
                </div>
                <div class="asideSel" tabindex="3" @click="tab = 3">
                  <p>专栏</p>
                  <p>数量</p>
                </div>
                <div class="asideSel" tabindex="4" @click="tab = 4">
                  <p>相册</p>
                  <p>数量</p>
                </div>
              </el-aside>
              <!-- 右边主内容 -->
              <el-main style="display: flex; flex-direction: column">
                <per-video v-if="tab == 1"></per-video>
                <per-music v-if="tab == 2"></per-music>
                <per-column v-if="tab == 3"></per-column>
                <per-photo v-if="tab == 4"></per-photo>
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
import PersonalHead from "@/components/PersonalHead.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import PerVideo from "@/components/PerVideo.vue";
import PerMusic from "@/components/PerMusic.vue";
import PerColumn from "@/components/PerColumn.vue";
import PerPhoto from "@/components/PerPhoto.vue";
import { ref, toRef } from "@vue/reactivity";

export default {
  components: {
    PersonalHead,
    HeaderNav,
    PerVideo,
    PerMusic,
    PerColumn,
    PerPhoto,
  },
  setup() {
    let tab = ref(1);

    return {
      tab,
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

.asideSel {
  display: flex;
  padding: 0px 5px;
  align-items: center;
  justify-content: space-between;
  height: 50px;
}
.asideSel:hover {
  background-color: #f4f5f7;
}
.asideSel:focus {
  background-color: #409eff;
  color: #ffffff;
}
</style>