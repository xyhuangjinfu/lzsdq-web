<template>
  <!-- <div id="page_container">
    <Header />
    <div id="content">
      <ArticleList id="article_list_container" :pageData="pageData" />
      <Hot id="hot_container" />
    </div>
    <Footer />
  </div> -->

  <div class="page">
    <Header />
    <div class="content">
      <ArticleList class="component-article-list" :pageData="pageData"/>
      <div class="component-side">
        <Hot />
      </div>
    </div>
    <Footer class="component-footer"/>
  </div>

</template>

<style>
/* #page_container {
  min-height: 100vh;
  background-color: rgb(247, 247, 247);
  display: flex;
  flex-flow: column nowrap;
}
#content {
  width: 65%;
  margin: 0 auto;
  flex-grow: 1;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
}
#article_list_container {
  margin: 10px auto;
  flex-grow: 1;
}
#hot_container {
  margin: 10px 0;
} */
</style>


<script>
import axios from "axios";

export default {
   head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: require("~/assets/css/page/_page.css"),
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
          preUrl: "/page/" + (parseInt(pageNum) - 1),
          nextUrl: "/page/" + (parseInt(pageNum) + 1),
        };
      });
  },
};
</script>