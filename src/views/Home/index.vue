<template>
  <div class="home-container" ref="container">
    <h1>主页面</h1>
    <button @click="handleClick">Clicks</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$showMessage({
        content: "评论成功",
        type: "success",
        container: this.$refs.container,
        callback: function () {
          console.log("完成！！！");
        },
      });
    },
  },
};
</script>

<style scoped>
.home-container {
  width: 600px;
  height: 400px;
  background-color: lightblue;
  margin: 30px auto;
}
</style>
