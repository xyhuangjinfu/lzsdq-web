<template>
  <div class="article-list-container">
    <div
      class="article-list-item"
      v-for="article in pageData.articles"
      v-bind:key="article.id"
    >
      <ArticleListItem :article="article" />
    </div>
    <div class="pagination">
      <a :href="pageData.preUrl" v-if="pageData.page > 1">上一页</a>
      <a :href="pageData.nextUrl" v-if="pageData.page < pageData.totalPage"
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
  css: [require("~/assets/css/components/ArticleList.css")],
  props: ["pageData"],
  methods: {
    getCreateTime: function (d) {
      return utils.format_date(d);
    },
  },
};
</script>