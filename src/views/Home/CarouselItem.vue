<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-img" ref="image" :style="imagePosition">
      <ImageLoader
        @load="this.showWords"
        :placeholder="carousel.midImg"
        :src="carousel.bigImg"
      />
    </div>
    <div ref="title" class="title">{{ carousel.title }}</div>
    <div ref="description" class="description">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null, // 外层容器的尺寸
      innerSize: null, // 里面图片的尺寸
      mouseX: 0, // 鼠标的横坐标
      mouseY: 0, // 鼠标的纵坐标
    };
  },
  components: {
    ImageLoader,
  },
  props: ["carousel"],
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.description.clientWidth;
    this.setSize();
    this.mouseX = this.containerSize.width / 2;
    this.mouseY = this.containerSize.height / 2;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  methods: {
    // 调用该方法显示文字
    showWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.description.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.description.style.width = 0;
      // 强制让浏览器渲染一次
      this.$refs.title.clientHeight;

      this.$refs.title.style.transition = "1s";
      this.$refs.description.style.transition = "2s 1s";
      this.$refs.title.style.width = this.titleWidth + "px";
      this.$refs.description.style.width = this.descWidth + "px";
    },
    // 计算尺寸
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };

      this.innerSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      };
    },
    handleMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleMouseLeave() {
      this.mouseX = this.containerSize.width / 2;
      this.mouseY = this.containerSize.height / 2;
    },
  },
  computed: {
    // 得到图片坐标
    imagePosition() {
      if (!this.innerSize || !this.containerSize) {
        return undefined;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width; // 多出的宽度
      const extraHeight = this.innerSize.height - this.containerSize.height; // 多出的高度
      const left = (-this.mouseX * extraWidth) / this.containerSize.width;
      const top = (-this.mouseY * extraHeight) / this.containerSize.height;
      return {
        transform: `translate(${left}px, ${top}px)`,
      };
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.carousel-item-container {
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  overflow: hidden;
  .carousel-img {
    width: 110%;
    height: 110%;
    position: absolute;
    transition: 0.3s;
    left: 0;
    top: 0;
  }
  .title,
  .description {
    position: absolute;
    left: 30px;
    letter-spacing: 3px;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
    white-space: nowrap;
    overflow: hidden;
  }
  .title {
    top: calc(50% - 40px);
    font-size: 2em;
  }
  .description {
    top: calc(50% + 20px);
    font-size: 1.2em;
    color: darken(@gray, 20%);
  }
}
</style>
