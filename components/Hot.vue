<template>
  <div id="hot_container">
    <div>热门推荐 {{ mytitle }}</div>
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
</template>

<style>
#hot_container{
  width: 20%;
  background-color: rgb(227, 242, 253);
}
</style>

<script>
export default {
  props: ["mytitle"],
  methods: {
    format_date(d) {
      var newd = new Date(d);
      var mo = newd.getMonth() + 1;
      if (mo < 10) {
        mo = "0" + mo;
      }
      var s =
        newd.getFullYear() +
        "-" +
        mo +
        "-" +
        newd.getDate() +
        " " +
        newd.getHours() +
        ":" +
        newd.getMinutes() +
        ":" +
        newd.getSeconds();
      return s;
    },
  },
  data() {
    return {
      articles: [],
    };
  },
  async fetch() {
    this.articles = await fetch(
      "http://www.lzsdq.cn:9999/api/articles/hot?limit=5"
    ).then((res) => res.json());
  },
};
</script>