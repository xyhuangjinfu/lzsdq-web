<template>
  <div id="hot_container">
    <div id="hot_content">
      <div id="hot_label">热门推荐</div>
      <div id="hot_article_list">
        <div
          class="hot_article_item"
          v-for="article in articles"
          v-bind:key="article.id"
        >
          <router-link
            class="article_title"
            v-bind:to="'/a/' + article.id"
            target="_blank"
            >{{ article.title }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#hot_container {
  width: 400px;
  min-width: 300px;
  padding: 20px;
  background-color: #00000000;
}
#hot_content {
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgb(220, 220, 220);
}
#hot_label {
  color: rgb(13, 71, 161);
  font-size: 1.3em;
  font-weight: bold;
}
.hot_article_item {
  margin-top: 10px;
}
.article_title {
  color: black;
}
.article_title:hover {
  color: rgb(13, 71, 161);
}
</style>

<script>
import utils from "../js/utils.js";

export default {
  methods: {
    getCreateTime: function (d) {
      return utils.format_date(d);
    },
  },
  data() {
    return {
      articles: [],
    };
  },
  async fetch() {
    this.articles = await fetch(
      "http://www.lzsdq.cn:9999/api/articles/hot?limit=10"
    ).then((res) => {
      return res.json();
    });
  },
};
</script>