<template>
  <div id="app">
    <h1>Vue 组件</h1>
    <Pager :current="current" :total="total" @pageChange="handlePageChange" />
  </div>
</template>

<script>
import Pager from "./index.vue";
export default {
  components: {
    Pager,
  },
  data() {
    return {
      total: 302,
      current: 2,
    };
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
    },
  },
};
</script>

<style></style>
