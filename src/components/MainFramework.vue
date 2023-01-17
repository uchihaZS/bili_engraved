<template>
  <div class="row">
    <el-row style="width: 100%">
      <el-col :span="1">
        <div style="background-color: green; width: 100%; height: 100%"></div>
      </el-col>
      <el-col :span="22" style="background-color: white"> </el-col>
      <el-col :span="1">
        <div style="background-color: green; width: 100%; height: 100%"></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name:'MainFramework',
  setup() {},
};
</script>

<style lang="less" scoped>

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
</style>