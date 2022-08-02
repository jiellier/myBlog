<template>
  <div class="image-loader-container">
    <img v-if="!everthingDone" class="placeholder" :src="placeholder" />
    <img
      class="origin"
      :src="src"
      :style="{ opacity: originOpacity, transition: `${duration}ms` }"
      @load="handleLoad"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      originLoaded: false, // 原图是否加载完成
      everthingDone: false, // 是否所有事情都做完了
    };
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    handleLoad() {
      this.originLoaded = true;
      setTimeout(() => (this.everthingDone = true), this.duration);
      this.$emit("load");
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/common.module.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  img {
    .self-fill();
    object-fit: cover;
  }
  .placeholder {
    filter: blur(2vw);
  }
}
</style>
