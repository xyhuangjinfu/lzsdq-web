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
      title: this.article.title + "_有意思",
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
  methods: {
    read: function () {
      let data = { id: this.article.id };
      var url = "https://" + process.env.API_DOMAIN + "/api/articles/read";
      axios.post(url, data).then(
        (res) => {},
        (error) => {}
      );
    },
  },
  data() {
    return {
      article: {
        paragraphs: [],
      },
    };
  },
  async fetch() {
    var result = await axios
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

    if (result == null) {
      this.$nuxt.context.error({
        statusCode: 404,
        message: "页面不存在",
      });
    } else {
      this.article = result;
    }

    this.read();
  },
};
</script>
