<template>
  <div class="common-layout">
    <el-container>
      <el-header class="el-header">
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
            >qiliqili</el-menu-item
          >
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
            @mouseover="dynamicOver"
            @mouseleave="dynamicLeave"
            >动态</el-menu-item
          >
          <el-menu-item index="4" @mouseover="subOver" @mouseleave="subLeave"
            >订阅</el-menu-item
          >
          <el-menu-item index="5" @mouseover="colOver" @mouseleave="colLeave"
            >收藏</el-menu-item
          >
          <el-menu-item index="6" @mouseover="hisOver" @mouseleave="hisLeave"
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
          v-show="avatarState"
          class="avatarInfo"
          @mouseover="(avatarState = true), (avatarUse = avatarCss)"
          @mouseleave="(avatarState = false), (avatarUse = avatarOri)"
        >
          <h4 style="text-align: center; margin: 0px auto">{{ avatarName }}</h4>
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
                <div
                  style="background-color: #909399; width: 100%; height: 60%"
                >
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
                  <h4 style="margin-bottom: -16px; margin-top: 3px">
                    标题{{ i }}
                  </h4>
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
              <el-button
                text
                size="small"
                @click="subAnime"
                :style="subAnimeCss"
                >追番</el-button
              >
              <el-button
                text
                size="small"
                @click="subVideo"
                :style="subVideoCss"
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
            <el-dropdown
              type="primary"
              @command="handleCommand"
              trigger="click"
            >
              <el-button
                round
                type="primary"
                style="min-width: 85px; max-width: 99px"
              >
                {{ selectItem }}
              </el-button>

              <template #dropdown>
                <el-dropdown-menu
                  @mouseover="(colState = true), (colFunType = 0)"
                >
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
                  <h4 style="margin-bottom: -6px; margin-top: 14px">
                    标题{{ i }}
                  </h4>
                  <div
                    style="
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: space-between;
                    "
                  >
                    <p style="margin-right: 142px; font-size: 13px">
                      作者{{ i }}
                    </p>
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
                  <h4 style="margin-bottom: -6px; margin-top: 14px">
                    标题{{ i }}
                  </h4>
                  <div
                    style="
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: space-between;
                    "
                  >
                    <p style="margin-right: 142px; font-size: 13px">
                      作者{{ i }}
                    </p>
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
                  <h4 style="margin-bottom: -6px; margin-top: 14px">
                    标题{{ i }}
                  </h4>
                  <div
                    style="
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: space-between;
                    "
                  >
                    <p style="margin-right: 142px; font-size: 13px">
                      作者{{ i }}
                    </p>
                    <p style="font-size: 13px">观看时间{{ i }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-header>
      <!-- 主体 -->
      <el-main class="el-main">
        <!-- 横幅 -->
        <div
          style="
            width: 100%;
            height: 210px;
            background-color: #67c23a;
            z-index: 1;
            position: absolute;
            top: 68px;
            left: 0px;
          "
        ></div>
        <!-- 内容 -->
        <div class="row">
          <el-row style="width: 100%">
            <el-col :span="1">
              <div
                style="background-color: #ffffff; width: 100%; height: 100%"
              ></div>
            </el-col>
            <el-col :span="22" style="background-color: white">
              <!-- tag列表 -->
              <div style="display: flex">
                <!-- 左图标 -->
                <div
                  style="
                    display: flex;
                    width: 14%;
                    height: 110px;
                    align-items: center;
                    justify-content: space-evenly;
                    flex-wrap: nowrap;
                    flex-direction: row;
                  "
                >
                  <!-- 动态 -->
                  <div
                    style="
                      width: 50px;
                      height: 50px;
                      border-radius: 50px;
                      background-color: orange;
                      font-size: 20px;
                      display: flex;
                      flex-direction: column;
                      align-items: baseline;
                      flex-wrap: nowrap;
                    "
                  >
                    <svg
                      viewBox="0 0 22 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon-bg--icon"
                      style="width: 40px; height: 40px; margin: 5px 0px 0px 5px"
                    >
                      <path
                        d="M6.41659 15.625C3.88528 15.625 1.83325 13.7782 1.83325 11.5H10.9999C10.9999 13.7782 8.94789 15.625 6.41659 15.625Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M15.125 16.0827C15.125 18.614 13.2782 20.666 11 20.666L11 11.4993C13.2782 11.4993 15.125 13.5514 15.125 16.0827Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M6.875 6.91667C6.875 9.44797 8.72183 11.5 11 11.5L11 2.33333C8.72182 2.33333 6.875 4.38536 6.875 6.91667Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M15.5833 7.375C13.052 7.375 11 9.22183 11 11.5H20.1667C20.1667 9.22183 18.1146 7.375 15.5833 7.375Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span style="margin-top: 10px; margin-bottom: -50px"
                      >动态</span
                    >
                  </div>
                  <!-- 热门 -->
                  <div
                    style="
                      width: 50px;
                      height: 50px;
                      border-radius: 50px;
                      background-color: #f07775;
                      font-size: 20px;
                      display: flex;
                      flex-direction: column;
                      align-items: baseline;
                      flex-wrap: nowrap;
                    "
                  >
                    <svg
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon-bg--icon"
                      style="width: 40px; height: 40px; margin: 5px 0px 0px 5px"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.89054 17.272L4.89277 17.2742C6.49674 18.8782 8.66472 19.7888 10.9624 19.7888C13.2503 19.7888 15.2113 19.0539 16.6107 17.6108L16.6108 17.6108L16.6128 17.6086C18.0002 16.1345 18.7835 14.182 18.7421 12.1819C18.7852 11.3835 18.6916 9.36321 17.4088 6.75488L17.4082 6.7537C17.209 6.35523 16.8163 6.06598 16.3391 5.96993C15.8904 5.87103 15.4021 6.01997 15.061 6.35741C14.9094 6.48781 14.7796 6.61755 14.6655 6.7317L14.6637 6.73348L14.6329 6.76426C14.2107 3.35588 12.6083 1.7368 11.1654 1.00465C11.148 0.987812 11.1265 0.967972 11.1036 0.950782C11.0775 0.931205 11.0311 0.900467 10.9694 0.888912C10.2276 0.608301 9.41043 1.01168 9.1237 1.77629L9.12314 1.7778C8.50566 3.46558 7.35287 4.62281 6.16627 5.76704C4.51756 7.33121 2.75938 9.03623 2.80163 12.093C2.75906 14.055 3.54464 15.8826 4.89054 17.272ZM3.04999 13.0648C3.01092 12.7459 2.99439 12.4218 3.00168 12.0939C2.95933 9.12977 4.6531 7.47834 6.30453 5.9116C7.49017 4.76831 8.67581 3.58267 9.31098 1.84655C9.56504 1.16904 10.2849 0.830288 10.9201 1.08435C10.9624 1.08435 11.0048 1.1267 11.0471 1.16904C11.9267 1.60884 12.8853 2.39635 13.5753 3.77299C12.8853 2.39633 11.9267 1.6088 11.0471 1.16901C11.0047 1.12666 10.9624 1.08432 10.9201 1.08432C10.2849 0.830251 9.56503 1.16901 9.31097 1.84651C8.6758 3.58263 7.49016 4.76827 6.30452 5.91157C4.65309 7.47831 2.95932 9.12973 3.00166 12.0938C2.99438 12.4218 3.01092 12.7459 3.04999 13.0648ZM14.477 7.18189C14.477 7.1819 14.477 7.18192 14.477 7.18193C14.5828 7.09724 14.6887 6.99138 14.8052 6.87493C14.9216 6.75849 15.0486 6.63146 15.1968 6.50442C15.4932 6.20801 15.9167 6.08098 16.2978 6.16567C16.7212 6.25036 17.06 6.50443 17.2294 6.84318C17.3088 7.0046 17.3835 7.16371 17.4539 7.32035C17.3835 7.1637 17.3087 7.00458 17.2294 6.84314C17.06 6.50439 16.7212 6.25032 16.2978 6.16563C15.9167 6.08094 15.4932 6.20798 15.1968 6.50439C15.0486 6.63142 14.9216 6.75845 14.8051 6.87489L14.8051 6.8749C14.7557 6.92437 14.7081 6.97191 14.6617 7.01675C14.5988 7.07745 14.5379 7.13318 14.477 7.18189ZM12.6977 6.35925C12.8428 7.15476 12.8833 7.97963 12.8679 8.74864C12.8679 8.79032 12.8704 8.8315 12.8754 8.87195C12.8704 8.83151 12.8679 8.79035 12.8679 8.74867C12.8833 7.97966 12.8428 7.15478 12.6977 6.35925ZM16.7358 10.6654C16.8108 11.1478 16.8483 11.6393 16.8483 12.1362V12.1786C16.8483 13.703 16.2978 15.2274 15.2392 16.3283C14.0535 17.4293 12.5291 18.0221 10.9201 17.9374C9.1416 17.9374 7.44783 17.2175 6.21984 15.9472C5.82743 15.5548 5.50448 15.1119 5.25584 14.6331C5.50447 15.1119 5.82743 15.5548 6.21983 15.9472C7.44782 17.2175 9.14159 17.9373 10.9201 17.9373C12.5291 18.022 14.0535 17.4292 15.2392 16.3283C16.2978 15.2273 16.8483 13.7029 16.8483 12.1785V12.1362C16.8483 11.6393 16.8108 11.1478 16.7358 10.6654ZM10.9306 17.7376C12.4802 17.8192 13.9509 17.2497 15.0989 16.1856C16.1154 15.1261 16.6483 13.655 16.6483 12.1785V12.1362C16.6483 10.8624 16.3969 9.6266 15.8955 8.49474C15.2436 9.11663 14.7845 9.49093 14.4179 9.68717C14.2122 9.79725 14.0268 9.85633 13.846 9.86789C13.6644 9.8795 13.5028 9.84219 13.3473 9.78249C12.9207 9.62211 12.6679 9.20129 12.6679 8.74864V8.74464L12.6679 8.74464C12.6889 7.69735 12.6046 6.55594 12.2954 5.53554C12.01 4.59379 11.5372 3.76766 10.7904 3.20655C9.96581 4.94926 8.72521 6.18561 7.58695 7.28323L7.50836 7.35967C5.97191 8.85397 4.81321 9.98087 4.85306 12.1325L4.85313 12.1362H4.85309C4.85309 13.5239 5.38326 14.8277 6.36125 15.8057L6.36365 15.8081L6.36363 15.8082C7.55387 17.0394 9.19573 17.7374 10.9201 17.7374H10.9306L10.9306 17.7376Z"
                        fill="#ffffff"
                      ></path>
                    </svg>
                    <span style="margin-top: 10px; margin-bottom: -50px"
                      >热门</span
                    >
                  </div>
                  <!-- 频道 -->
                  <div
                    style="
                      width: 50px;
                      height: 50px;
                      border-radius: 50px;
                      background-color: #59ca73;
                      font-size: 20px;
                      display: flex;
                      flex-direction: column;
                      align-items: baseline;
                      flex-wrap: nowrap;
                    "
                  >
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon-bg--icon"
                      style="width: 40px; height: 40px; margin: 5px 0px 0px 5px"
                    >
                      <circle
                        cx="5.6875"
                        cy="14"
                        r="3.5"
                        stroke="#ffffff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></circle>
                      <circle
                        cx="10.5"
                        cy="5.6875"
                        r="3.5"
                        stroke="#ffffff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></circle>
                      <circle
                        cx="15.3125"
                        cy="14"
                        r="3.5"
                        stroke="#ffffff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></circle>
                    </svg>
                    <span style="margin-top: 10px; margin-bottom: -50px"
                      >频道</span
                    >
                  </div>
                </div>
                <!-- 右tag -->
                <div style="width: 86%; display: flex">
                  <!-- 分割线左 -->
                  <div
                    style="
                      width: 80%;
                      height: 110px;
                      display: flex;
                      flex-direction: column;
                      justify-content: space-around;
                      align-items: flex-start;
                      flex-wrap: nowrap;
                      margin-top: 10px;
                      margin-left: 40px;
                    "
                  >
                    <div>
                      <el-button
                        style="width: 85px; height: 45px"
                        type="info"
                        plain
                        size="large"
                        v-for="(i, index) in tagItem1"
                        :key="index"
                        >{{ i }}</el-button
                      >
                    </div>
                    <div>
                      <el-button
                        style="width: 85px; height: 45px"
                        type="info"
                        plain
                        size="large"
                        v-for="(i, index) in tagItem2"
                        :key="index"
                        >{{ i }}</el-button
                      >
                      <el-dropdown style="margin-left: 12px">
                        <el-button
                          style="width: 85px; height: 45px"
                          type="info"
                          plain
                          size="large"
                          >更多</el-button
                        >
                        <template #dropdown>
                          <el-dropdown-menu>
                            <el-dropdown-item>搞笑</el-dropdown-item>
                            <el-dropdown-item>单机游戏</el-dropdown-item>
                            <el-dropdown-item>公益</el-dropdown-item>
                            <el-dropdown-item>虚拟up</el-dropdown-item>
                            <el-dropdown-item>公开课</el-dropdown-item>
                          </el-dropdown-menu>
                        </template>
                      </el-dropdown>
                    </div>
                  </div>
                  <!-- 分割线本体 -->
                  <el-divider
                    direction="vertical"
                    style="
                      height: 98px;
                      position: absolute;
                      left: 1530px;
                      top: 17px;
                    "
                  />
                  <!-- 分割线右 -->
                  <div
                    style="
                      display: flex;
                      flex-direction: column;
                      justify-content: space-around;
                      margin-left: 20px;
                    "
                  >
                    <div
                      style="
                        display: flex;
                        width: 217px;
                        flex-direction: row;
                        flex-wrap: nowrap;
                        justify-content: space-around;
                        align-items: center;
                      "
                    >
                      <span :style="zhuanlan" @mouseover="changeFont1"
                        >专栏</span
                      >
                      <span :style="huodong" @mouseover="changeFont2"
                        >活动</span
                      >
                      <span :style="shequ" @mouseover="changeFont3"
                        >社区中心</span
                      >
                    </div>
                    <div
                      style="
                        display: flex;
                        width: 217px;
                        flex-direction: row;
                        flex-wrap: nowrap;
                        justify-content: space-around;
                        align-items: center;
                      "
                    >
                      <el-dropdown style="font-size: 17px">
                        <span :style="zhibo" @mouseover="changeFont4"
                          >直播</span
                        >
                        <template #dropdown>
                          <el-dropdown-menu>
                            <el-dropdown-item>全部</el-dropdown-item>
                            <el-dropdown-item>娱乐</el-dropdown-item>
                            <el-dropdown-item>知识</el-dropdown-item>
                            <el-dropdown-item>单机</el-dropdown-item>
                            <el-dropdown-item>手游</el-dropdown-item>
                          </el-dropdown-menu>
                        </template>
                      </el-dropdown>
                      <span :style="ketang" @mouseover="changeFont5">课堂</span>
                      <span :style="xinge" @mouseover="changeFont6"
                        >新歌热榜</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!-- 推荐视频列表 -->
              <div style="display: flex">
                <!-- 轮播图 -->
                <el-carousel
                  trigger="click"
                  height="430px"
                  style="
                    width: 570px;
                    border-radius: 10px;
                    height: 430px;
                    margin: 20px 0px 0px 20px;
                  "
                >
                  <el-carousel-item v-for="item in 4" :key="item">
                    <h3 class="small justify-center" text="2xl">{{ item }}</h3>
                  </el-carousel-item>
                </el-carousel>
                <!-- 视频列表 -->
                <div
                  style="
                    display: flex;
                    width: 1080px;
                    height: 500px;

                    margin: 20px 0px 0px 10px;
                    flex-wrap: wrap;
                    flex-direction: row;
                  "
                >
                  <div
                    style="
                      width: 255px;
                      height: 235px;

                      margin-left: 10px;
                      border-radius: 10px;
                    "
                    v-for="i in 8"
                    :key="i"
                  >
                    <div
                      style="
                        width: 100%;
                        height: 165px;
                        background-color: rgb(144, 147, 153);
                        border-radius: 10px;
                      "
                    >
                      图片{{ i }}
                    </div>
                    <span>价绍{{ i }}</span>
                    <p>作者{{ i }}</p>
                  </div>
                </div>
              </div>
              <!-- 赛事 -->
              <div style="margin-top: -10px; width: 100%; height: auto">
                <h2 style="margin-left: 15px">赛事</h2>
                <div
                  style="
                    display: flex;
                    width: 100%;
                    height: 300px;
                    flex-wrap: nowrap;
                    flex-direction: row;
                  "
                >
                  <div
                    style="
                      width: 16%;
                      height: 235px;
                      margin-left: 10px;
                      border-radius: 10px;
                    "
                    v-for="i in 6"
                    :key="i"
                  >
                    <div
                      style="
                        width: 100%;
                        height: 165px;
                        background-color: rgb(144, 147, 153);
                        border-radius: 10px;
                      "
                    >
                      图片{{ i }}
                    </div>
                    <span>价绍{{ i }}</span>
                    <p>作者{{ i }}</p>
                  </div>
                </div>
              </div>
              <!-- 番剧 -->
              <div
                style="
                  height: 800px;
                  width: 100%;
                  display: flex;
                  flex-direction: row;
                  flex-wrap: nowrap;
                  justify-content: flex-start;
                  align-items: baseline;
                "
              >
                <!-- 左边更新表 -->
                <div
                  style="
                    width: 83%;
                    display: flex;
                    align-items: center;
                    flex-wrap: nowrap;
                    flex-direction: column;
                    justify-content: space-between;
                    margin-right: 3px;
                  "
                >
                  <!-- 顶栏 -->
                  <div
                    style="
                      display: flex;
                      flex-direction: row;
                      width: 100%;
                      align-items: center;
                      flex-wrap: nowrap;
                    "
                  >
                    <div style="display: flex">
                      <h2 style="margin-left: 15px">番剧</h2>
                      <el-menu
                        default-active="0"
                        style="
                          width: 640px;
                          border-radius: 50px;
                          height: 32px;
                          margin: 23px 0px 0px 10px;
                          padding: 0px;
                          display: flex;
                          justify-content: space-evenly;
                          align-items: center;
                          flex-wrap: nowrap;
                          flex-direction: row;
                        "
                        background-color="#CFD3DC"
                        active-text-color="#409EFF"
                        mode="horizontal"
                        @select="animeSelect"
                        collapse-transition="false"
                        ellipsis="false"
                      >
                        <el-menu-item index="0" @click="weekday=0">最近更新</el-menu-item>
                        <el-menu-item index="1" @click="weekday=1">周一</el-menu-item>
                        <el-menu-item index="2" @click="weekday=2">周二</el-menu-item>
                        <el-menu-item index="3" @click="weekday=3">周三</el-menu-item>
                        <el-menu-item index="4" @click="weekday=4">周四</el-menu-item>
                        <el-menu-item index="5" @click="weekday=5">周五</el-menu-item>
                        <el-menu-item index="6" @click="weekday=6">周六</el-menu-item>
                        <el-menu-item index="7" @click="weekday=7">周日</el-menu-item>
                      </el-menu>
                    </div>
                    <div style="margin-left: 450px">
                      <el-button size="large">新番时间表</el-button>
                      <el-button size="large">查看更多</el-button>
                    </div>
                  </div>

                  <!-- 番剧列表 -->
                  <div
                  v-if="weekday==0"
                    style="
                      width: 100%;
                      height: auto;
                      display: flex;
                      padding-left: 12px;
                      flex-flow: row wrap;
                      justify-content: flex-start;
                      flex-wrap: wrap;
                      flex-direction: row;
                    "
                  >
                    <div
                      style="
                        width: 19%;
                        height: 260px;
                        margin-left: 10px;
                        margin-top:5px
                        border-radius: 10px;
                      "
                      v-for="i in 10"
                      :key="i"
                    >
                      <div
                        style="
                          width: 100%;
                          height: 165px;
                          background-color: rgb(144, 147, 153);
                          border-radius: 10px;
                        "
                      >
                        图片{{ i }}
                      </div>
                      <span>番剧名{{ i }}</span>
                      <p>更新到第几集</p>
                    </div>
                  </div>
                  <!-- 周一 -->
                  <div
                  v-if="weekday==1"
                    style="
                      width: 100%;
                      height: auto;
                      display: flex;
                      padding-left: 12px;
                      flex-flow: row wrap;
                      justify-content: flex-start;
                      flex-wrap: wrap;
                      flex-direction: row;
                    "
                  >
                    <div
                      style="
                        width: 19%;
                        height: 260px;
                        margin-left: 10px;
                        margin-top:5px
                        border-radius: 10px;
                      "
                      v-for="i in 1"
                      :key="i"
                    >
                      <div
                        style="
                          width: 100%;
                          height: 165px;
                          background-color: rgb(144, 147, 153);
                          border-radius: 10px;
                        "
                      >
                        周一的图片{{ i }}
                      </div>
                      <span>周一的番剧名{{ i }}</span>
                      <p>更新到第几集</p>
                    </div>
                  </div>
                  <!-- 周二 -->
                  <div
                  v-if="weekday==2"
                    style="
                      width: 100%;
                      height: auto;
                      display: flex;
                      padding-left: 12px;
                      flex-flow: row wrap;
                      justify-content: flex-start;
                      flex-wrap: wrap;
                      flex-direction: row;
                    "
                  >
                    <div
                      style="
                        width: 19%;
                        height: 260px;
                        margin-left: 10px;
                        margin-top:5px
                        border-radius: 10px;
                      "
                      v-for="i in 2"
                      :key="i"
                    >
                      <div
                        style="
                          width: 100%;
                          height: 165px;
                          background-color: rgb(144, 147, 153);
                          border-radius: 10px;
                        "
                      >
                        周二的图片{{ i }}
                      </div>
                      <span>周二的番剧名{{ i }}</span>
                      <p>更新到第几集</p>
                    </div>
                  </div>
                  <!-- 周三 -->
                  <div
                  v-if="weekday==3"
                    style="
                      width: 100%;
                      height: auto;
                      display: flex;
                      padding-left: 12px;
                      flex-flow: row wrap;
                      justify-content: flex-start;
                      flex-wrap: wrap;
                      flex-direction: row;
                    "
                  >
                    <div
                      style="
                        width: 19%;
                        height: 260px;
                        margin-left: 10px;
                        margin-top:5px
                        border-radius: 10px;
                      "
                      v-for="i in 3"
                      :key="i"
                    >
                      <div
                        style="
                          width: 100%;
                          height: 165px;
                          background-color: rgb(144, 147, 153);
                          border-radius: 10px;
                        "
                      >
                        周三的图片{{ i }}
                      </div>
                      <span>周三的番剧名{{ i }}</span>
                      <p>更新到第几集</p>
                    </div>
                  </div>
                  <!-- 周四 -->
                  <div
                  v-if="weekday==4"
                    style="
                      width: 100%;
                      height: auto;
                      display: flex;
                      padding-left: 12px;
                      flex-flow: row wrap;
                      justify-content: flex-start;
                      flex-wrap: wrap;
                      flex-direction: row;
                    "
                  >
                    <div
                      style="
                        width: 19%;
                        height: 260px;
                        margin-left: 10px;
                        margin-top:5px
                        border-radius: 10px;
                      "
                      v-for="i in 4"
                      :key="i"
                    >
                      <div
                        style="
                          width: 100%;
                          height: 165px;
                          background-color: rgb(144, 147, 153);
                          border-radius: 10px;
                        "
                      >
                        周四的图片{{ i }}
                      </div>
                      <span>周四的番剧名{{ i }}</span>
                      <p>更新到第几集</p>
                    </div>
                  </div>
                  <!-- 周五 -->
                  <div
                  v-if="weekday==5"
                    style="
                      width: 100%;
                      height: auto;
                      display: flex;
                      padding-left: 12px;
                      flex-flow: row wrap;
                      justify-content: flex-start;
                      flex-wrap: wrap;
                      flex-direction: row;
                    "
                  >
                    <div
                      style="
                        width: 19%;
                        height: 260px;
                        margin-left: 10px;
                        margin-top:5px
                        border-radius: 10px;
                      "
                      v-for="i in 5"
                      :key="i"
                    >
                      <div
                        style="
                          width: 100%;
                          height: 165px;
                          background-color: rgb(144, 147, 153);
                          border-radius: 10px;
                        "
                      >
                        周五的图片{{ i }}
                      </div>
                      <span>周五的番剧名{{ i }}</span>
                      <p>更新到第几集</p>
                    </div>
                  </div>
                  <!-- 周六 -->
                  <div
                  v-if="weekday==6"
                    style="
                      width: 100%;
                      height: auto;
                      display: flex;
                      padding-left: 12px;
                      flex-flow: row wrap;
                      justify-content: flex-start;
                      flex-wrap: wrap;
                      flex-direction: row;
                    "
                  >
                    <div
                      style="
                        width: 19%;
                        height: 260px;
                        margin-left: 10px;
                        margin-top:5px
                        border-radius: 10px;
                      "
                      v-for="i in 8"
                      :key="i"
                    >
                      <div
                        style="
                          width: 100%;
                          height: 165px;
                          background-color: rgb(144, 147, 153);
                          border-radius: 10px;
                        "
                      >
                        周六的图片{{ i }}
                      </div>
                      <span>周六的番剧名{{ i }}</span>
                      <p>更新到第几集</p>
                    </div>
                  </div>
                  <!-- 周日 -->
                  <div
                  v-if="weekday==7"
                    style="
                      width: 100%;
                      height: auto;
                      display: flex;
                      padding-left: 12px;
                      flex-flow: row wrap;
                      justify-content: flex-start;
                      flex-wrap: wrap;
                      flex-direction: row;
                    "
                  >
                    <div
                      style="
                        width: 19%;
                        height: 260px;
                        margin-left: 10px;
                        margin-top:5px
                        border-radius: 10px;
                      "
                      v-for="i in 7"
                      :key="i"
                    >
                      <div
                        style="
                          width: 100%;
                          height: 165px;
                          background-color: rgb(144, 147, 153);
                          border-radius: 10px;
                        "
                      >
                        周日的图片{{ i }}
                      </div>
                      <span>周日的番剧名{{ i }}</span>
                      <p>更新到第几集</p>
                    </div>
                  </div>
                </div>
                <!-- 右边排行榜 -->
                <div style="width: 17%; display: flex; flex-direction: column;margin-right: 7px;">
                  <!-- 排行榜顶栏 -->
                  <div
                    style="
                      display: flex;
                      flex-direction: row;
                      flex-wrap: nowrap;
                      justify-content: space-between;
                      align-items: baseline;
                    "
                  >
                    <h2>排行榜</h2>
                    <el-button size="large">更多</el-button>
                  </div>
                  <!-- 排行榜列表 -->
                  <div
                    style="
                      width: 100%;
                      height: auto;
                      border: 1px solid #e5eaf3;
                      border-radius: 10px;
                    "
                  >
                    <el-table
                      :data="animeRank"
                      stripe
                      highlight-current-row="true"
                      size="large"
                      style="
                        width: 100%;
                        border: 1px solid #e5eaf3;
                        border-radius: 10px;
                      "
                    >
                      <el-table-column prop="rank" label="排位" width="80" />
                      <el-table-column prop="name" label="番名" width="200" />
                    </el-table>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="1">
              <div style="background-color: #ffffff; width: 100%; height: 100%">
                <el-button
                  size="large"
                  style="
                    position: absolute;
                    top: 142px;
                    left: 96%;
                    width: 45px;
                    height: 90px;
                  "
                  ><span style="writing-mode: tb-rl">换一换</span></el-button
                >
              </div></el-col
            >
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { reactive, onMounted, toRefs } from "vue";
// import { Search } from '@element-plus/icons-vue'
export default {
  name: "HomePage",

  setup() {
    // 菜单栏
    let headmenu = reactive({
      searchValue: "",
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
    });
    // 头像
    let avatar = reactive({
      avatarState: false,
      percentage: 0,
      avatarName: "用户名",
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

    let tag = reactive({
      tagItem1: [
        "番剧",
        "电影",
        "国创",
        "电视剧",
        "综艺",
        "纪录片",
        "动画",
        "游戏",
        "鬼畜",
        "音乐",
        "舞蹈",
        "影视",
      ],
      tagItem2: [
        "娱乐",
        "知识",
        "科技",
        "资讯",
        "美食",
        "生活",
        "汽车",
        "时尚",
        "运动",
        "动物圈",
        "VLOG",
      ],
      blueFont: "color:#409EFF",
      zhuanlan: "",
      huodong: "",
      shequ: "",
      zhibo: "",
      ketang: "",
      xinge: "",
      changeFont1() {
        tag.zhuanlan = tag.blueFont;
        tag.huodong = "";
        tag.shequ = "";
        tag.zhibo = "";
        tag.ketang = "";
        tag.xinge = "";
      },
      changeFont2() {
        tag.zhuanlan = "";
        tag.huodong = tag.blueFont;
        tag.shequ = "";
        tag.zhibo = "";
        tag.ketang = "";
        tag.xinge = "";
      },
      changeFont3() {
        tag.zhuanlan = "";
        tag.huodong = "";
        tag.shequ = tag.blueFont;
        tag.zhibo = "";
        tag.ketang = "";
        tag.xinge = "";
      },
      changeFont4() {
        tag.zhuanlan = "";
        tag.huodong = "";
        tag.shequ = "";
        tag.zhibo = tag.blueFont;
        tag.ketang = "";
        tag.xinge = "";
      },
      changeFont5() {
        tag.zhuanlan = "";
        tag.huodong = "";
        tag.shequ = "";
        tag.zhibo = "";
        tag.ketang = tag.blueFont;
        tag.xinge = "";
      },
      changeFont6() {
        tag.zhuanlan = "";
        tag.huodong = "";
        tag.shequ = "";
        tag.zhibo = "";
        tag.ketang = "";
        tag.xinge = tag.blueFont;
      },
    });

    let animeRank = reactive([
      {
        rank: 1,
        name: "鬼灭之刃",
      },
      {
        rank: 2,
        name: "钢之炼金术师",
      },
      {
        rank: 3,
        name: "进击的巨人",
      },
      {
        rank: 4,
        name: "狼与香辛料",
      },
      {
        rank: 5,
        name: "赛马娘",
      },
      {
        rank: 6,
        name: "偶像大师",
      },
      {
        rank: 7,
        name: "火影忍者疾风传",
      },
      {
        rank: 8,
        name: "家庭教师reborn",
      },
    ]);

    let animeTimeList=reactive({
      weekday:'0'
    })

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
      headmenu,
      ...toRefs(logo),
      ...toRefs(avatar),
      ...toRefs(dynamic),
      ...toRefs(subscribe),
      ...toRefs(collect),
      ...toRefs(history),
      ...toRefs(tag),
      animeRank,
      ...toRefs(animeTimeList)
    };
  },
};
</script>

<style lang="less" scoped>
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
  left: 1168px;
  border-radius: 20px;
  top: 65px;
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
  margin-top: 188px;
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

.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
