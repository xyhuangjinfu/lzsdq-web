<template>
<div class="article-list-item-container">
  <a :href="'/article/' + article.id" target="_blank">
    <div class="article-list-item-content">
      <img
        class="article-cover"
        :src="
          article.coverUrl == null
            ? require('~/assets/img/yys.png')
            : article.coverUrl
        "
      />
      <div class="article-info">
        <div class="article-title">{{ article.title }}</div>
        <div class="artitle-summary">{{ article.summary }}</div>
        <div class="article-read-count">
          阅读({{ article.readRecord.readCount }})
        </div>
      </div>
    </div>
  </a>
  </div>
</template>

<style scoped>
</style>

<script>
// import utils from "~/assets/js/utils.js";

export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: require("~/assets/css/components/article_list_item.css"),
        },
      ],
    };
  },
  props: ["article"],
};
</script>
