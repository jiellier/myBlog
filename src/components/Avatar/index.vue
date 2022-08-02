<template>
  <img
    class="avatar-container"
    :src="url"
    :style="{ width: size + 'px', height: size + 'px' }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String, // 表示url属性的值必须是字符串类型
      required: true, // url属性必须传值
    },
    size: {
      type: Number,
      default: 150, // 默认值，没有传递属性值时，默认为150
    },
  },
};
</script>

<style scoped>
.avatar-container {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>
