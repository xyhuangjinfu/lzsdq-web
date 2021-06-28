<template>
  <div class="article-container">
    <div class="article-content">
      <div class="article-title">{{ article.title }}</div>
      <div class="article-meta">
        阅读({{ article.readCount }})&nbsp;&nbsp;&nbsp;点赞({{
          article.voteCount
        }})
      </div>
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
    <div class="article-operate">
      <button class="vote" @click="vote">点赞</button>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import axios from "axios";
import utils from "~/assets/js/utils.js";
import toast from "~/assets/js/toast.js";

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
    vote: function () {
      let data = { id: this.article.id };
      var url = "http://" + process.env.API_DOMAIN + ":9999/api/articles/vote";
      axios.post(url, data).then(
        (res) => {
          toast.toast("点赞成功");
          this.article.voteCount++;
        },
        (error) => {
          toast.toast("点赞失败");
        }
      );
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
