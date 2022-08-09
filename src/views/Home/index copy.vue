<template>
  <div class="home-container" ref="container" @wheel="handleWheel">
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in banners" :key="item.id">
        <CarouselItem :carousel="item" />
      </li>
    </ul>
    <div v-show="index > 0" @click="switchTo(index - 1)" class="icon icon-up">
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index < banners.length - 1"
      @click="switchTo(index + 1)"
      class="icon icon-down"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        :class="{ active: i === index }"
        v-for="(item, i) in banners"
        :key="item.id"
        @click="switchTo(i)"
      ></li>
    </ul>
    <Loading v-if="isLoading" />
  </div>
</template>

<script>
import { getBanners } from "@/api/banner.js";
import CarouselItem from "./CarouselItem.vue";
import Icon from "@/components/Icon";
import Loading from "@/components/Loading";
export default {
  components: {
    CarouselItem,
    Icon,
    Loading,
  },
  data() {
    return {
      banners: [],
      index: 0, // 当前显示的是第几张轮播图，数组索引
      containerHeight: 0, // 整个容器的高度
      switching: false, // 是否正在切换中
      isLoading: true, // 是否正在加载
    };
  },
  async created() {
    this.banners = await getBanners();
    this.isLoading = false;
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    // 切换轮播图
    switchTo(i) {
      if (i < 0) i = 0;
      if (i >= this.banners.length) i = this.banners.length - 1;
      this.index = i;
    },
    handleWheel(e) {
      if (this.switching) {
        return;
      }
      if (e.deltaY < -5 && this.index > 0) {
        this.switching = true;
        this.index--;
      } else if (e.deltaY > 5 && this.index < this.banners.length - 1) {
        this.switching = true;
        this.index++;
      }
    },
    handleTransitionEnd() {
      this.switching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/common.module.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  .carousel-container {
    width: 100%;
    height: 100%;
    transition: 0.5s;
    padding: 0;
    li {
      width: 100%;
      height: 100%;
    }
  }
  ul {
    margin: 0;
  }
  .icon {
    .abs-center();
    @gap: 25px;
    font-size: 30px;
    transform: translateX(-50%);
    color: @gray;
    cursor: pointer;
    &.icon-up {
      top: @gap;
      animation: jump-up 2s infinite;
    }
    &.icon-down {
      top: auto;
      bottom: @gap;
      animation: jump-down 2s infinite;
    }
    @jump: 10px;
    @keyframes jump-up {
      0% {
        transform: translate(-50%, 0px);
      }
      50% {
        transform: translate(-50%, -@jump);
      }
      100% {
        transform: translate(-50%, 0px);
      }
    }
    @keyframes jump-down {
      0% {
        transform: translate(-50%, 0px);
      }
      50% {
        transform: translate(-50%, @jump);
      }
      100% {
        transform: translate(-50%, 0px);
      }
    }
  }
  .indicator {
    .abs-center();
    padding: 0;
    transform: translateY(-50%);
    left: auto;
    right: 20px;
    li {
      width: 7px;
      height: 7px;
      background-color: @words;
      border-radius: 50%;
      margin-bottom: 10px;
      cursor: pointer;
      border: 1px solid #fff;
      box-sizing: border-box;
      &.active {
        background-color: #fff;
      }
    }
  }
}
</style>
