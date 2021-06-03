<template>
  <div id="page">
    <Header id="header" />
    <div id="content">
      <div id="article_list">
        <div
          class="article_item"
          v-for="article in articles"
          v-bind:key="article.id"
        >
          <div>
            <img
              class="article_cover"
              src="https://picsum.photos/id/296/200/133"
            />
          </div>
          <div class="article_info">
            <h4>
              <router-link
                class="article_title"
                v-bind:to="'/a/' + article.id"
                target="_blank"
                >{{ article.title }}</router-link
              >
            </h4>
            <p class="article_summary">{{ article.summary }}</p>
            <div class="article_meta">
              <img
              style="vertical-align:middle"
                class="article_create_time_icon"
                src="../assets/time.png"
                width="25px"
                height="25px"
              />
              <span class="article_create_time">
                {{ format_date(article.createTime) }}
              </span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <img
              style="vertical-align:middle"
                class="article_read_count_icon"
                src="../assets/eye.png"
                width="20px"
                height="20px"
              />
              <span class="article_read_count">
                {{ article.readRecord.readCount }}
              </span>
            </div>
          </div>
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
  background-color: white;
}
#content {
  width: 50%;
  min-height: 100%;
  margin: 0 auto;
  flex: 2;
}
#article_list {
  padding-top: 0;
  padding-bottom: 100px;
}

.article_cover {
  width: 200px;
  height: 150px;
  margin-right: 20px;
}
.article_info {
  position: relative;
}
.article_title {
  color: #000000;
}
.article_item {
  display: flex;
  flex-direction: row;
  position: relative;
  margin-top: 20px;
  height: auto;
  background-color: white;
  padding: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(238, 238, 238);
}
.article_summary {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: rgb(181, 181, 181);
  margin-top: 20px;
}
.article_meta {
  position: absolute;
  bottom: 0;
  margin-bottom: 0;
  color: rgb(181, 181, 181);
  font-size: 0.8em;
  vertical-align: middle;
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