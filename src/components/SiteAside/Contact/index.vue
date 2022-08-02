<template>
  <ul class="contact-container">
    <li>
      <router-link to="">
        <div class="icon"><Icon type="github" /></div>
        <span>DuYi-Edu</span>
      </router-link>
    </li>
    <li>
      <a href="mailto:1945436197@qq.com">
        <div class="icon"><Icon type="mail" /></div>
        <span>1945436197@qq.com</span>
      </a>
    </li>
    <li>
      <a
        href="tencent://message/?Menu=yes&uin=1784023496&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      >
        <div class="icon"><Icon type="qq" /></div>
        <span>1945436197</span>
      </a>
      <div class="pop">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
    </li>
    <li>
      <a href="">
        <div class="icon weixin"><Icon type="weixin" /></div>
        <span>leaf1597</span>
      </a>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.contact-container {
  margin: 0;
  padding: 20px;
  color: @gray;
  @itemHeight: 30px;
  li {
    height: @itemHeight;
    line-height: @itemHeight;
    margin: 14px 0;
    position: relative;
    font-size: 14px;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    display: flex;
    cursor: pointer;
  }
  .icon {
    font-size: 26px;
    width: 36px;
    &.weixin {
      font-size: 32px;
      text-indent: -3px;
    }
  }
  .pop {
    position: absolute;
    left: 0;
    bottom: @itemHeight + 5px;
    padding: 10px 15px;
    background-color: #fff;
    border-radius: 5px;
    img {
      width: 150px;
      height: 150px;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -10px;
      border: 5px solid;
      border-color: #fff transparent transparent transparent;
    }
    transform: scaleY(0);
    transition: all 0.5s;
    transform-origin: center bottom;
  }
}
</style>
