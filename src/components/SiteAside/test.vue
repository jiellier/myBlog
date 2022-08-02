<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
import "@/styles/global.less";
import SiteAside from "./index.vue";
export default {
  components: {
    SiteAside,
  },
};
</script>

<style scoped lang="less">
.test-container {
  width: 250px;
  height: 1000px;
  background-color: #000;
  border: 2px solid red;
  margin: 0 auto;
}
</style>
