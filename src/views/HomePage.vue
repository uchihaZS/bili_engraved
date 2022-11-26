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
          <!-- LOGO -->
          <el-menu-item index="0">qiliqili</el-menu-item>
          <div class="flex-grow" />
          <!-- 搜索框 -->
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
          <!-- 头像 -->
          <el-menu-item
            index="1"
            @mouseover="avatarOver"
            @mouseleave="avatarLeave"
          >
            <el-avatar :size="40" :src="circleUrl" :style="avatarUse" />
          </el-menu-item>
          <!-- 消息的下拉菜单 -->
          <el-dropdown>
            <el-menu-item index="2">
              <span class="el-dropdown-link"> 消息 </span>
            </el-menu-item>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>回复我的</el-dropdown-item>
                <el-dropdown-item>@我的</el-dropdown-item>
                <el-dropdown-item>收到的赞</el-dropdown-item>
                <el-dropdown-item>系统通知</el-dropdown-item>
                <el-dropdown-item>我的消息</el-dropdown-item>
                <el-dropdown-item>私信存档</el-dropdown-item>
                <el-dropdown-item>消息设置</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <el-menu-item
            index="3"
            @mouseover="dynamicFun"
            @mouseleave="dynamicState = false"
            >动态</el-menu-item
          >
          <el-menu-item index="4">订阅</el-menu-item>
          <el-menu-item index="5">收藏</el-menu-item>
          <el-menu-item index="6">历史</el-menu-item>
          <div class="flex-grow" />
        </el-menu>
        <!-- 头像悬浮信息 -->
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
        <!-- 动态悬浮信息 -->
        <div class="dynamic" v-show="(dynamicState = true)">
          <!-- 动态菜单 -->
          <div
            style="
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
              align-content: center;
              justify-content: space-around;
              align-items: center;
            "
          >
            <div style="width: 100px; display: flex; flex-wrap: nowrap">
              <el-button text size="small" @click="dyVideo" :style="dyVideoCss"
                >视频</el-button
              >
              <el-button text size="small" @click="dyAnime" :style="dyAnimeCss"
                >番剧</el-button
              >
              <el-button text size="small" @click="dyCol" :style="dyColCss"
                >专栏</el-button
              >
              <el-button text size="small" @click="dyLive" :style="dyLiveCss"
                >直播</el-button
              >
            </div>

            <el-button round style="margin-left: 87px">全部动态</el-button>
          </div>
          <!-- 动态内容 -->
          <!-- 视频列表 -->
          <div v-if="dynamicType == 0">
            <div class="dyvideo">
              <div v-for="i in 10" :key="i" style="margin-bottom: 10px">
                <el-card
                  class="box-card"
                  style="width: 145px; height: 150px; border-radius: 15px"
                  body-style="padding:0px"
                >
                  <div
                    style="background-color: #909399; width: 100%; height: 85px"
                  >
                    封面{{ i }}
                  </div>
                  <h5 style="margin: 5px 0px 3px 11px">视频{{ i }}的介绍</h5>
                  <el-button round size="small" style="margin: 13px 0px 0px 5px"
                    >视频{{ i }}的作者</el-button
                  >
                </el-card>
              </div>
            </div>
          </div>
          <!-- 番剧列表 -->
          <div v-if="dynamicType == 1">
            <div class="dyanime">
              <div
                v-for="i in 10"
                :key="i"
                style="
                  margin-bottom: 10px;
                  width: 98%;
                  border: 1px solid #e5eaf3;
                  border-radius: 15px;
                  height: 70px;
                  display: flex;
                "
              >
                <div
                  style="
                    background-color: #909399;
                    width: 40%;
                    height: 100%;
                    border-radius: 15px;
                  "
                >
                  封面{{ i }}
                </div>
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-left: 5px;
                  "
                >
                  <h4 style="margin-bottom: -15px;">集名{{ i }}</h4>
                  <h5>番名{{ i }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    // 菜单栏
    let headmenu = reactive({
      searchValue: "",
    });
    // 头像
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
    // 动态
    let dynamic = reactive({
      dynamicState: false,
      dynamicType: 0,
      dyVideoCss: "width: 0px;font-size:15px",
      dyAnimeCss: "width: 0px;font-size:15px",
      dyColCss: "width: 0px;font-size:15px",
      dyLiveCss: "width: 0px;font-size:15px",
      borderColor: "width: 0px;color: #409EFF;font-size:15px",
      dynamicFun() {
        this.dyVideo();
        dynamic.dynamicState = true;
      },
      dyVideo() {
        dynamic.dynamicType = 0;
        dynamic.dyVideoCss = dynamic.borderColor;
        dynamic.dyAnimeCss = "";
        dynamic.dyColCss = "";
        dynamic.dyLiveCss = "";
      },
      dyAnime() {
        dynamic.dynamicType = 1;
        dynamic.dyAnimeCss = dynamic.borderColor;
        dynamic.dyVideoCss = "";
        dynamic.dyColCss = "";
        dynamic.dyLiveCss = "";
      },
      dyCol() {
        dynamic.dynamicType = 2;
        dynamic.dyAnimeCss = "";
        dynamic.dyVideoCss = "";
        dynamic.dyColCss = dynamic.borderColor;
        dynamic.dyLiveCss = "";
      },
      dyLive() {
        dynamic.dynamicType = 3;
        dynamic.dyAnimeCss = "";
        dynamic.dyVideoCss = "";
        dynamic.dyColCss = "";
        dynamic.dyLiveCss = dynamic.borderColor;
      },
    });

    let refAvatar = toRefs(avatar);
    let refDynamic = toRefs(dynamic);
    // 生命函数
    onMounted(() => {
      getPercentage();
      console.log("获取经验值和等级成功");
    });

    // 获取经验值显示等级和进度条
    function getPercentage() {
      let xp = avatar.xp;
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
      return (
        (avatar.percentage = percentage),
        (avatar.level = level),
        (avatar.levelCss = levelCss)
      );
    }

    return { headmenu, ...refAvatar, ...refDynamic };
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
  border-radius: 20px;
}

.dynamic {
  width: 340px;
  height: 520px;
  z-index: 998;
  position: absolute;
  left: 1240px;
  border-radius: 20px;
  border: 1px solid #e5eaf3;
  padding: 5px 10px;
}

.dyvideo {
  margin-top: 10px;
  height: 483px;
  overflow-y: auto;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.dyvideo::-webkit-scrollbar {
  display: none;
}
.dyanime {
  overflow-y: auto;
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
  height: 483px;
}
.dyanime::-webkit-scrollbar {
  display: none;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
  font-size: 15px;
}
</style>
