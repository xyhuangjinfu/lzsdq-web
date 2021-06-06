<template>
  <div id="page_container">
    <Header />
    <div id="content">
      <Article id="article_container" />
      <Hot />
    </div>
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
#content {
  width: 65%;
  margin: 0 auto;
  flex-grow: 1;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
}
#article_container {
  margin: 0 auto;
  flex-grow: 1;
}
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
