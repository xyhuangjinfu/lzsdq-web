<template>
  <div class="article-page display-flex flex-direction-column">
    <Header />
    <div class="content flex-1">
      <div class="article">
        <Article :article="article" />
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
  css: [require("~/assets/css/pages/article/_articleId.css")],
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          name: "description",
          content: this.article.title,
        },
        {
          name: "keywords",
          content: this.article.title,
        },
      ],
    };
  },
  data() {
    return {
      article: {},
    };
  },
  async fetch() {
    this.article = await axios
      .get(
        "https://" +
          process.env.API_DOMAIN +
          "/api/articles/" +
          this.$route.params.articleId
      )
      .then(
        (resp) => {
          return resp.data;
        },
        (error) => {
          return null;
        }
      );
  },
};
</script>
