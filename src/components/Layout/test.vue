<template>
  <div class="test-container">
    <Layout>
      <template v-slot:left>
        <div class="left">左边栏区域，宽度适应内容，溢出隐藏</div>
      </template>
      <div class="main">主区域，宽度占满剩余空间，溢出隐藏</div>
      <template #right>
        <div class="right">右边栏区域，宽度适应内容，溢出隐藏</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./index.vue";
export default {
  components: {
    Layout,
  },
};
</script>

<style scoped lang="less">
.test-container {
  width: 800px;
  height: 600px;
  border: 2px solid;
  margin: 0 auto;
}
.left {
  width: 200px;
  height: 100%;
  background-color: #f40;
}
.main {
  width: 100%;
  height: 100%;
}
.right {
  width: 150px;
  height: 100%;
  background-color: #f40;
}
</style>
