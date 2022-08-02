<template>
  <div class="site-aside-container">
    <Avatar
      url="https://img2.baidu.com/it/u=2003784205,4064101857&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=502"
    />
    <h1 class="title">温杰的博客</h1>
    <Menu />
    <Contact />
    <p class="footer">黑ICP备17001719号</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "@/components/SiteAside/Menu";
import Contact from "@/components/SiteAside/Contact";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  padding: 20px 0;
  background-color: @dark;
  .avatar-container {
    margin: 0 auto;
  }
  overflow-x: hidden;
  overflow-y: auto;
  .footer {
    text-align: center;
    font-size: 12px;
  }
  .title {
    font-size: 1.2em;
    text-align: center;
    color: #fff;
  }
}
</style>
