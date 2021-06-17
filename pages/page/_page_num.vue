<template>
  <div class="pagination-page">
    <Header />
    <div class="content">
      <div class="article-list">
        <ArticleList :pageData="pageData"/>
      </div>
      <div class="side">
        <Hot />
      </div>
    </div>
    <Footer/>
  </div>

</template>

<style>
</style>


<script>
import axios from "axios";

export default {
   head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: require("~/assets/css/pages/page/_page_num.css"),
        },
      ],
    };
  },
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
    var pageNum = this.$route.params.page_num;
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
          preUrl: "/page/" + (parseInt(pageNum) - 1),
          nextUrl: "/page/" + (parseInt(pageNum) + 1),
        };
      });
  },
};
</script>