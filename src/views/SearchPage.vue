<template>
  <div>
    <el-container>
      <el-header><header-nav></header-nav></el-header>
      <el-main>
        <div class="row">
          <el-row style="width: 100%">
            <!-- 左边空白 -->
            <el-col :span="1">
              <div
                style="background-color: white; width: 100%; height: 100%"
              ></div>
            </el-col>
            <!-- 中间主要内容 -->
            <el-col :span="22" style="background-color: white">
              <!-- 顶部搜索栏 -->
              <div
                style="
                  display: flex;
                  width: 100%;
                  height: 50px;
                  justify-content: center;
                  padding: 0px;
                "
              >
                <el-input
                  v-model="searchValue"
                  :placeholder="searchValue"
                  clearable
                  size="large"
                  type="text"
                  style="width: 460px; height: 50px; font-size: 18px"
                />
                <el-button
                  type="primary"
                  size="large"
                  style="height: 50px"
                  @click="toSearch"
                  >搜索</el-button
                >
              </div>
              <!-- 分类 -->
              <div style="margin-top: 20px; width: 100%; height: auto">
                <!-- 标签页 -->
                <el-tabs>
                  <el-tab-pane name="0">
                    <template #label>
                      <span style="font-size: 18px">视频</span>
                    </template>
                    <!-- 相关性 -->
                    <div
                      style="
                        width: 545px;
                        height: auto;
                        display: flex;
                        position: absolute;
                        top: 5px;
                      "
                    >
                      <el-button type="primary" text size="large"
                        ><el-link
                          :underline="false"
                          style="font-size: 16px; color: black"
                          >综合排序</el-link
                        ></el-button
                      >
                      <el-button type="primary" text size="large"
                        ><el-link
                          :underline="false"
                          style="font-size: 16px; color: black"
                          >最新发布</el-link
                        ></el-button
                      >
                      <el-button type="primary" text size="large"
                        ><el-link
                          :underline="false"
                          style="font-size: 16px; color: black"
                          >最多播放</el-link
                        ></el-button
                      >
                      <el-button type="primary" text size="large"
                        ><el-link
                          :underline="false"
                          style="font-size: 16px; color: black"
                          >最多弹幕</el-link
                        ></el-button
                      >
                      <el-button type="primary" text size="large"
                        ><el-link
                          :underline="false"
                          style="font-size: 16px; color: black"
                          >最多收藏</el-link
                        ></el-button
                      >
                    </div>
                    <!-- 折叠面板 -->
                    <el-collapse>
                      <el-collapse-item>
                        <template #title>
                          <div
                            style="
                              width: 100%;
                              display: flex;
                              justify-content: flex-end;
                            "
                          >
                            <div style="font-size: 16px">更多筛选</div>
                          </div>
                        </template>
                        <!-- 时长 -->
                        <div style="width: 465px; height: auto; display: flex">
                          <el-button type="primary" text size="large"
                            >全部时长</el-button
                          >
                          <el-button type="primary" text size="large"
                            >10分钟以下</el-button
                          >
                          <el-button type="primary" text size="large"
                            >10-30分钟</el-button
                          >
                          <el-button type="primary" text size="large"
                            >30-60分钟</el-button
                          >
                          <el-button type="primary" text size="large"
                            >60分钟以上</el-button
                          >
                        </div>
                        <!-- 分区 -->
                        <div style="width: 465px; height: auto; display: flex">
                          <el-button type="primary" text size="large"
                            >全部分区</el-button
                          >
                          <el-button type="primary" text size="large"
                            >动画</el-button
                          >
                          <el-button type="primary" text size="large"
                            >番剧</el-button
                          >
                          <el-button type="primary" text size="large"
                            >音乐</el-button
                          >
                          <el-button type="primary" text size="large"
                            >科技</el-button
                          >
                          <el-button type="primary" text size="large"
                            >游戏</el-button
                          >
                          <el-button type="primary" text size="large"
                            >影视</el-button
                          >
                          <el-button type="primary" text size="large"
                            >资讯</el-button
                          >
                          <el-button type="primary" text size="large"
                            >鬼畜</el-button
                          >
                          <el-button type="primary" text size="large"
                            >生活</el-button
                          >
                        </div>
                      </el-collapse-item>
                    </el-collapse>
                    <!-- 视频列表 -->
                    <div
                      style="
                        width: 100%;
                        height: auto;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        align-items: center;
                        justify-content: flex-start;
                        margin-top: 10px;
                      "
                    >
                      <div
                        v-for="(i, index) in realData"
                        :key="index"
                        style="
                          width: 16%;
                          height: 15%;
                          margin-bottom: 35px;
                          margin-right: 10px;
                        "
                      >
                        <div
                          style="
                            width: 100%;
                            height: 220px;
                            background-color: #636466;
                            border-radius: 10px;
                          "
                        >
                          封面
                        </div>
                        <div style="line-height: 0px">
                          <p style="font-size: 16px">{{ i.artname }}</p>
                          <div style="display: flex">
                            <p style="font-size: 14px">{{ i.artist }}</p>
                            <p style="margin-left: 10px; font-size: 14px">
                              发布时间
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </el-tab-pane>

                  <el-tab-pane name="1">
                    <template #label>
                      <span style="font-size: 18px">番剧</span>
                    </template>
                    <!-- 渲染 -->
                    <div
                      style="
                        width: 100%;
                        height: auto;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: space-around;
                      "
                    >
                      <el-card
                        :body-style="[
                          { width: '800px' },
                          { height: 'auto' },
                          { display: 'flex' },
                          { marginBottom: '30px' },
                        ]"
                        style="margin-bottom: 30px; border-radius: 10px"
                        v-for="i in 4"
                        :key="i"
                      >
                        <div
                          style="
                            width: 20%;
                            height: 220px;
                            background-color: #636466;
                            border-radius: 10px;
                          "
                        >
                          封面
                        </div>
                        <div style="">
                          <p>作品名{{ i }}</p>
                          <p>标签</p>
                          <p>配音人员</p>
                          <div>简介</div>
                        </div>
                      </el-card>
                    </div>
                  </el-tab-pane>

                  <el-tab-pane name="2">
                    <template #label>
                      <span style="font-size: 18px">用户</span>
                    </template>
                    <!-- 相关性 -->
                    <div
                      style="
                        width: 545px;
                        height: auto;
                        display: flex;
                        position: absolute;
                        top: 5px;
                      "
                    >
                      <el-button type="primary" text size="large"
                        ><el-link
                          :underline="false"
                          style="font-size: 16px; color: black"
                          >默认排序</el-link
                        ></el-button
                      >
                      <el-button type="primary" text size="large"
                        ><el-link
                          :underline="false"
                          style="font-size: 16px; color: black"
                          >粉丝数由高到低</el-link
                        ></el-button
                      >
                      <el-button type="primary" text size="large"
                        ><el-link
                          :underline="false"
                          style="font-size: 16px; color: black"
                          >粉丝数由低到高</el-link
                        ></el-button
                      >
                      <el-button type="primary" text size="large"
                        ><el-link
                          :underline="false"
                          style="font-size: 16px; color: black"
                          >等级由高到低</el-link
                        ></el-button
                      >
                      <el-button type="primary" text size="large"
                        ><el-link
                          :underline="false"
                          style="font-size: 16px; color: black"
                          >等级由低到高</el-link
                        ></el-button
                      >
                    </div>
                    <el-collapse>
                      <!-- 折叠面板 -->
                      <el-collapse-item>
                        <template #title>
                          <div
                            style="
                              width: 100%;
                              display: flex;
                              justify-content: flex-end;
                            "
                          >
                            <div style="font-size: 16px">更多筛选</div>
                          </div>
                        </template>
                        <!-- 用户分类 -->
                        <div style="width: 465px; height: auto; display: flex">
                          <el-button type="primary" text size="large"
                            >全部用户</el-button
                          >
                          <el-button type="primary" text size="large"
                            >up主用户</el-button
                          >
                          <el-button type="primary" text size="large"
                            >普通用户</el-button
                          >
                          <el-button type="primary" text size="large"
                            >认证用户</el-button
                          >
                        </div>
                      </el-collapse-item>
                    </el-collapse>
                    <div
                      style="
                        width: 100%;
                        height: auto;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        align-items: center;
                        justify-content: space-around;
                        margin-top: 10px;
                      "
                    >
                      <div
                        v-for="i in 60"
                        :key="i"
                        style="
                          width: 33%;
                          height: 15%;
                          margin-bottom: 35px;
                          display: flex;
                          flex-direction: row;
                          flex-wrap: nowrap;
                          justify-content: flex-start;
                          align-items: stretch;
                        "
                      >
                        <div
                          style="
                            width: 97px;
                            height: 100px;
                            background-color: #636466;
                            border-radius: 50px;
                          "
                        >
                          头像
                        </div>
                        <div
                          style="
                            line-height: 0px;
                            margin-left: 10px;
                            width: 80%;
                          "
                        >
                          <p style="font-size: 16px">作者名{{ i }}</p>
                          <div style="display: flex; width: 100%">
                            <p>粉丝数</p>
                            <p style="margin-left: 10px">视频数</p>
                            <p style="margin-left: 10px">简介</p>
                          </div>
                          <el-button type="primary" size="large"
                            >关注</el-button
                          >
                        </div>
                      </div>
                      <el-pagination
                        background
                        :current-page="1"
                        :page-size="36"
                        layout="prev, pager, next"
                        :total="36"
                      />
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </div>
              <!-- 分页 -->
              <div
                style="
                  display: flex;
                  flex-wrap: nowrap;
                  justify-content: center;
                  margin-top: 20px;
                "
              >
                <el-pagination
                  background
                  layout="prev, pager, next,jumper"
                  :total="videoLength"
                  :page-size="36"
                  v-model:current-page="nowPage"
                  @current-change="handleCurrentChange(nowPage)"
                />
              </div>
            </el-col>
            <!-- 右边空白 -->
            <el-col :span="1">
              <div
                style="background-color: white; width: 100%; height: 100%"
              ></div
            ></el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { reactive, toRefs, ref, onBeforeMount } from "vue";
