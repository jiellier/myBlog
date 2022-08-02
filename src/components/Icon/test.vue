<template>
  <div id="app">
    <h1>测试Icon组件</h1>
    <div class="item" v-for="t in types" :key="t">
      <Icon :type="t" />
    </div>
  </div>
</template>

<script>
import Icon, { types } from "./index";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      types,
    };
  },
};
</script>

<style></style>
