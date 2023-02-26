<template>
  <el-container>
    <el-header>
      <header-nav></header-nav>
    </el-header>
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
      <div class="row">
        <el-row style="width: 100%">
          <!-- 左边空白 -->
          <el-col :span="4">
            <div
              style="background-color: #f4f5f7; width: 100%; height: 100%"
            ></div>
          </el-col>
          <!-- 中间主要内容 -->
          <el-col :span="16" style="background-color: white">
            <!-- 顶栏 -->
            <div
              style="
                display: flex;
                justify-content: space-between;
                padding: 0px 30px;
              "
            >
              <p style="font-size: 20px">历史记录</p>
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  width: 500px;

                  align-items: center;
                "
              >
                <el-input
                  v-model="input2"
                  placeholder="搜索历史记录"
                  :prefix-icon="Search"
                  size="default"
                  input-style="border-radius:20px"
                  style="width: 200px; border-radius: 20px; font-size: 16px"
                />
                <el-button type="primary" plain>暂停记录历史</el-button>
                <el-button type="primary" plain>清空历史</el-button>
              </div>
            </div>
            <!-- 列表 -->
            <div style="width: 100%; height: auto">
              <el-timeline>
                <el-timeline-item
                  center
                  placement="top"
                  v-for="(item, index) in activities"
                  :key="index"
                  :type="item.type"
                  :timestamp="item.timestamp"
                >
                  <div style="display: flex; height: 130px">
                    <!-- 封面 -->
                    <div
                      style="
                        width: 170px;
                        border-radius: 10px;
                        height: 100%;
                        background-color: #909399;
                      "
                    ></div>
                    <!-- 描述 -->
                    <div
                      style="
                        margin-left: 15px;
                        height: 100%;
                        width: 962px;
                        border-bottom: 1px solid var(--el-border-color);
                      "
                    >
                      <p
                        style="
                          font-size: 20px;
                          font-weight: 600;
                          margin-top: 0px;
                        "
                      >
                        {{ item.name }}
                      </p>
                      <div
                        style="
                          display: flex;
                          justify-content: space-between;
                          margin-top: 60px;
                          align-items: center;
                        "
                      >
                        <p style="margin: 0px; font-size: 16px; color: #909399">
                          {{ item.progress }}
                        </p>
                        <div
                          style="
                            width: 498px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                          "
                        >
                          <p
                            style="margin: 0px; font-size: 16px; color: #909399"
                          >
                            {{ item.author }} | {{ item.tag }}
                          </p>
                          <el-button type="info" plain>删除</el-button>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-timeline-item>
              </el-timeline>
            </div>
          </el-col>
          <el-col :span="4">
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
import HeaderNav from "@/components/HeaderNav.vue";
import { Search } from "@element-plus/icons-vue";
import { reactive, toRefs } from "vue";
export default {
  components: { HeaderNav, Search },
  setup() {
    let all = reactive({
      input2: "",
      activities: [
        {
          name: "aaa",
          timestamp: "2018-04-02 20:46",
          type: "primary",
          author: "11",
          progress: "已看完",
          tag: "搞笑",
        },
        {
          name: "bbb",
          timestamp: "2018-04-03 21:40",
          type: "success",
          author: "22",
          progress: "已看完",
          tag: "科普",
        },
        {
          name: "ccc",
          timestamp: "2018-05-03 23:46",
          type: "primary",
          author: "33",
          progress: "看到 10:33",
          tag: "生活",
        },
        {
          name: "ddd",
          timestamp: "2018-07-23 10:46",
          type: "success",
          author: "44",
          progress: "已看完",
          tag: "动画",
        },
        {
          name: "eee",
          timestamp: "2018-08-03 11:36",
          type: "primary",
          author: "55",
          progress: "看到 0:15",
          tag: "手机",
        },
        {
          name: "fff",
          timestamp: "20xx-xx-xx xx:xx",
          type: "success",
          author: "666",
          progress: "已看完",
          tag: "绘画",
        },
        {
          name: "ggg",
          timestamp: "20xx-xx-xx xx:xx",
          type: "primary",
          author: "77",
          progress: "已看完",
          tag: "车辆评测",
        },
        {
          name: "hhh",
          timestamp: "20xx-xx-xx xx:xx",
          type: "success",
          author: "88",
          progress: "已看完",
          tag: "音乐",
        },
      ],
    });
    return {
      Search,
      ...toRefs(all),
    };
  },
};
</script>

<style lang="less" scoped>
.row {
  margin-top: 208px;
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
</style>