import HeaderNav from "@/components/HeaderNav.vue";
import { useRoute, useRouter } from "vue-router";
export default {
  components: { HeaderNav },
  setup() {
    let route = useRoute();
    let router = useRouter();
    var searchValue = ref(route.query.searchValue);
    function toSearch(params) {
      router.push({
        path: "/searchpage",
        query: {
          searchValue: searchValue.value,
        },
      });
    }
    let video = reactive({
      // 原始数组
      videoData: [],
      // 原始数组长度
      videoLength: 0,
      // 将要显示的集合数组
      displayData: [],
      // 显示用的数组
      realData: [],
      // 当前的页码
      nowPage: 1,
      //   初始化数据
      addData() {
        let tempobj = {};
        let name = "作品名";
        let author = "作者名";
        for (let i = 1; i <= 290; i++) {
          tempobj = { artname: name + i, artist: author + i };
          video.videoData.push(tempobj);
        }
        video.videoLength = video.videoData.length;
        if (video.videoLength >= 40) {
          video.processData();
        }
      },
      processData() {
        let temp = [];
        for (let i = 0; i < video.videoLength; i += 36) {
          temp.push(video.videoData.slice(i, i + 36));
        }
        video.displayData = temp;
        for (let i = 0; i < temp.length; i++) {
          console.log(temp[i]);
        }
        video.realData = video.displayData[0];
      },
      handleCurrentChange(nowPage) {
        let startIndex = (nowPage - 1) * 36;
        let endIndex = startIndex + 36;
        let itemsToDisplay = video.videoData.slice(startIndex, endIndex);
        video.realData = itemsToDisplay;
      },
    });

    onBeforeMount(() => {
      video.addData();
    });

    return {
      ...toRefs(video),
      searchValue,
      toSearch,
    };
  },
};
</script>

<style scoped>
</style>