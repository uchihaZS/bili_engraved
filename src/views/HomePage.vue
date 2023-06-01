<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <header-nav></header-nav>
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
                        @click="skipTag(index)"
                        @mouseover="showMenu1(index)"
                        @mouseleave="closeMenu1(index)"
                        >{{ i }}</el-button
                      >
                      <!-- 番剧弹框 -->
                      <div
                        @mouseover="anime.over"
                        @mouseleave="anime.closeMenu"
                        v-if="anime.show == true"
                        style="
                          width: 200px;
                          height: 150px;
                          top: 134px;
                          left: 325px;
                          z-index: 10;
                          position: fixed;
                          display: flex;
                          flex-flow: row nowrap;
                          justify-content: space-around;
                          align-items: flex-start;
                          background: white;
                          border-radius: 10px;
                          box-shadow: var(--el-box-shadow-lighter);
                        "
                      >
                        <div
                          style="
                            display: flex;
                            flex-direction: column;
                            align-items: baseline;
                            margin-top: 10px;
                            width: 80px;
                            margin-left: -20px;
                          "
                        >
                          <el-button text plain @click="toAnimeSerialize"
                            >连载动画</el-button
                          >
                          <el-button text plain @click="toAnimeEnd"
                            >完结动画</el-button
                          >
                          <el-button text plain @click="toAnimeMsg"
                            >资讯</el-button
                          >
                          <el-button text plain @click="toAnimeOffical"
                            >官方延伸</el-button
                          >
                        </div>
                        <div
                          style="
                            display: flex;
                            flex-direction: column;
                            align-items: baseline;
                            width: 80px;
                            margin: 10px 25px 0px 0px;
                          "
                        >
                          <el-button text plain @click="toAnimeTimeline"
                            >新番时间表</el-button
                          >
                          <el-button text plain @click="toAnimeSearch"
                            >番剧索引</el-button
                          >
                        </div>
                      </div>
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
                      <span class="rightTag">专栏</span>
                      <span class="rightTag">活动</span>
                      <span class="rightTag">社区中心</span>
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
                        <span class="rightTag">直播</span>
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
                      <span class="rightTag">课堂</span>
                      <span class="rightTag">新歌热榜</span>
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
                    v-for="(item, index) in vList"
                    :key="index"
                  >
                    <div
                      v-if="item.poster != ''"
                      @click="goToPage(item.link, item.vname, item.author)"
                      :style="[
                        { width: '100%' },
                        { height: '165px' },
                        { backgroundImage: `url(${item.poster})` },
                        { borderRadius: '10px' },
                        { backgroundSize: 'contain' },
                        { cursor: 'pointer' },
                      ]"
                    ></div>
                    <div
                      v-else-if="item.poster == ''"
                      style="
                        width: 100%;
                        height: 165px;
                        background-color: rgb(144, 147, 153);
                        border-radius: 10px;
                        cursor: pointer;
                      "
                    ></div>

                    <span
                      style="
                        width: 255px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: block;
                        white-space: nowrap;
                        cursor: pointer;
                      "
                    >
                      {{ item.vname }}</span
                    >
                    <p>{{ item.author }}</p>
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
                        <el-menu-item index="0" @click="weekday = 0"
                          >最近更新</el-menu-item
                        >
                        <el-menu-item index="1" @click="weekday = 1"
                          >周一</el-menu-item
                        >
                        <el-menu-item index="2" @click="weekday = 2"
                          >周二</el-menu-item
                        >
                        <el-menu-item index="3" @click="weekday = 3"
                          >周三</el-menu-item
                        >
                        <el-menu-item index="4" @click="weekday = 4"
                          >周四</el-menu-item
                        >
                        <el-menu-item index="5" @click="weekday = 5"
                          >周五</el-menu-item
                        >
                        <el-menu-item index="6" @click="weekday = 6"
                          >周六</el-menu-item
                        >
                        <el-menu-item index="7" @click="weekday = 7"
                          >周日</el-menu-item
                        >
                      </el-menu>
                    </div>
                    <div style="margin-left: 450px">
                      <el-button size="large" @click="toAnimeTimeline"
                        >新番时间表</el-button
                      >
                      <el-button size="large" @click="toAnimeAll"
                        >查看更多</el-button
                      >
                    </div>
                  </div>

                  <!-- 番剧列表 -->
                  <div
                    v-if="weekday == 0"
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
                    v-if="weekday == 1"
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
                    v-if="weekday == 2"
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
                    v-if="weekday == 3"
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
                    v-if="weekday == 4"
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
                    v-if="weekday == 5"
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
                    v-if="weekday == 6"
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
                    v-if="weekday == 7"
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
                <div
                  style="
                    width: 17%;
                    display: flex;
                    flex-direction: column;
                    margin-right: 7px;
                  "
                >
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
                <el-backtop
                  :right="50"
                  :bottom="100"
                  :visibility-height="400"
                  style="width: 40px; height: 40px"
                >
                  <div
                    style="
                      height: 100%;
                      width: 100%;
                      background-color: var(--el-bg-color-overlay);
                      box-shadow: var(--el-box-shadow-lighter);
                      text-align: center;
                      line-height: 20px;
                      color: #1989fa;
                      font-size: 16px;
                    "
                  >
                    回到顶部
                  </div>
                </el-backtop>
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
import HeaderNav from "../components/HeaderNav.vue";
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
// import { Search } from '@element-plus/icons-vue'
export default {
  name: "HomePage",
  components: { HeaderNav },
  setup() {
    // 跳转和vuex
    var router = useRouter();
    const store = useStore();
    const goToPage = (link, vname, author) => {
      store.dispatch("updateVname", vname);
      store.dispatch("updateAuthor", author);
      router.push({ path: link });
      // console.log(link);
    };

    const fengmian=require('@/assets/fm.jpg')

    // 推荐视频列表
    let videoList = reactive({
      
      vList: [
        {
          vname: "鬼灭之刃游郭篇《残響散歌》真.完整粤语版",
          poster: fengmian,
          author: "不是词神",
          link: "/playpage",
        },
        {
          vname: "推荐视频2",
          poster: "",
          author: "作者2",
        },
        {
          vname: "推荐视频3",
          poster: "",
          author: "作者3",
        },
        {
          vname: "推荐视频4",
          poster: "",
          author: "作者4",
        },
        {
          vname: "推荐视频5",
          poster: "",
          author: "作者5",
        },
        {
          vname: "推荐视频6",
          poster: "",
          author: "作者6",
        },
        {
          vname: "推荐视频7",
          poster: "",
          author: "作者7",
        },
        {
          vname: "推荐视频8",
          poster: "",
          author: "作者8",
        },
      ],
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
      showMenu1(index) {
        if (index == 0) {
          tag.anime.over();
          // console.log("触碰元素");
        }
      },
      closeMenu1(index) {
        if (index == 0) {
          tag.anime.closeMenu();
          // setTimeout(tag.anime.noDisplay(), 1000);
          // console.log('check1，离开元素')
        }
      },
      anime: {
        show: false,
        Funtype: 0,
        over() {
          tag.anime.show = true;
          tag.anime.Funtype = 0;
          // console.log("over");
        },
        closeMenu() {
          tag.anime.Funtype = 1;
          setTimeout(tag.anime.noDisplay, 1000);
          // console.log("check2", tag.anime.Funtype);
        },
        noDisplay() {
          if (tag.anime.Funtype == 1) {
            tag.anime.show = false;
            // console.log("close", tag.anime.Funtype);
          }
          // console.log("display");
        },
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

    let animeTimeList = reactive({
      weekday: "0",
    });

    // 跳转函数
    let skipFun = reactive({
      toMessage() {
        router.push({ path: "/message" });
      },
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
      toAnimeTimeline() {
        router.push({ path: "/animetimeline" });
      },
      toAnimeSearch() {
        router.push({ path: "/animesearch" });
      },
      toAnimeSerialize() {
        router.push({ path: "/animeserialize" });
      },
      toAnimeEnd() {
        router.push({ path: "/animeend" });
      },
      toAnimeMsg() {
        router.push({ path: "/animemsg" });
      },
      toAnimeOffical() {
        router.push({ path: "/animeoffical" });
      },
      toAnimeAll() {
        router.push({ path: "/animeall" });
      },
      skipTag(index) {
        if (index == 0) {
          skipFun.toAnimeAll();
        }
      },
    });

    return {
      
      goToPage,
      ...toRefs(skipFun),
      ...toRefs(videoList),
      ...toRefs(tag),
      animeRank,
      ...toRefs(animeTimeList),
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

.rightTag:hover {
  color: #409eff;
}
</style>
