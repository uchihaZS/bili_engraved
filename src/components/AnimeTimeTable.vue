<template>
  <div style="display: flex; justify-content: space-between">
    <!-- 周一 -->
    <div>
      <div
        style="
          display: flex;
          width: 240px;
          height: auto;
          align-items: baseline;
          justify-content: space-between;
        "
      >
        <!-- 触发左 -->
        <div
          v-if="data.weekDay == 'Monday'"
          style="
            border-bottom: 5px solid rgb(247, 137, 137);
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            width: 50px;
            justify-content: center;
            color: black;
            flex-direction: column;
          "
        >
          <!-- 左英文 -->
          <p style="font-size: 20px; margin: 0px">Mon</p>
          <!-- 右上下 -->
          <div style="line-height: 5px">
            <p style="margin: 8px">周一</p>
          </div>
        </div>
        <!-- 普通左 -->
        <div
          v-if="data.weekDay != 'Monday'"
          style="
            border-bottom: 5px solid #909399;
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            width: 50px;
            justify-content: center;
            color: #909399;
            flex-direction: column;
          "
        >
          <!-- 左英文 -->
          <p style="font-size: 20px; margin: 0px">Mon</p>
          <!-- 右上下 -->
          <div style="line-height: 5px">
            <p style="margin: 8px">周一</p>
          </div>
        </div>
        <!-- 右 -->
        <div style="width: 160px; height: 1px; background-color: #cfd3dc"></div>
      </div>
      <!-- 时间线 -->
      <div v-if="sortedAnimeData.Monday.length" style="margin-top: 10px">
        <el-timeline>
          <el-timeline-item
            :timestamp="item.playtime"
            placement="top"
            v-for="(item, index) in sortedAnimeData.Monday"
            :key="index"
          >
            <div style="display: flex">
              <div
                style="
                  width: 70px;
                  height: 70px;
                  background-color: #909399;
                  border-radius: 5px;
                "
              ></div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  margin-left: 5px;
                "
              >
                <p class="blueName">{{ item.name }}</p>
                <p style="margin: 0px; color: #f78989">{{ item.episode }}</p>
              </div>
            </div>
          </el-timeline-item>
        </el-timeline>
      </div>
      <div v-else class="noData"></div>
    </div>
    <!-- 周二 -->
    <div>
      <div
        style="
          display: flex;
          width: 240px;
          height: auto;
          align-items: baseline;
          justify-content: space-between;
        "
      >
        <!-- 触发左 -->
        <div
          v-if="data.weekDay == 'Tuesday'"
          style="
            border-bottom: 5px solid rgb(247, 137, 137);
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            width: 50px;
            justify-content: center;
            color: black;
            flex-direction: column;
          "
        >
          <!-- 左英文 -->
          <p style="font-size: 20px; margin: 0px">Tue</p>
          <!-- 右上下 -->
          <div style="line-height: 5px">
            <p style="margin: 8px">周二</p>
          </div>
        </div>
        <!-- 普通左 -->
        <div
          v-if="data.weekDay != 'Tuesday'"
          style="
            border-bottom: 5px solid #909399;
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            width: 50px;
            justify-content: center;
            color: #909399;
            flex-direction: column;
          "
        >
          <!-- 左英文 -->
          <p style="font-size: 20px; margin: 0px">Tue</p>
          <!-- 右上下 -->
          <div style="line-height: 5px">
            <p style="margin: 8px">周二</p>
          </div>
        </div>
        <!-- 右 -->
        <div style="width: 160px; height: 1px; background-color: #cfd3dc"></div>
      </div>
      <!-- 时间线 -->
      <div v-if="sortedAnimeData.Tuesday.length" style="margin-top: 10px">
        <el-timeline>
          <el-timeline-item
            :timestamp="item.playtime"
            placement="top"
            v-for="(item, index) in sortedAnimeData.Tuesday"
            :key="index"
          >
            <div style="display: flex">
              <div
                style="
                  width: 70px;
                  height: 70px;
                  background-color: #909399;
                  border-radius: 5px;
                "
              ></div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  margin-left: 5px;
                "
              >
                <p class="blueName">{{ item.name }}</p>
                <p style="margin: 0px; color: #f78989">{{ item.episode }}</p>
              </div>
            </div>
          </el-timeline-item>
        </el-timeline>
      </div>
      <div v-else class="noData"></div>
    </div>
    <!-- 周三 -->
    <div>
      <div
        style="
          display: flex;
          width: 240px;
          height: auto;
          align-items: baseline;
          justify-content: space-between;
        "
      >
        <!-- 触发左 -->
        <div
          v-if="data.weekDay == 'Wednesday'"
          style="
            border-bottom: 5px solid rgb(247, 137, 137);
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            width: 50px;
            justify-content: center;
            color: black;
            flex-direction: column;
          "
        >
          <!-- 左英文 -->
          <p style="font-size: 20px; margin: 0px">Wed</p>
          <!-- 右上下 -->
          <div style="line-height: 5px">
            <p style="margin: 8px">周三</p>
          </div>
        </div>
        <!-- 普通左 -->
        <div
          v-if="data.weekDay != 'Wednesday'"
          style="
            border-bottom: 5px solid #909399;
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            width: 50px;
            justify-content: center;
            color: #909399;
            flex-direction: column;
          "
        >
          <!-- 左英文 -->
          <p style="font-size: 20px; margin: 0px">Wed</p>
          <!-- 右上下 -->
          <div style="line-height: 5px">
            <p style="margin: 8px">周三</p>
          </div>
        </div>
        <!-- 右 -->
        <div style="width: 160px; height: 1px; background-color: #cfd3dc"></div>
      </div>
      <!-- 时间线 -->
      <div v-if="sortedAnimeData.Wednesday.length" style="margin-top: 10px">
        <el-timeline>
          <el-timeline-item
            :timestamp="item.playtime"
            placement="top"
            v-for="(item, index) in sortedAnimeData.Wednesday"
            :key="index"
          >
            <div style="display: flex">
              <div
                style="
                  width: 70px;
                  height: 70px;
                  background-color: #909399;
                  border-radius: 5px;
                "
              ></div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  margin-left: 5px;
                "
              >
                <p class="blueName">{{ item.name }}</p>
                <p style="margin: 0px; color: #f78989">{{ item.episode }}</p>
              </div>
            </div>
          </el-timeline-item>
        </el-timeline>
      </div>
      <div v-else class="noData"></div>
    </div>
    <!-- 周四 -->
    <div>
      <div
        style="
          display: flex;
          width: 240px;
          height: auto;
          align-items: baseline;
          justify-content: space-between;
        "
      >
        <!-- 触发左 -->
        <div
          v-if="data.weekDay == 'Thursday'"
          style="
            border-bottom: 5px solid rgb(247, 137, 137);
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            width: 50px;
            justify-content: center;
            color: black;
            flex-direction: column;
          "
        >
          <!-- 左英文 -->
          <p style="font-size: 20px; margin: 0px">Thu</p>
          <!-- 右上下 -->
          <div style="line-height: 5px">
            <p style="margin: 8px">周四</p>
          </div>
        </div>
        <!-- 普通左 -->
        <div
          v-if="data.weekDay != 'Thursday'"
          style="
            border-bottom: 5px solid #909399;
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            width: 50px;
            justify-content: center;
            color: #909399;
            flex-direction: column;
          "
        >
          <!-- 左英文 -->
          <p style="font-size: 20px; margin: 0px">Thu</p>
          <!-- 右上下 -->
          <div style="line-height: 5px">
            <p style="margin: 8px">周四</p>
          </div>
        </div>
        <!-- 右 -->
        <div style="width: 160px; height: 1px; background-color: #cfd3dc"></div>
      </div>
      <!-- 时间线 -->
      <div v-if="sortedAnimeData.Thursday.length" style="margin-top: 10px">
        <el-timeline>
          <el-timeline-item
            :timestamp="item.playtime"
            placement="top"
            v-for="(item, index) in sortedAnimeData.Thursday"
            :key="index"
          >
            <div style="display: flex">
              <div
                style="
                  width: 70px;
                  height: 70px;
                  background-color: #909399;
                  border-radius: 5px;
                "
              ></div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  margin-left: 5px;
                "
              >
                <p class="blueName">{{ item.name }}</p>
                <p style="margin: 0px; color: #f78989">{{ item.episode }}</p>
              </div>
            </div>
          </el-timeline-item>
        </el-timeline>
      </div>
      <div v-else class="noData"></div>
    </div>
    <!-- 周五 -->
    <div>
      <div
        style="
          display: flex;
          width: 240px;
          height: auto;
          align-items: baseline;
          justify-content: space-between;
        "
      >
        <!-- 触发左 -->
        <div
          v-if="data.weekDay == 'Friday'"
          style="
            border-bottom: 5px solid rgb(247, 137, 137);
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            width: 50px;
            justify-content: center;
            color: black;
            flex-direction: column;
          "
        >
          <!-- 左英文 -->
          <p style="font-size: 20px; margin: 0px">Fri</p>
          <!-- 右上下 -->
          <div style="line-height: 5px">
            <p style="margin: 8px">周五</p>
          </div>
        </div>
        <!-- 普通左 -->
        <div
          v-if="data.weekDay != 'Friday'"
          style="
            border-bottom: 5px solid #909399;
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            width: 50px;
            justify-content: center;
            color: #909399;
            flex-direction: column;
          "
        >
          <!-- 左英文 -->
          <p style="font-size: 20px; margin: 0px">Fri</p>
          <!-- 右上下 -->
          <div style="line-height: 5px">
            <p style="margin: 8px">周五</p>
          </div>
        </div>
        <!-- 右 -->
        <div style="width: 160px; height: 1px; background-color: #cfd3dc"></div>
      </div>
      <!-- 时间线 -->
      <div v-if="sortedAnimeData.Friday.length" style="margin-top: 10px">
        <el-timeline>
          <el-timeline-item
            :timestamp="item.playtime"
            placement="top"
            v-for="(item, index) in sortedAnimeData.Friday"
            :key="index"
          >
            <div style="display: flex">
              <div
                style="
                  width: 70px;
                  height: 70px;
                  background-color: #909399;
                  border-radius: 5px;
                "
              ></div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  margin-left: 5px;
                "
              >
                <p class="blueName">{{ item.name }}</p>
                <p style="margin: 0px; color: #f78989">{{ item.episode }}</p>
              </div>
            </div>
          </el-timeline-item>
        </el-timeline>
      </div>
      <div v-else class="noData"></div>
    </div>
    <!-- 周六 -->
    <div>
      <div
        style="
          display: flex;
          width: 240px;
          height: auto;
          align-items: baseline;
          justify-content: space-between;
        "
      >
        <!-- 触发左 -->
        <div
          v-if="data.weekDay == 'Saturday'"
          style="
            border-bottom: 5px solid rgb(247, 137, 137);
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            width: 50px;
            justify-content: center;
            color: black;
            flex-direction: column;
          "
        >
          <!-- 左英文 -->
          <p style="font-size: 20px; margin: 0px">Sat</p>
          <!-- 右上下 -->
          <div style="line-height: 5px">
            <p style="margin: 8px">周六</p>
          </div>
        </div>
        <!-- 普通左 -->
        <div
          v-if="data.weekDay != 'Saturday'"
          style="
            border-bottom: 5px solid #909399;
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            width: 50px;
            justify-content: center;
            color: #909399;
            flex-direction: column;
          "
        >
          <!-- 左英文 -->
          <p style="font-size: 20px; margin: 0px">Sat</p>
          <!-- 右上下 -->
          <div style="line-height: 5px">
            <p style="margin: 8px">周六</p>
          </div>
        </div>
        <!-- 右 -->
        <div style="width: 160px; height: 1px; background-color: #cfd3dc"></div>
      </div>
      <!-- 时间线 -->
      <div v-if="sortedAnimeData.Saturday.length" style="margin-top: 10px">
        <el-timeline>
          <el-timeline-item
            :timestamp="item.playtime"
            placement="top"
            v-for="(item, index) in sortedAnimeData.Saturday"
            :key="index"
          >
            <div style="display: flex">
              <div
                style="
                  width: 70px;
                  height: 70px;
                  background-color: #909399;
                  border-radius: 5px;
                "
              ></div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  margin-left: 5px;
                "
              >
                <p class="blueName">{{ item.name }}</p>
                <p style="margin: 0px; color: #f78989">{{ item.episode }}</p>
              </div>
            </div>
          </el-timeline-item>
        </el-timeline>
      </div>
      <div v-else class="noData"></div>
    </div>
    <!-- 周日 -->
    <div>
      <div
        style="
          display: flex;
          width: 240px;
          height: auto;
          align-items: baseline;
          justify-content: space-between;
        "
      >
        <!-- 触发左 -->
        <div
          v-if="data.weekDay == 'Sunday'"
          style="
            border-bottom: 5px solid rgb(247, 137, 137);
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            width: 50px;
            justify-content: center;
            color: black;
            flex-direction: column;
          "
        >
          <!-- 左英文 -->
          <p style="font-size: 20px; margin: 0px">Sun</p>
          <!-- 右上下 -->
          <div style="line-height: 5px">
            <p style="margin: 8px">周日</p>
          </div>
        </div>
        <!-- 普通左 -->
        <div
          v-if="data.weekDay != 'Sunday'"
          style="
            border-bottom: 5px solid #909399;
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            width: 50px;
            justify-content: center;
            color: #909399;
            flex-direction: column;
          "
        >
          <!-- 左英文 -->
          <p style="font-size: 20px; margin: 0px">Sun</p>
          <!-- 右上下 -->
          <div style="line-height: 5px">
            <p style="margin: 8px">周日</p>
          </div>
        </div>
        <!-- 右 -->
        <div style="width: 160px; height: 1px; background-color: #cfd3dc"></div>
      </div>
      <!-- 时间线 -->
      <div v-if="sortedAnimeData.Sunday.length" style="margin-top: 10px">
        <el-timeline>
          <el-timeline-item
            :timestamp="item.playtime"
            placement="top"
            v-for="(item, index) in sortedAnimeData.Sunday"
            :key="index"
          >
            <div style="display: flex">
              <div
                style="
                  width: 70px;
                  height: 70px;
                  background-color: #909399;
                  border-radius: 5px;
                "
              ></div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  margin-left: 5px;
                "
              >
                <p class="blueName">{{ item.name }}</p>
                <p style="margin: 0px; color: #f78989">{{ item.episode }}</p>
              </div>
            </div>
          </el-timeline-item>
        </el-timeline>
      </div>
      <div v-else class="noData"></div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount } from "vue";
