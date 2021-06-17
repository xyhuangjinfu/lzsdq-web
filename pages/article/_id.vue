<template>
  <div class="page-article">
    <Header />
    <div class="content">
      <div class="article">
        <Article />
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
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Home page description",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: require("~/assets/css/pages/article/_id.css"),
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
      "http://www.lzsdq.cn:9999/api/articles/" + this.$route.params.id
    ).then((res) => res.json());
  },
};
</script>
