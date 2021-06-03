<template>
  <div id="page">
    <Header id="header"/>
    <div id="content">
      <div id="article_list">
        <div
          class="article_item"
          v-for="article in articles"
          v-bind:key="article.id"
        >
          <h4>
            <router-link
              class="article_title"
              v-bind:to="'/a/' + article.id"
              target="_blank"
              >{{ article.title }}</router-link
            >
          </h4>
          <p class="article_summary">{{ article.summary }}</p>
          <p class="article_create_time">
            {{ format_date(article.createTime) }}
          </p>
        </div>
      </div>
    </div>
    <Footer id="footer" />
  </div>
</template>

<style>
#page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: bisque;
}
#content {
  width: 50%;
  min-height: 100%;
  margin: 0 auto;
  flex: 1;
}
#article_list {
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: coral;
}
/* #footer {
  flex: auto;
} */
.article_title {
  color: #000000;
}
.article_item {
  position: relative;
  margin-top: 60px;
  height: 120px;
}
.article_summary {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: rgb(181, 181, 181);
}
.article_create_time {
  position: absolute;
  bottom: 0;
  margin-bottom: 0;
  color: rgb(181, 181, 181);
  font-size: 0.8em;
}
</style>

<script>
export default {
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
      "http://www.lzsdq.cn:9999/api/articles/?page_size=10000000&page_num=1"
    ).then((res) => res.json());
  },
};
</script>