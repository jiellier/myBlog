// vue-cli的配置文件
module.exports = {
  devServer: {
    proxy: {
      "/api/banner": {
        target: "https://www.baidu.com",
      },
    },
  },
};
