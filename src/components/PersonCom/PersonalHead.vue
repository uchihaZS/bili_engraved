<template>
  <div style="border-radius: 10px">
    <div
      style="
        width: 100%;
        height: auto;
        box-shadow: 0 0 0 1px #eee;
        border-radius: 10px;
      "
    >
      <div class="bgImg">
        <div
          style="
            display: flex;
            position: absolute;
            top: 180px;
            margin-left: 10px;
          "
        >
          <el-avatar :size="60" :src="circleUrl" />
          <div style="height: 60px; margin-left: 15px">
            <div style="display: flex; width: 300px">
              <p
                style="
                  width: auto;
                  font-size: 18px;
                  font-weight: bold;
                  color: white;
                  margin-top: 0px;
                "
              >
                用户名
              </p>
              <p style="margin-left: 15px; margin-top: 0px; color: red">等级</p>
            </div>
            <p style="margin-top: -7px; color: #d1dbe5">个性签名</p>
          </div>
        </div>
      </div>
      <div
        style="
          height: 75px;
          display: flex;
          flex-direction: row;
          padding: 0 10px;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 0 0 1px #eee;
          background-color: white;
        "
      >
        <div style="display: flex">
          <div class="tag" @click="toPersonMain">
            <div>主页</div>
            <div class="direction"></div>
          </div>
          <div class="tag" @click="toPersonDya">
            <div>动态</div>
            <div class="direction"></div>
          </div>
          <div class="tag" @click="toPersonVid">
            <div>投稿</div>
            <div class="direction"></div>
          </div>
          <div class="tag" @click="toPersonSer">
            <div>合集与列表</div>
            <div class="direction"></div>
          </div>
          <div class="tag" @click="toPersonCol">
            <div>收藏</div>
            <div class="direction"></div>
          </div>
          <div class="tag" @click="toPersonSub">
            <div>订阅</div>
            <div class="direction"></div>
          </div>
          <div class="tag" @click="toPersonOpt">
            <div>设置</div>
            <div class="direction"></div>
          </div>
        </div>
        <el-input
          v-model="search"
          placeholder="搜索视频，动态"
          :prefix-icon="Search"
          style="margin-right: 374px; width: 230px; height: 40px"
        />
        <div style="display: flex">
          <div
            style="
              margin-left: 10px;
              align-items: center;
              display: flex;
              flex-direction: column;
              justify-content: center;
              line-height: 0px;
            "
          >
            <p>关注数</p>
            <p>xxx</p>
          </div>
          <div
            style="
              margin-left: 10px;
              align-items: center;
              display: flex;
              flex-direction: column;
              justify-content: center;
              line-height: 0px;
            "
          >
            <p>粉丝数</p>
            <p>xxx</p>
          </div>
          <div
            style="
              margin-left: 10px;
              align-items: center;
              display: flex;
              flex-direction: column;
              justify-content: center;
              line-height: 0px;
            "
          >
            <p>获赞数</p>
            <p>xxx</p>
          </div>
          <div
            style="
              margin-left: 10px;
              align-items: center;
              display: flex;
              flex-direction: column;
              justify-content: center;
              line-height: 0px;
            "
          >
            <p>播放数</p>
            <p>xxx</p>
          </div>
          <div
            style="
              margin-left: 10px;
              align-items: center;
              display: flex;
              flex-direction: column;
              justify-content: center;
              line-height: 0px;
            "
          >
            <p>阅读数</p>
            <p>xxx</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { Search } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    let touxiang = reactive({
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    });
    const router = useRouter();
    let href = reactive({
      toPersonMain() {
        router.push({ path: "/personalpage" });
      },
      toPersonDya() {
        router.push({ path: "/personaldya" });
      },
      toPersonVid() {
        router.push({ path: "/personalvid" });
      },
      toPersonSer() {
        router.push({ path: "/personalser" });
      },
      toPersonCol() {
        router.push({ path: "/personalcol" });
      },
      toPersonSub() {
        router.push({ path: "/personalsub" });
      },
      toPersonOpt() {
        router.push({ path: "/personalopt" });
      },
    });

    return {
      ...toRefs(touxiang),
      Search,
      ...toRefs(href),
    };
  },
};
</script>

<style scoped lang="less">
.tag {
  font-size: 20px;
  height: 75px;
  margin-right: 45px;
  align-items: center;
  display: flex;
  width: auto;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
}
.tag:hover {
  color: #409eff;
}
.tag:hover .direction {
  background-color: #409eff;
}
.direction {
  height: 2px;
  width: 100%;
  position: relative;
  top: 25px;
}
.bgImg {
  background-image: url("C:\fake-bilibli\public\personalBGimg.webp");
  box-shadow: inset 0px -55px 55px rgba(14, 13, 13, 0.719);
  background-size: cover;
  width: 100%;
  height: 250px;
  display: flex;
}
</style>