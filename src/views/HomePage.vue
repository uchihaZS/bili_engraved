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
          <el-menu-item index="0">qiliqili</el-menu-item>
          <div class="flex-grow" />
          <el-input
            v-model="headmenu.searchValue"
            placeholder="请输入关键词"
            class="input-with-select"
          >
            <template #append>
              <el-button>搜索</el-button>
            </template>
          </el-input>
          <div class="flex-grow" />
          <el-menu-item
            index="1"
            @mouseover="avatarOver"
            @mouseleave="avatarLeave"
          >
            <el-avatar :size="40" :src="circleUrl" :style="avatarUse" />
          </el-menu-item>
          <el-menu-item index="2">消息</el-menu-item>
          <el-menu-item index="3">动态</el-menu-item>
          <el-menu-item index="4">订阅</el-menu-item>
          <el-menu-item index="5">收藏</el-menu-item>
          <el-menu-item index="6">历史</el-menu-item>
          <div class="flex-grow" />
        </el-menu>

        <el-card
          v-show="avatarState"
          class="avatarInfo"
          @mouseover="(avatarState = true), (avatarUse = avatarCss)"
          @mouseleave="(avatarState = false), (avatarUse = avatarOri)"
        >
          <h4 style="text-align: center; margin: 0px auto">用户名</h4>
          <h5 style="text-align: center; margin-top: 0px">普通会员</h5>
          <div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                margin: -20px 0px 0px 0px;
                padding: 0px 0px;
                line-height: 11px;
              "
            >
              <p :style="levelCss">{{ level }}</p>
              <p style="font-size: 11px; margin-top: 15px">{{ xp }}/10000</p>
            </div>
            <el-progress
              :percentage="percentage"
              text-inside="true"
              style="margin-top: -8px"
            />
          </div>
          <el-divider />
          <div
            style="
              display: flex;
              justify-content: space-between;
              width: auto;
              height: 16px;
              text-align: center;
            "
          >
            <span
              :style="threeOne"
              @mouseover="threeOne = threeCss"
              @mouseleave="threeOne = threeOrigin"
            >
              <p style="height: 10px; font-size: 15px">47</p>
              <p style="font-size: 13px">关注</p>
            </span>
            <span
              :style="threeTwo"
              @mouseover="threeTwo = threeCss"
              @mouseleave="threeTwo = threeOrigin"
            >
              <p style="height: 10px; font-size: 15px">114514</p>
              <p style="font-size: 13px">粉丝</p>
            </span>
            <span
              :style="threeThree"
              @mouseover="threeThree = threeCss"
              @mouseleave="threeThree = threeOrigin"
            >
              <p style="height: 10px; font-size: 15px">9</p>
              <p style="font-size: 13px">动态</p>
            </span>
          </div>
          <el-divider />

          <ul
            style="
              list-style: none;
              width: 200px;
              margin-top: -20px;
              margin-bottom: 0px;
            "
          >
            <li
              :style="listOne"
              @mouseover="listOne = listShadow"
              @mouseleave="listOne = listOri"
            >
              个人中心
            </li>
            <li
              :style="listTwo"
              @mouseover="listTwo = listShadow"
              @mouseleave="listTwo = listOri"
            >
              投稿管理
            </li>
            <li
              :style="listThree"
              @mouseover="listThree = listShadow"
              @mouseleave="listThree = listOri"
            >
              我的钱包
            </li>
            <li
              :style="listFour"
              @mouseover="listFour = listShadow"
              @mouseleave="listFour = listOri"
            >
              直播中心
            </li>
            <li
              :style="listFive"
              @mouseover="listFive = listShadow"
              @mouseleave="listFive = listOri"
            >
              商城
            </li>
          </ul>
          <el-button
            type="info"
            plain
            style="width: 100%; margin: 0px 0px 10px 0px"
            >退出登录</el-button
          >
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
import { reactive, onMounted, onUpdated, toRefs } from "vue";
// import { Search } from '@element-plus/icons-vue'
export default {
  name: "HomePage",

  setup() {
    // 数据
    let headmenu = reactive({
      searchValue: "",
    });

    let avatar = reactive({
      avatarState: false,
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
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      avatarOver() {
        avatar.avatarState = true;
        avatar.avatarUse = avatar.avatarCss;
      },
      avatarLeave() {
        avatar.avatarState = false;
        avatar.avatarUse = avatar.avatarOri;
      },
    });

    let refAvatar = toRefs(avatar);
    // 生命函数
    onMounted(() => {
      getPercentage();
      console.log("获取经验值和等级成功");
    });

    // 方法
    function getPercentage() {
      let xp=avatar.xp
      let percentage = Math.round((xp / 10000) * 100);
      let level = "";
      let levelCss = "";
      if (xp <= 500) {
        level = "Lv1";
        levelCss = "font-size:13px;color: #a6a9ad;font-weight: bold;";
      } else if (xp > 500 && xp <= 2000) {
        level = "Lv2";
        levelCss = "font-size:13px;color: #66b1ff;font-weight: bold;";
      } else if (xp > 2000 && xp <= 3500) {
        level = "Lv3";
        levelCss = "font-size:13px;color: #85ce61;font-weight: bold;";
      } else if (xp > 3500 && xp <= 5500) {
        level = "Lv4";
        levelCss = "font-size:13px;color:orange;font-weight: bold;";
      } else if (xp > 5500 && xp <= 8000) {
        level = "Lv5";
        levelCss = "font-size:13px;color:#F56C6C;font-weight: bold;";
      } else if (xp > 8000 && xp < 10000) {
        level = "Lv6";
        levelCss = "font-size:13px;color:red;font-weight: bold;";
      } else if (xp == 10000) {
        level = "Max";
        levelCss = "font-size:13px;color:#E6A23C;font-weight: bold;";
      }
      return (avatar.percentage = percentage), (avatar.level = level), (avatar.levelCss = levelCss);
    }

    return { headmenu, ...refAvatar };
  },
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
  margin-top: 3px;
}
.avatarInfo {
  z-index: 998;
  width: 200px;
  height: 380px;
  position: absolute;
  left: 1170px;
}
</style>
