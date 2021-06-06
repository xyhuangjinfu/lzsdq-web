<template>
  <div id="page_container">
    <ArticleList :pageData="pageData"/>
  </div>
</template>

<style>
#page_container {
  min-height: 100vh;
  background-color: rgb(247, 247, 247);
}
</style>


<script>
import axios from "axios";

export default {
  data() {
    return {
      pageData: {
        page: 0,
        totalPage: 0,
        articles: [],
        preUrl:"#",
        nextUrl:"#",
      },
    };
  },
  async fetch() {
    this.pageData = await axios
      .get("http://www.lzsdq.cn:9999/api/articles/?page_size=5&page_num=1")
      .then((resp) => {
        return {
          page: resp.data.page,
          totalPage: resp.data.totalPage,
          articles: resp.data.data,
          preUrl:"#",
          nextUrl:"/p/2",
        };
      });
  },
};
</script>