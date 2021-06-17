<template>
  <div class="hot-container">
    <div class="hot-content">
      <div class="hot-label">热门推荐</div>
      <div class="hot-article-list">
        <div
          class="hot-article-item"
          v-for="(article, index) in articles"
          v-bind:key="article.id"
        >
          <span :class="getHotClass(index)">{{ index + 1 }}&nbsp;</span>
          <router-link
            class="article-title"
            v-bind:to="'/article/' + article.id"
            target="_blank"
            >{{ article.title }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import utils from "~/assets/js/utils.js";
import axios from "axios";

export default {
  head() {
    return {
      link: [{ rel: "stylesheet", href: require("~/assets/css/components/Hot.css") }],
    };
  },
  methods: {
    getHotClass: function (index) {
      if (index == 0) {
        return "hot-number-one";
      } else if (index == 1) {
        return "hot-number-two";
      } else if (index == 2) {
        return "hot-number-three";
      } else {
        return "hot-number-four";
      }
    },
    getCreateTime: function (d) {
      return utils.format_date(d);
    },
    getAndSetHot: async function () {
      this.articles = await axios
        .get("http://www.lzsdq.cn:9999/api/articles/hot?limit=10")
        .then((res) => {
          return res.data;
        });
    },
  },
  data() {
    return {
      refreshTimer: "",
      articles: [],
    };
  },
  async fetch() {
    await this.getAndSetHot();
  },
  mounted() {
    this.refreshTimer = setInterval(this.getAndSetHot, 1000 * 60);
  },
  beforeDestroy() {
    clearInterval(this.refreshTimer);
  },
};
</script>