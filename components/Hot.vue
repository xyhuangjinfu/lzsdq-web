<template>
  <div id="hot_container">
    <div id="hot_content">
      <div id="hot_label">热门推荐</div>
      <div id="hot_article_list">
        <div
          class="hot_article_item"
          v-for="(article, index) in articles"
          v-bind:key="article.id"
        >
          <span :class="getHotClass(index)">{{ index + 1 }}&nbsp;</span>
          <router-link
            class="article_title"
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
#hot_container {
  width: 400px;
  min-width: 300px;
  padding: 10px;
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
.hot_number_one {
  color: rgb(13, 71, 161);
}
.hot_number_two {
  color: rgb(21, 101, 192);
}
.hot_number_three {
  color: rgb(25, 118, 210);
}
.hot_number_four {
  color: rgb(181, 181, 181);
}
.article_title {
  color: black;
}
.article_title:hover {
  color: rgb(13, 71, 161);
  text-decoration: none;
}
</style>

<script>
import utils from "~/assets/js/utils.js";
import axios from "axios";

export default {
  methods: {
    getHotClass: function (index) {
      if (index == 0) {
        return "hot_number_one";
      } else if (index == 1) {
        return "hot_number_two";
      } else if (index == 2) {
        return "hot_number_three";
      } else {
        return "hot_number_four";
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