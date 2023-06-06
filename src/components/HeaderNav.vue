<template>
  <div>
    <!-- 顶栏菜单 -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      style="width: 100vw; position: absolute; right: 0px"
    >
      <div class="flex-grow" />
      <!-- LOGO -->
      <el-menu-item
        index="0"
        @mouseover="debugOver"
        @mouseleave="debugLeave"
        @click="toHome"
        >qiliqili</el-menu-item
      >
      <div class="flex-grow" />
      <!-- 搜索框 -->
      <el-input
        v-model="searchValue"
        placeholder="请输入关键词"
        class="input-with-select"
      >
        <template #append>
          <el-button @click="goToSearchPage">搜索</el-button>
        </template>
      </el-input>
      <div class="flex-grow" />
      <!-- 头像 -->
      <el-menu-item index="1" @mouseover="avatarOver" @mouseleave="avatarLeave">
        <el-avatar
          :size="40"
          :src="circleUrl"
          :style="avatarUse"
          @click="goToPersonalPage"
        />
      </el-menu-item>
      <!-- 消息的下拉菜单 -->
      <el-dropdown>
        <el-menu-item index="2" @click="toAnswerMe">
          <span class="el-dropdown-link"> 消息 </span>
        </el-menu-item>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="toAnswerMe">回复我的</el-dropdown-item>
            <el-dropdown-item @click="toGoods">收到的赞</el-dropdown-item>
            <el-dropdown-item @click="toSysMsg">系统通知</el-dropdown-item>
            <el-dropdown-item @click="toMyMsg">我的消息</el-dropdown-item>
            <el-dropdown-item @click="toMsgOpt">消息设置</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-menu-item
        index="3"
        @mouseover="dynamicOver"
        @mouseleave="dynamicLeave"
        @click="toDya"
        >动态</el-menu-item
      >
      <el-menu-item
        index="4"
        @mouseover="subOver"
        @mouseleave="subLeave"
        @click="toPerSub"
        >订阅</el-menu-item
      >
      <el-menu-item
        index="5"
        @mouseover="colOver"
        @mouseleave="colLeave"
        @click="toPerCol"
        >收藏</el-menu-item
      >
      <el-menu-item
        index="6"
        @mouseover="hisOver"
        @mouseleave="hisLeave"
        @click="toHistory"
        >历史</el-menu-item
      >
      <div class="flex-grow" />
    </el-menu>
    <!-- logo_debug -->
    <div
      style="
        width: 280px;
        height: 100px;
        z-index: 997;
        position: absolute;
        left: 140px;
        top: 73px;
        background-color: white;
        border-radius: 15px;
      "
      v-if="debugState == true"
      @mouseover="debugFuntype = 0"
      @mouseleave="debugLeave"
    >
      <div
        style="
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: stretch;
          justify-content: flex-start;
          margin-top: 10px;
        "
      >
        用户名:<input type="text" v-model="debugname" />
        <button @click="namechange">修改</button>
      </div>
      <div style="margin-top: 20px; display: flex">
        经验:<input type="text" v-model="debugxp" />
        <button @click="xpchange">修改</button>
      </div>
    </div>
    <!-- 头像悬浮信息 -->
    <el-card
      v-show="avatarState == true"
      class="avatarInfo"
      @mouseover="(avatarState = true), (avatarUse = avatarCss)"
      @mouseleave="(avatarState = false), (avatarUse = avatarOri)"
    >
      <h4
        class="username"
        style="text-align: center; margin: 0px auto"
        @click="goToPersonalPage"
      >
        {{ avatarName }}
      </h4>
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
        <span style="margin-top: -29px" class="avatag">
          <p style="height: 10px; font-size: 15px">47</p>
          <p style="font-size: 13px">关注</p>
        </span>
        <span style="margin-top: -29px" class="avatag">
          <p style="height: 10px; font-size: 15px">114514</p>
          <p style="font-size: 13px">粉丝</p>
        </span>
        <span style="margin-top: -29px" class="avatag">
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
        <li class="list">个人中心</li>
        <li class="list">投稿管理</li>
        <li class="list">我的钱包</li>
        <li class="list">直播中心</li>
        <li class="list">商城</li>
      </ul>
      <el-button type="info" plain style="width: 100%; margin: 0px 0px 10px 0px"
        >退出登录</el-button
      >
    </el-card>
    <!-- 动态悬浮信息 -->
    <div
      class="dynamic"
      v-show="dynamicState"
      @mouseover="(dynamicState = true), (dyFunType = 0)"
      @mouseleave="dynamicState = false"
    >
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
              <div style="background-color: #909399; width: 100%; height: 85px">
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
                width: 35%;
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
              <h4 style="margin-bottom: -15px">集名{{ i }}</h4>
              <h5>番名{{ i }}</h5>
            </div>
          </div>
        </div>
      </div>
      <!-- 专栏列表 -->
      <div v-if="dynamicType == 2">
        <div class="dycol">
          <el-card
            :body-style="{ padding: '0px', width: '100%', height: '100%' }"
            v-for="i in 10"
            :key="i"
            style="
              border-radius: 15px;
              margin-bottom: 15px;
              width: 90%;
              height: 180px;
            "
          >
            <div style="background-color: #909399; width: 100%; height: 60%">
              封面{{ i }}
            </div>
            <div
              style="
                display: flex;
                flex-direction: column;
                align-content: center;
                justify-content: space-between;
                align-items: flex-start;
              "
            >
              <h4 style="margin-bottom: -16px; margin-top: 3px">标题{{ i }}</h4>
              <p>介绍{{ i }}</p>
            </div>
          </el-card>
        </div>
      </div>
      <!-- 直播列表 -->
      <div v-if="dynamicType == 3">
        <div class="dylive">
          <div
            v-for="i in 10"
            :key="i"
            style="
              margin-bottom: 10px;
              width: 98%;
              border: 1px solid #e5eaf3;
              border-radius: 50px;
              height: 70px;
              display: flex;
            "
          >
            <el-avatar
              :size="50"
              :src="circleUrl"
              style="margin: 10px 20px 0px 10px"
            />
            <h3 style="margin-top: 22px">主播名{{ i }}</h3>
          </div>
        </div>
      </div>
    </div>
    <!-- 订阅悬浮信息 -->
    <div
      class="subscribe"
      v-show="subState"
      @mouseover="(subState = true), (subFunType = 0)"
      @mouseleave="subState = false"
    >
      <!-- 订阅菜单 -->
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
          <el-button text size="small" @click="subAnime" :style="subAnimeCss"
            >追番</el-button
          >
          <el-button text size="small" @click="subVideo" :style="subVideoCss"
            >追剧</el-button
          >
        </div>

        <el-button round style="margin-left: 87px">查看更多</el-button>
      </div>
      <!-- 订阅内容 -->

      <!-- 追番列表 -->
      <div v-if="subType == 0">
        <div class="subanime">
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
                width: 35%;
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
              <h4 style="margin-bottom: -15px">番名{{ i }}</h4>
              <h5>第{{ i }}话</h5>
            </div>
          </div>
        </div>
      </div>

      <!-- 追剧列表 -->
      <div v-if="subType == 1">
        <div class="subvideo">
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
                width: 35%;
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
              <h4 style="margin-bottom: -15px">剧名{{ i }}</h4>
              <h5>第{{ i }}话</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 收藏悬浮信息 -->
    <div
      class="collect"
      v-show="colState"
      @mouseover="(colState = true), (colFunType = 0)"
      @mouseleave="colLeave"
    >
      <!-- 收藏菜单 -->
      <div
        style="
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-content: center;

          align-items: center;
          margin-top: 10px;
        "
      >
        <el-dropdown type="primary" @command="handleCommand" trigger="click">
          <el-button
            round
            type="primary"
            style="min-width: 85px; max-width: 99px"
          >
            {{ selectItem }}
          </el-button>

          <template #dropdown>
            <el-dropdown-menu @mouseover="(colState = true), (colFunType = 0)">
              <el-dropdown-item command="默认收藏夹"
                >默认收藏夹</el-dropdown-item
              >
              <el-dropdown-item command="自定义收藏夹1"
                >自定义收藏夹 1</el-dropdown-item
              >
              <el-dropdown-item command="自定义收藏夹2"
                >自定义收藏夹 2</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <input
          type="text"
          v-model="colInput"
          placeholder="请输入关键词"
          style="
            height: 25px;
            margin-left: 5px;
            border: none;
            border-bottom: 1px solid #909399;
            outline: none;
            font-size: 10px;
            width: 160px;
          "
        />
        <el-button round size="small" style="margin-left: 15px"
          >查看更多</el-button
        >
      </div>
      <!-- 收藏内容 -->
      <!-- 默认收藏夹列表 -->
      <div v-if="contentType == 0">
        <div class="colList">
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
                width: 35%;
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
              <h4 style="margin-bottom: -15px">默认收藏夹-标题{{ i }}</h4>
              <h5>默认收藏夹-作者{{ i }}</h5>
            </div>
          </div>
        </div>
      </div>
      <!-- 自定收藏夹1列表 -->
      <div v-if="contentType == 1">
        <div class="colList">
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
                width: 35%;
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
              <h4 style="margin-bottom: -15px">自定收藏夹1-标题{{ i }}</h4>
              <h5>自定收藏夹1-作者{{ i }}</h5>
            </div>
          </div>
        </div>
      </div>
      <!-- 自定收藏夹2列表 -->
      <div v-if="contentType == 2">
        <div class="colList">
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
                width: 35%;
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
              <h4 style="margin-bottom: -15px">自定收藏夹2-标题{{ i }}</h4>
              <h5>自定收藏夹2-作者{{ i }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 历史悬浮信息 -->
    <div
      class="history"
      v-show="hisState"
      @mouseover="(hisState = true), (hisFunType = 0)"
      @mouseleave="hisLeave"
    >
      <!-- 历史菜单 -->
      <div
        style="
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-content: center;

          align-items: center;
          margin-top: 10px;
        "
      >
        <input
          type="text"
          v-model="colInput"
          placeholder="请输入关键词"
          style="
            height: 25px;
            margin-left: 5px;
            border: none;
            border-bottom: 1px solid #909399;
            outline: none;
            font-size: 10px;
            width: 240px;
          "
        />
        <el-button round size="small" style="margin-left: 15px"
          >查看更多</el-button
        >
      </div>
      <div
        style="
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-content: center;
          align-items: center;
          justify-content: space-between;
        "
      >
        <p>过滤：</p>
        <div>
          <el-button round size="small">视频</el-button>
          <el-button round size="small">番剧</el-button>
          <el-button round size="small">专栏</el-button>
          <el-button round size="small">直播</el-button>
        </div>
      </div>
      <!-- 历史内容 -->
      <div class="hisList">
        <!-- 今天 -->
        <div>
          <span>今天</span>
          <div
            v-for="i in 3"
            :key="i"
            style="
              width: 99%;
              height: 50px;
              border: 1px solid #e5eaf3;
              border-radius: 15px;
              margin-bottom: 10px;
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
            "
          >
            <div
              style="
                background-color: #909399;
                width: 25%;
                height: 100%;
                border-radius: 15px;
              "
            >
              封面{{ i }}
            </div>
            <div
              style="
                display: flex;
                margin-left: 10px;
                flex-direction: column;
                justify-content: space-around;
              "
            >
              <h4 style="margin-bottom: -6px; margin-top: 14px">标题{{ i }}</h4>
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: space-between;
                "
              >
                <p style="margin-right: 142px; font-size: 13px">作者{{ i }}</p>
                <p style="font-size: 13px">观看时间{{ i }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 昨天 -->
        <div>
          <span>昨天</span>
          <div
            v-for="i in 3"
            :key="i"
            style="
              width: 99%;
              height: 50px;
              border: 1px solid #e5eaf3;
              border-radius: 15px;
              margin-bottom: 10px;
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
            "
          >
            <div
              style="
                background-color: #909399;
                width: 25%;
                height: 100%;
                border-radius: 15px;
              "
            >
              封面{{ i }}
            </div>
            <div
              style="
                display: flex;
                margin-left: 10px;
                flex-direction: column;
                justify-content: space-around;
              "
            >
              <h4 style="margin-bottom: -6px; margin-top: 14px">标题{{ i }}</h4>
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: space-between;
                "
              >
                <p style="margin-right: 142px; font-size: 13px">作者{{ i }}</p>
                <p style="font-size: 13px">观看时间{{ i }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 本周 -->
        <div>
          <span>本周</span>
          <div
            v-for="i in 5"
            :key="i"
            style="
              width: 99%;
              height: 50px;
              border: 1px solid #e5eaf3;
              border-radius: 15px;
              margin-bottom: 10px;
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
            "
          >
            <div
              style="
                background-color: #909399;
                width: 25%;
                height: 100%;
                border-radius: 15px;
              "
            >
              封面{{ i }}
            </div>
            <div
              style="
                display: flex;
                margin-left: 10px;
                flex-direction: column;
                justify-content: space-around;
              "
            >
              <h4 style="margin-bottom: -6px; margin-top: 14px">标题{{ i }}</h4>
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: space-between;
                "
              >
                <p style="margin-right: 142px; font-size: 13px">作者{{ i }}</p>
                <p style="font-size: 13px">观看时间{{ i }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "HeaderNav",
  setup() {
    var router = useRouter();

    // 菜单栏
    let headmenu = reactive({
      searchValue: "",
      goToSearchPage() {
        router.push({
          path: "/searchpage",
          query: {
            searchValue: headmenu.searchValue,
          },
        });
      },
    });
    // logo
    let logo = reactive({
      debugState: false,
      debugname: "",
      debugxp: 0,
      debugFuntype: 0,
      debugOver() {
        logo.debugState = true;
      },
      debugLeave() {
        logo.debugFuntype = 1;
        setTimeout(logo.debugNoDisplay, 300);
      },
      debugNoDisplay() {
        if (logo.debugFuntype == 1) {
          logo.debugState = false;
        }
      },
      namechange() {
        avatar.avatarName = this.debugname;
      },
      xpchange() {
        avatar.xp = this.debugxp;
        getPercentage();
        console.log("获取经验值和等级成功");
      },
      toHome() {
        router.push({ path: "/" });
        localStorage.clear();
      },
    });
    // 头像
    let avatar = reactive({
      avatarState: false,
      percentage: 0,
      avatarName: "用户名",
      avatarOri: "margin-top: 9px;z-index:999;",
      avatarUse: "margin-top: 9px;z-index:999;",
      avatarCss: "top:30px;z-index:999;position: relative;",
      level: "",
      levelCss: "",
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
      goToPersonalPage() {
        router.push({ path: "/personalpage" });
      },
    });
    // 动态
    let dynamic = reactive({
      dynamicState: false,
      dynamicType: 0,
      dyFunType: 0,
      dyVideoCss: "width: 0px;font-size:15px",
      dyAnimeCss: "width: 0px;font-size:15px",
      dyColCss: "width: 0px;font-size:15px",
      dyLiveCss: "width: 0px;font-size:15px",
      borderColor: "width: 0px;color: #409EFF;font-size:15px",
      dynamicOver() {
        dynamic.dyVideo();
        dynamic.dynamicState = true;
        subscribe.subState = false;
        collect.colState = false;
        history.hisState = false;
        // console.log('进入动态标签')
      },
      dynamicLeave() {
        dynamic.dyFunType = 1;
        setTimeout(dynamic.dynamicNoDisplay, 300);
        // console.log('离开动态标签')
      },
      dynamicNoDisplay() {
        if (dynamic.dyFunType == 1) {
          dynamic.dynamicState = false;
          // console.log('关闭动态信息')
        }
      },
      dyVideo() {
        dynamic.dynamicType = 0;
        dynamic.dyVideoCss = dynamic.borderColor;
        dynamic.dyAnimeCss = "width: 0px;font-size:15px";
        dynamic.dyColCss = "width: 0px;font-size:15px";
        dynamic.dyLiveCss = "width: 0px;font-size:15px";
      },
      dyAnime() {
        dynamic.dynamicType = 1;
        dynamic.dyAnimeCss = dynamic.borderColor;
        dynamic.dyVideoCss = "width: 0px;font-size:15px";
        dynamic.dyColCss = "width: 0px;font-size:15px";
        dynamic.dyLiveCss = "width: 0px;font-size:15px";
      },
      dyCol() {
        dynamic.dynamicType = 2;
        dynamic.dyAnimeCss = "width: 0px;font-size:15px";
        dynamic.dyVideoCss = "width: 0px;font-size:15px";
        dynamic.dyColCss = dynamic.borderColor;
        dynamic.dyLiveCss = "width: 0px;font-size:15px";
      },
      dyLive() {
        dynamic.dynamicType = 3;
        dynamic.dyAnimeCss = "width: 0px;font-size:15px";
        dynamic.dyVideoCss = "width: 0px;font-size:15px";
        dynamic.dyColCss = "width: 0px;font-size:15px";
        dynamic.dyLiveCss = dynamic.borderColor;
      },
    });
    // 订阅
    let subscribe = reactive({
      subState: false,
      subType: 0,
      subFunType: 0,
      subAnimeCss: "width: 0px;font-size:15px",
      subVideoCss: "width: 0px;font-size:15px",
      borderColor: "width: 0px;color: #409EFF;font-size:15px",
      subAnime() {
        subscribe.subType = 0;
        subscribe.subVideoCss = "width: 0px;font-size:15px";
        subscribe.subAnimeCss = subscribe.borderColor;
      },
      subVideo() {
        subscribe.subType = 1;
        subscribe.subVideoCss = subscribe.borderColor;
        subscribe.subAnimeCss = "width: 0px;font-size:15px";
      },

      subOver() {
        subscribe.subAnime();
        subscribe.subState = true;
        dynamic.dynamicState = false;
        collect.colState = false;
        history.hisState = false;
      },
      subLeave() {
        subscribe.subFunType = 1;
        setTimeout(subscribe.subNoDisplay, 300);
      },
      subNoDisplay() {
        if (subscribe.subFunType == 1) {
          subscribe.subState = false;
        }
      },
    });
    // 收藏
    let collect = reactive({
      colState: false,
      colType: 0,
      colFunType: 0,
      contentType: 0,
      selectItem: "",
      handleCommand(command) {
        if (command == "默认收藏夹") {
          collect.contentType = 0;
          collect.selectItem = "默认收藏夹";
        } else if (command == "自定义收藏夹1") {
          collect.contentType = 1;
          collect.selectItem = "自定义收藏夹1";
        } else if (command == "自定义收藏夹2") {
          collect.contentType = 2;
          collect.selectItem = "自定义收藏夹2";
        }
        console.log(command);
      },
      colOver() {
        collect.colState = true;
        subscribe.subState = false;
        dynamic.dynamicState = false;
        history.hisState = false;
        collect.contentType = 0;
        collect.selectItem = "默认收藏夹";
      },
      colLeave() {
        collect.colFunType = 1;
        setTimeout(collect.colNoDisplay, 300);
      },
      colNoDisplay() {
        if (collect.colFunType == 1) {
          collect.colState = false;
        }
      },
    });
    // 历史
    let history = reactive({
      hisState: false,
      hisFunType: 0,

      hisOver() {
        collect.colState = false;
        subscribe.subState = false;
        dynamic.dynamicState = false;
        history.hisState = true;
      },
      hisLeave() {
        history.hisFunType = 1;
        setTimeout(history.hisNoDisplay, 300);
      },
      hisNoDisplay() {
        if (history.hisFunType == 1) {
          history.hisState = false;
        }
      },
    });

    // 跳转函数
    let skipFun = reactive({
      toHistory() {
        router.push({ path: "/history" });
      },
      toPerSub() {
        router.push({ path: "/personalsub" });
      },
      toPerCol() {
        router.push({ path: "/personalcol" });
      },
      toDya() {
        router.push({ path: "/dynamic" });
      },
      toAnswerMe() {
        router.push({ path: "/answerme" });
      },
      toGoods() {
        router.push({ path: "/msggoods" });
      },
      toMyMsg() {
        router.push({ path: "/mymsg" });
      },
      toSysMsg() {
        router.push({ path: "/sysmsg" });
      },
      toMsgOpt() {
        router.push({ path: "/msgopt" });
      },
    });

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

    return {
      ...toRefs(skipFun),
      ...toRefs(headmenu),
      ...toRefs(logo),
      ...toRefs(avatar),
      ...toRefs(dynamic),
      ...toRefs(subscribe),
      ...toRefs(collect),
      ...toRefs(history),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.el-header {
  z-index: 998;
  overflow: auto;
}
.el-header::-webkit-scrollbar {
  display: none;
}
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
  left: 61.4%;
  border-radius: 20px;
  top: 65px;
  visibility: visible;
  transition: visibility 0.5s ease;
}
.username:hover {
  color: #409eff;
}
.dynamic {
  width: 340px;
  height: 520px;
  z-index: 998;
  position: absolute;
  left: 1250px;
  top: 65px;
  border-radius: 20px;
  border: 1px solid #e5eaf3;
  padding: 5px 10px;
  background-color: white;
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

.dycol {
  overflow-y: auto;
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
  height: 483px;
}
.dycol::-webkit-scrollbar {
  display: none;
}

.dylive {
  overflow-y: auto;
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
  height: 483px;
}
.dylive::-webkit-scrollbar {
  display: none;
}

.subscribe {
  width: 340px;
  height: 520px;
  z-index: 998;
  position: absolute;
  left: 1315px;
  top: 65px;
  border-radius: 20px;
  border: 1px solid #e5eaf3;
  padding: 5px 10px;
  background-color: white;
}

.subanime {
  overflow-y: auto;
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
  height: 483px;
}
.subanime::-webkit-scrollbar {
  display: none;
}

.subvideo {
  overflow-y: auto;
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
  height: 483px;
}
.subvideo::-webkit-scrollbar {
  display: none;
}

.collect {
  width: 340px;
  height: 520px;
  z-index: 998;
  position: absolute;
  left: 1385px;
  top: 65px;
  border-radius: 20px;
  border: 1px solid #e5eaf3;
  padding: 5px 10px;
  background-color: white;
}
.colList {
  overflow-y: auto;
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
  height: 471px;
}
.colList::-webkit-scrollbar {
  display: none;
}

.history {
  width: 340px;
  height: 520px;
  z-index: 998;
  position: absolute;
  left: 1455px;
  top: 65px;
  border-radius: 20px;
  border: 1px solid #e5eaf3;
  padding: 5px 10px;
  background-color: white;
}

.hisList {
  overflow-y: auto;
  height: 431px;
}
.hisList::-webkit-scrollbar {
  display: none;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
  font-size: 15px;
}

.avatag:hover {
  color: #409eff;
}

.list {
  width: 200px;
  height: 30px;
  position: relative;
  right: 60px;
  text-align: center;
}
.list:hover {
  background-color: #d1d2d3;
}
</style>
