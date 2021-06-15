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
/* #hot-container {
  width: 400px;
  min-width: 300px;
  padding: 10px;
  background-color: #00000000;
}
#hot-content {
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgb(220, 220, 220);
}
#hot-label {
  color: rgb(13, 71, 161);
  font-size: 1.3em;
  font-weight: bold;
}
.hot-article-item {
  margin-top: 10px;
}
.hot-number-one {
  color: rgb(13, 71, 161);
}
.hot-number-two {
  color: rgb(21, 101, 192);
}
.hot-number-three {
  color: rgb(25, 118, 210);
}
.hot-number-four {
  color: rgb(181, 181, 181);
}
.article-title {
  color: black;
}
.article-title:hover {
  color: rgb(13, 71, 161);
  text-decoration: none;
} */
</style>

<script>
import utils from "~/assets/js/utils.js";
import axios from "axios";

export default {
  head() {
    return {
      link: [{ rel: "stylesheet", href: require("~/assets/css/hot.css") }],
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