<template>
  <div class="article-container">
    <div class="article-content">
      <h1 class="article-title">{{ article.title }}</h1>
      <div class="article-meta">阅读({{ article.readRecord.readCount }})</div>
      <p
        class="paragraph"
        v-for="(paragraph, index) in article.paragraphs"
        v-bind:key="paragraph.id"
      >
        {{ paragraph.content }}
        <img
          class="illustration"
          :src="article.coverUrl"
          :alt="article.title"
          v-if="index == illustrationPosition && article.coverUrl !== null"
        />
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import utils from "~/assets/js/utils.js";

export default {
  css: [require("~/assets/css/components/Article.css")],
  props: ["article"],
  methods: {
    getCreateTime: function (d) {
      return utils.format_date(d);
    },
    getIllustrationPosition: function (paragraphCount) {
      //不在最后一个段落
      if (paragraphCount <= 2) {
        return 0;
      } else {
        // return Math.round(Math.random() * (paragraphCount - 2));
        return 1;
      }
    },
  },
  data() {
    return {
      illustrationPosition: 0,
    };
  },
  async fetch() {
    this.illustrationPosition = this.getIllustrationPosition(
      this.article.paragraphs.length
    );
  },
};
</script>
