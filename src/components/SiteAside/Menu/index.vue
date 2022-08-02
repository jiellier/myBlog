<template>
  <ul class="menu-container">
    <li v-for="item in items" :key="item.link">
      <router-link :exact="item.exact" :to="{ name: item.name }">
        <div class="icon"><Icon :type="item.type" /></div>
        <span>{{ item.title }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          type: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          type: "blog",
          exact: false,
        },
        {
          name: "About",
          title: "关于我",
          type: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          type: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          type: "chat",
          exact: true,
        },
      ],
    };
  },
  methods: {
    isActive(item) {
      const link = item.link.toLowerCase(); // 菜单的链接地址
      const curPath = location.pathname.toLowerCase(); // 当前页面的访问路劲
      if (item.startWith) {
        return curPath.startsWith(link);
      } else {
        return curPath === link;
      }
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.menu-container {
  margin: 24px 0;
  padding: 0;
  color: @gray;
  @itemHeight: 45px;
  li {
    height: @itemHeight;
    line-height: @itemHeight;
    .router-link-active {
      color: #fff;
      background-color: darken(@words, 3%);
    }
  }
  a {
    padding: 0 50px;
    display: flex;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
  }
  .icon {
    width: 24px;
  }
}
</style>
