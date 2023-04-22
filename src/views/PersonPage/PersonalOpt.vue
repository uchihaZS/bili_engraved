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
            <personal-head activeItem="7"></personal-head>
            <div
              style="
                width: 100%;
                height: auto;
                margin-top: 15px;
                background-color: white;
              "
            >
              <!-- 隐私设置 -->
              <div style="width: 100%">
                <div
                  style="
                    margin-top: 20px;
                    font-size: 24px;
                    position: relative;
                    top: 30px;
                    left: 20px;
                  "
                >
                  隐私设置
                </div>
                <div
                  style="
                    display: flex;
                    margin-top: 85px;
                    width: 70%;
                    margin-left: 20px;
                    height: auto;
                    justify-content: space-between;
                  "
                >
                  <!-- 左列 -->
                  <div
                    style="
                      display: flex;
                      height: 250px;
                      flex-direction: column;
                      justify-content: space-between;
                    "
                  >
                    <div
                      style="
                        width: 300px;
                        display: flex;
                        justify-content: space-between;
                      "
                    >
                      <span>公开我的收藏</span>
                      <el-switch
                        v-model="value1"
                        style="margin-left: 47px"
                        active-text="公开"
                        inactive-text="隐藏"
                      />
                    </div>
                    <div
                      style="
                        width: 300px;
                        display: flex;
                        justify-content: space-between;
                      "
                    >
                      <span>公开我的追番追剧</span>
                      <el-switch
                        v-model="value2"
                        style="margin-left: 47px"
                        active-text="公开"
                        inactive-text="隐藏"
                      />
                    </div>
                    <div
                      style="
                        width: 300px;
                        display: flex;
                        justify-content: space-between;
                      "
                    >
                      <span>公开最近投币视频</span>
                      <el-switch
                        v-model="value3"
                        style="margin-left: 47px"
                        active-text="公开"
                        inactive-text="隐藏"
                      />
                    </div>
                    <div
                      style="
                        width: 300px;
                        display: flex;
                        justify-content: space-between;
                      "
                    >
                      <span>公开最近点赞视频</span>
                      <el-switch
                        v-model="value4"
                        style="margin-left: 47px"
                        active-text="公开"
                        inactive-text="隐藏"
                      />
                    </div>
                    <div
                      style="
                        width: 300px;
                        display: flex;
                        justify-content: space-between;
                      "
                    >
                      <span>公开订阅标签</span>
                      <el-switch
                        v-model="value5"
                        style="margin-left: 47px"
                        active-text="公开"
                        inactive-text="隐藏"
                      />
                    </div>
                    <div
                      style="
                        width: 300px;
                        display: flex;
                        justify-content: space-between;
                      "
                    >
                      <span>公开我的关注列表</span>
                      <el-switch
                        v-model="value6"
                        style="margin-left: 47px"
                        active-text="公开"
                        inactive-text="隐藏"
                      />
                    </div>
                  </div>
                  <!-- 中列 -->
                  <div
                    style="
                      display: flex;
                      height: 250px;
                      flex-direction: column;
                      justify-content: space-between;
                    "
                  >
                    <div
                      style="
                        width: 340px;
                        display: flex;
                        justify-content: space-between;
                      "
                    >
                      <span>公开佩戴的粉丝勋章</span>
                      <el-switch
                        v-model="value7"
                        style="margin-left: 47px"
                        active-text="公开"
                        inactive-text="隐藏"
                      />
                    </div>
                    <div
                      style="
                        width: 340px;
                        display: flex;
                        justify-content: space-between;
                      "
                    >
                      <span>公开我的生日，个人标签</span>
                      <el-switch
                        v-model="value8"
                        style="margin-left: 47px"
                        active-text="公开"
                        inactive-text="隐藏"
                      />
                    </div>
                    <div
                      style="
                        width: 340px;
                        display: flex;
                        justify-content: space-between;
                      "
                    >
                      <span>公开学校信息</span>
                      <el-switch
                        v-model="value9"
                        style="margin-left: 47px"
                        active-text="公开"
                        inactive-text="隐藏"
                      />
                    </div>
                    <div
                      style="
                        width: 340px;
                        display: flex;
                        justify-content: space-between;
                      "
                    >
                      <span>公开最近玩过的游戏</span>
                      <el-switch
                        v-model="value10"
                        style="margin-left: 47px"
                        active-text="公开"
                        inactive-text="隐藏"
                      />
                    </div>
                  </div>
                  <!-- 右列 -->
                  <div
                    style="
                      display: flex;
                      height: 250px;
                      flex-direction: column;
                      justify-content: space-between;
                    "
                  >
                    <div
                      style="
                        width: 380px;
                        display: flex;
                        justify-content: space-between;
                      "
                    >
                      <span>公开我的追漫(仅APP)</span>
                      <el-switch
                        v-model="value11"
                        style="margin-left: 47px"
                        active-text="公开"
                        inactive-text="隐藏"
                      />
                    </div>
                    <div
                      style="
                        width: 380px;
                        display: flex;
                        justify-content: space-between;
                      "
                    >
                      <span>公开拥有的粉丝装扮(仅APP)</span>
                      <el-switch
                        v-model="value12"
                        style="margin-left: 47px"
                        active-text="公开"
                        inactive-text="隐藏"
                      />
                    </div>
                    <div
                      style="
                        width: 380px;
                        display: flex;
                        justify-content: space-between;
                      "
                    >
                      <span>公开轻视频主页(仅APP)</span>
                      <el-switch
                        v-model="value13"
                        style="margin-left: 47px"
                        active-text="公开"
                        inactive-text="隐藏"
                      />
                    </div>
                    <div
                      style="
                        width: 380px;
                        display: flex;
                        justify-content: space-between;
                      "
                    >
                      <span>投稿视频列表中展现直播回放</span>
                      <el-switch
                        v-model="value14"
                        style="margin-left: 47px"
                        active-text="公开"
                        inactive-text="隐藏"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <el-divider />
              <!-- 排序设置 -->
              <div style="width: 100%">
                <div
                  style="font-size: 24px; margin-top: 10px; margin-left: 20px"
                >
                  排序设置
                </div>
                <div
                  style="
                    display: flex;
                    margin: 20px;
                    width: 431px;
                    justify-content: space-between;
                  "
                >
                  <!-- 排序左 -->
                  <div
                    style="
                      border: 1px solid #cfd3dc;
                      width: 200px;
                      border-radius: 10px;
                    "
                  >
                    <draggable
                      :list="list1"
                      :fallback-tolerance="2"
                      ghost-class="ghost"
                      :force-fallback="true"
                      chosen-class="chosenClass"
                      animation="300"
                    >
                      <template #item="{ element }">
                        <div class="item">
                          <p>{{ element.name }}</p>
                          <el-icon :size="38"><Operation /></el-icon>
                        </div>
                      </template>
                    </draggable>
                  </div>
                  <!-- 排序右 -->
                  <div
                    style="
                      border: 1px solid #cfd3dc;
                      width: 200px;
                      height: 305px;
                      border-radius: 10px;
                    "
                  >
                    <draggable
                      :list="list2"
                      :fallback-tolerance="2"
                      ghost-class="ghost"
                      :force-fallback="true"
                      chosen-class="chosenClass"
                      animation="300"
                    >
                      <template #item="{ element }">
                        <div class="item">
                          <p>{{ element.name }}</p>
                          <el-icon :size="38"><Operation /></el-icon>
                        </div>
                      </template>
                    </draggable>
                  </div>
                </div>
              </div>
              <el-divider />
              <!-- 我的个人标签 -->
              <div style="width: 100%">
                <div
                  style="font-size: 24px; margin-top: 10px; margin-left: 20px"
                >
                  我的个人标签
                </div>
                <el-input style="width: 250px; margin: 20px" v-model="inp">
                  <template #append>
                    <el-button type="info">新增</el-button>
                  </template>
                </el-input>
              </div>
            </div>
          </el-col>
          <el-col :span="2">
            <!-- 右边空白 -->
            <div
              style="background-color: #f4f5f7; width: 100%; height: 100%"
            ></div>
          </el-col>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import PersonalHead from "@/components/PersonCom/PersonalHead.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import { reactive, toRefs } from "@vue/reactivity";
