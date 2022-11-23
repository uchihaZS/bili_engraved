<template>
  <!-- 顶栏菜单 -->
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    style="line-height: 30px"
  >
    <el-menu-item index="0">LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">
      <el-avatar
        :size="40"
        :src="headmenu.circleUrl"
        @mouseover="headmenu.avatarState = true"
        @mouseleave="headmenu.avatarState = false"
        style="margin-top: 5px"
      />
    </el-menu-item>
    <el-menu-item index="2">消息</el-menu-item>
    <el-menu-item index="3">动态</el-menu-item>
    <el-menu-item index="4">订阅</el-menu-item>
    <el-menu-item index="5">收藏</el-menu-item>
    <el-menu-item index="6">历史</el-menu-item>
  </el-menu>

  <el-card v-if="headmenu.avatarState" class="avatarInfo">
    <div>aaa</div>
  </el-card>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { reactive } from "vue";
export default {
  name: "HomePage",
  setup() {
    let headmenu = reactive({
      avatarState: false,
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    });

    return { headmenu };
  },
};
</script>

<style lang="less" scoped>
.flex-grow {
  flex-grow: 1;
}

.avatarInfo {
  width: 200px;
  height: 300px;
  position: relative;
  left: 1040px;
}
</style>
