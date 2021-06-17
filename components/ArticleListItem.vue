<template>
  <div class="article-list-item-container">
    <a :href="'/article/' + article.id" target="_blank">
      <div class="article-list-item-content display-flex flex-direction-row">
        <img
          class="article-cover"
          :src="
            article.coverUrl == null
              ? require('~/assets/img/yys.png')
              : article.coverUrl
          "
          :alt="article.coverUrl == null ? '有意思' : article.title"
        />
        <div class="article-info flex-1">
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
  css: [require("~/assets/css/components/ArticleListItem.css")],
  props: ["article"],
};
</script>
