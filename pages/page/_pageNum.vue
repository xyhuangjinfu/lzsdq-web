<template>
  <div class="pagination-page display-flex flex-direction-column">
    <Header />
    <div class="content flex-1">
      <div class="article-list">
        <ArticleList :pageData="pageData" />
      </div>
      <div class="side">
        <Hot />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style>
</style>


<script>
import axios from "axios";

export default {
  css: [require("~/assets/css/pages/page/_pageNum.css")],
  head() {
    return {
      title: "有意思-奇怪的知识增加了",
      meta: [
        {
          name: "description",
          content: "有意思-奇怪的知识增加了",
        },
        {
          name: "keywords",
          content: "有意思-奇怪的知识增加了",
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
    var pageNum = this.$route.params.pageNum;
    this.pageData = await axios
      .get(
        "https://" +
          process.env.API_DOMAIN +
          "/api/articles/?page_size=10&page_num=" +
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