import { Operation } from "@element-plus/icons-vue";
import draggable from "vuedraggable";
export default {
  components: { PersonalHead, HeaderNav, draggable, Operation },
  setup() {
    let switchMenu = reactive({
      value1: false,
      value2: false,
      value3: false,
      value4: false,
      value5: false,
      value6: false,
      value7: false,
      value8: false,
      value9: false,
      value10: false,
      value11: false,
      value12: false,
      value13: false,
      value14: false,
      list1: [
        { name: "我的专栏", id: 0 },
        { name: "我的稿件", id: 1 },
        { name: "订阅番剧", id: 2 },
        { name: "最近投币的视频", id: 3 },
        { name: "我的视频列表", id: 4 },
        { name: "订阅标签", id: 5 },
        { name: "最近点赞的视频", id: 6 },
        { name: "我的相簿", id: 7 },
        { name: "我的收藏夹", id: 8 },
      ],
      list2: [
        { name: "预约", id: 0 },
        { name: "公告", id: 1 },
        { name: "直播间", id: 2 },
        { name: "个人资料", id: 3 },
        { name: "最近玩过的游戏", id: 4 },
      ],
    });

    return {
      ...toRefs(switchMenu),
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

.itxst {
  width: 600px;
  display: flex;
}
.itxst > div:nth-of-type(1) {
  flex: 1;
}
.itxst > div:nth-of-type(2) {
  width: 270px;
  padding-left: 20px;
}
.item {
  border-bottom: solid 1px #eee;
  padding: 0px 10px;
  width: 180px;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item:hover {
  cursor: move;
  background-color: #409eff;
  color: #ffffff;
}

.ghost {
  border: solid 1px #409eff !important;
}

.chosenClass {
  background-color: #eee;
  opacity: 1;
  border: solid 1px #409eff;
}
.fallbackClass {
  background-color: aquamarine;
}
</style>