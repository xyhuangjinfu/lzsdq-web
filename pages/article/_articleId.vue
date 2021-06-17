<template>
  <div class="page-article">
    <Header />
    <div class="content">
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
      ],
    };
  },
  data() {
    return {
      article: {},
    };
  },
  async fetch() {
    this.article = await fetch(
      "http://www.lzsdq.cn:9999/api/articles/" + this.$route.params.articleId
    ).then((res) => res.json());
  },
};
</script>
