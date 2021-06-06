<template>
  <div id="article_list_container">
    <div id="article_list">
      <div
        class="article_item"
        v-for="article in pageData.articles"
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
              style="vertical-align: middle"
              class="article_create_time_icon"
              src="../assets/time.png"
              width="25px"
              height="25px"
            />
            <span class="article_create_time">
              {{ getCreateTime(article.createTime) }}
            </span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <img
              style="vertical-align: middle"
              class="article_read_count_icon"
              src="../assets/eye.png"
              width="20px"
              height="20px"
            />
            <span>&nbsp;</span>
            <span class="article_read_count">
              {{ article.readRecord.readCount }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div id="pagination">
      <a :href="pageData.preUrl" v-show="pageData.page > 1">上一页</a>
      <a :href="pageData.nextUrl" v-show="pageData.page < pageData.totalPage"
        >下一页</a
      >
    </div>
  </div>
</template>

<style>
#article_list_container {
  width: 50%;
  background-color: #00000000;
  padding: 20px;
  overflow: hidden;
}
.article_item:first-child {
  margin-top: 0;
}
.article_item {
  margin-top: 20px;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-flow: row nowrap;
}
.article_cover {
  width: 200px;
  height: 150px;
  border-radius: 5px;
}
.article_info {
  height: 150px;
  margin-left: 20px;
  flex-grow: 1;
  /* background-color: aquamarine; */

  position: relative;
}
.article_title {
  color: black;
}
.article_title:hover {
  color: rgb(13, 71, 161);
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
  color: rgb(181, 181, 181);
  position: absolute;
  bottom: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
#pagination {
  margin-top: 20px;
  float: right;
}
#pagination a {
  color: rgb(13, 71, 161);
  background-color: white;
  margin-top: 20px;
  padding: 8px 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#pagination a:hover {
  color: white;
  background-color: rgb(13, 71, 161);
  margin-top: 20px;
  padding: 8px 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>


<script>
import utils from "../js/utils.js";
import axios from "axios";

export default {
  props: ["pageData"],
  methods: {
    getCreateTime: function (d) {
      return utils.format_date(d);
    },
  },
  // data() {
  //   return {
  //     pageData: {
  //       page: 0,
  //       totalPage: 0,
  //       articles: [],
  //       preUrl:"#",
  //       nextUrl:"#",
  //     },
  //   };
  // },
  // async fetch() {
  //   this.pageData = await axios
  //     .get("http://www.lzsdq.cn:9999/api/articles/?page_size=5&page_num=1")
  //     .then((resp) => {
  //       return {
  //         page: resp.data.page,
  //         totalPage: resp.data.totalPage,
  //         articles: resp.data.data,
  //       };
  //     });
  // },
};
</script>