import getTime from "../hooks/getTime";

export default {
  props: {
    data: Object,
  },
  setup(props) {
    let data = reactive(props.data);

    console.log(data);
    console.log(data.animeData.WednesDay);

    let animeData = data.animeData;
    // 根据播放时间进行排序函数
    function sortAnimeData(animeData) {
      const days = Object.keys(animeData);
      for (let day of days) {
        const animeList = animeData[day];
        const sortedAnimeList = animeList.sort((a, b) => {
          const aDate = new Date(`2000-01-01T${a.playtime}:00`);
          const bDate = new Date(`2000-01-01T${b.playtime}:00`);
          return aDate - bDate;
        });
        sortedAnimeData[day] = sortedAnimeList;
      }
      return sortedAnimeData;
    }
    const sortedAnimeData = {};
    // 生命函数
    onBeforeMount(() => {
      let timeDate = getTime();
      //   console.log(timeDate);
      data.weekDay = timeDate.weekDay;
      const sortedAnimeData = sortAnimeData(animeData);
      console.log(sortedAnimeData);
    });

    return {
      ...toRefs(data),
      sortedAnimeData,
    };
  },
};
</script>

<style lang="less" scoped>
.blueName {
  margin: 0px;
}
.blueName:hover {
  color: #409eff;
}
.noData {
  background-image: url("C:\fake-bilibli\public\empty-2.png");
  background-position-x: center;
  background-position-y: top;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 500px;
}
</style>