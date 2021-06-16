<template>
  <div class="article-list-container">
    <ArticleListItem class="component-article"
      v-for="article in pageData.articles"
      v-bind:key="article.id"
      :article="article"
    />
    <div class="pagination">
      <a :href="pageData.preUrl" v-show="pageData.page > 1">上一页</a>
      <a :href="pageData.nextUrl" v-show="pageData.page < pageData.totalPage"
        >下一页</a
      >
    </div>
  </div>
</template>

<style scoped>
</style>


<script>
import utils from "~/assets/js/utils.js";

export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: require("~/assets/css/components/article_list.css"),
        },
      ],
    };
  },
  props: ["pageData"],
  methods: {
    getCreateTime: function (d) {
      return utils.format_date(d);
    },
  },
};
</script>