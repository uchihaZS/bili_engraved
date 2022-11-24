<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <!-- 顶栏菜单 -->
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
        >
          <div class="flex-grow" />
          <el-menu-item index="0">LOGO</el-menu-item>
          <div class="flex-grow" />
          <el-input v-model="headmenu.searchValue" placeholder="请输入关键词" class="input-with-select">
            <template #append>
              <el-button>搜索</el-button>
            </template>
          </el-input>
          <div class="flex-grow" />
          <el-menu-item
            index="1"
            @mouseover="headmenu.avatarState = true,headmenu.avatarUse=headmenu.avatarCss"
            @mouseleave="headmenu.avatarState = false,headmenu.avatarUse=headmenu.avatarOri"
            
          >
            <el-avatar :size="40" :src="headmenu.circleUrl" :style="headmenu.avatarUse" />
          </el-menu-item>
          <el-menu-item index="2">消息</el-menu-item>
          <el-menu-item index="3">动态</el-menu-item>
          <el-menu-item index="4">订阅</el-menu-item>
          <el-menu-item index="5">收藏</el-menu-item>
          <el-menu-item index="6">历史</el-menu-item>
          <div class="flex-grow" />
        </el-menu>

        <el-card
          v-show="headmenu.avatarState"
          class="avatarInfo"
          @mouseover="headmenu.avatarState=true,headmenu.avatarUse=headmenu.avatarCss"
          @mouseleave="headmenu.avatarState = false,headmenu.avatarUse=headmenu.avatarOri"
        >
          <h4 style="text-align:center;margin:0px auto">用户名</h4>
          <h5 style="text-align:center;margin-top:0px">普通会员</h5>
          <div>
            <div
              style="display:flex;justify-content: space-between;margin:-20px 0px 0px 0px;padding:0px 0px;line-height:11px"
            >
              <p :style="headmenu.levelCss">{{headmenu.level}}</p>
              <p style="font-size:11px;margin-top:15px">{{headmenu.xp}}/10000</p>
            </div>
            <el-progress
              :percentage="headmenu.percentage"
              text-inside="true"
              style="margin-top:-8px"
            />
          </div>
          <el-divider />
          <div
            style="display:flex;justify-content: space-between;width:auto;height:16px;text-align:center"
          >
            <span
              :style="headmenu.threeOne"
              @mouseover="headmenu.threeOne=headmenu.threeCss"
              @mouseleave="headmenu.threeOne=headmenu.threeOrigin"
            >
              <p style="height:10px;font-size:15px">47</p>
              <p style="font-size:13px">关注</p>
            </span>
            <span
              :style="headmenu.threeTwo"
              @mouseover="headmenu.threeTwo=headmenu.threeCss"
              @mouseleave="headmenu.threeTwo=headmenu.threeOrigin"
            >
              <p style="height:10px;font-size:15px">114514</p>
              <p style="font-size:13px">粉丝</p>
            </span>
            <span
              :style="headmenu.threeThree"
              @mouseover="headmenu.threeThree=headmenu.threeCss"
              @mouseleave="headmenu.threeThree=headmenu.threeOrigin"
            >
              <p style="height:10px;font-size:15px">9</p>
              <p style="font-size:13px">动态</p>
            </span>
          </div>
          <el-divider />

          <ul style="list-style:none;width:200px;margin-top:-20px;margin-bottom:0px">
            <li
              :style="headmenu.listOne"
              @mouseover="headmenu.listOne=headmenu.listShadow"
              @mouseleave="headmenu.listOne=headmenu.listOri"
            >个人中心</li>
            <li
              :style="headmenu.listTwo"
              @mouseover="headmenu.listTwo=headmenu.listShadow"
              @mouseleave="headmenu.listTwo=headmenu.listOri"
            >投稿管理</li>
            <li
              :style="headmenu.listThree"
              @mouseover="headmenu.listThree=headmenu.listShadow"
              @mouseleave="headmenu.listThree=headmenu.listOri"
            >我的钱包</li>
            <li
              :style="headmenu.listFour"
              @mouseover="headmenu.listFour=headmenu.listShadow"
              @mouseleave="headmenu.listFour=headmenu.listOri"
            >直播中心</li>
            <li
              :style="headmenu.listFive"
              @mouseover="headmenu.listFive=headmenu.listShadow"
              @mouseleave="headmenu.listFive=headmenu.listOri"
            >我的课程</li>
          </ul>
          <el-button type="info" plain style="width:100%;margin: 0px 0px 10px 0px;">退出登录</el-button>
        </el-card>
      </el-header>
      <!-- 主体 -->
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { reactive, onMounted, onUpdated } from "vue";
// import { Search } from '@element-plus/icons-vue'
export default {
  name: "HomePage",

  setup() {
    // 数据
    let headmenu = reactive({
      avatarState: false,
      searchValue: "",
      percentage: 0,
      avatarOri: "margin-top: 9px;z-index:999",
      avatarUse: "margin-top: 9px;z-index:999",
      avatarCss: "position: relative;top:30px;z-index:999",
      level: "",
      levelCss: "",
      threeOne: "margin-top: -29px",
      threeTwo: "margin-top: -29px",
      threeThree: "margin-top: -29px",
      threeOrigin: "margin-top: -29px",
      threeCss: "margin-top: -29px;color: #3375b9",
      listOne:
        "width:200px;height:30px;position: relative;right: 60px;text-align: center;",
      listTwo:
        "width:200px;height:30px;position: relative;right: 60px;text-align: center;",
      listThree:
        "width:200px;height:30px;position: relative;right: 60px;text-align: center;",
      listFour:
        "width:200px;height:30px;position: relative;right: 60px;text-align: center;",
      listFive:
        "width:200px;height:30px;position: relative;right: 60px;text-align: center;",
      listOri:
        "width:200px;height:30px;position: relative;right: 60px;text-align: center;",
      listShadow:
        "width:200px;height:30px;position: relative;right: 60px;text-align: center;background-color:#d1d2d3",
      xp: 10000,
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    });

    // 生命函数
    onMounted(() => {
      getPercentage();
      console.log("获取经验值和等级成功");
    });

    // 方法
    function getPercentage() {
      let percentage = Math.round((headmenu.xp / 10000) * 100);
      let level = "";
      let levelCss = "";
      if (headmenu.xp <= 500) {
        level = "Lv1";
        levelCss = "font-size:13px;color: #a6a9ad;font-weight: bold;";
      } else if (headmenu.xp > 500 && headmenu.xp <= 2000) {
        level = "Lv2";
        levelCss = "font-size:13px;color: #66b1ff;font-weight: bold;";
      } else if (headmenu.xp > 2000 && headmenu.xp <= 3500) {
        level = "Lv3";
        levelCss = "font-size:13px;color: #85ce61;font-weight: bold;";
      } else if (headmenu.xp > 3500 && headmenu.xp <= 5500) {
        level = "Lv4";
        levelCss = "font-size:13px;color:orange;font-weight: bold;";
      } else if (headmenu.xp > 5500 && headmenu.xp <= 8000) {
        level = "Lv5";
        levelCss = "font-size:13px;color:#F56C6C;font-weight: bold;";
      } else if (headmenu.xp > 8000 && headmenu.xp < 10000) {
        level = "Lv6";
        levelCss = "font-size:13px;color:red;font-weight: bold;";
      } else if (headmenu.xp == 10000) {
        level = "Max";
        levelCss = "font-size:13px;color:#E6A23C;font-weight: bold;";
      }
      return (
        (headmenu.percentage = percentage),
        (headmenu.level = level),
        (headmenu.levelCss = levelCss)
      );
    }

    function avatarMove() {
      return (
        (headmenu.avatarState = true), (headmenu.avatarUse = "margin-top: 15px")
      );
    }

    return { headmenu };
  }
};
</script>

<style lang="less" scoped>
.flex-grow {
  flex-grow: 1;
}

.input-with-select {
  background-color: var(--el-fill-color-blank);
  width: 400px;
  height: 45px;
  
}
.avatarInfo {
  z-index: 998;
  width: 200px;
  height: 380px;
  position: absolute;
  left: 1170px;
}
</style>
