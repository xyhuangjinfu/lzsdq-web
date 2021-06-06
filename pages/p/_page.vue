<template>
  <div id="page_container">
    <Header />
    <ArticleList id="article_list_container" :pageData="pageData" />
    <Footer />
  </div>
</template>

<style>
#page_container {
  min-height: 100vh;
  background-color: rgb(247, 247, 247);
  display: flex;
  flex-flow: column nowrap;
}
#article_list_container {
  margin: 0 auto;
  flex-grow: 1;
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
        preUrl: "#",
        nextUrl: "#",
      },
    };
  },
  async fetch() {
    var pageNum = this.$route.params.page;
    this.pageData = await axios
      .get(
        "http://www.lzsdq.cn:9999/api/articles/?page_size=10&page_num=" +
          pageNum
      )
      .then((resp) => {
        return {
          page: resp.data.page,
          totalPage: resp.data.totalPage,
          articles: resp.data.data,
          preUrl: "/p/" + (parseInt(pageNum) - 1),
          nextUrl: "/p/" + (parseInt(pageNum) + 1),
        };
      });
  },
};
</script>