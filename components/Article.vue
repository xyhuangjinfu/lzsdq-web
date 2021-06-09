<template>
  <div id="article_container">
    <div id="article_content">
      <div id="article_title">{{ article.title }}</div>
      <div class="article_meta">
        <img
          style="vertical-align: middle"
          class="article_create_time_icon"
          src="~/assets/img/time.png"
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
          src="~/assets/img/eye.png"
          width="20px"
          height="20px"
        />
        <span>&nbsp;</span>
        <span class="article_read_count">
          {{ article.readRecord.readCount }}
        </span>
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
          v-if="index == illustrationPosition && article.coverUrl !== null"
        />
      </p>
      <hr id="declaration_divider" />
      <p class="declaration">
        声明：文章和图片内容源自网络，版权归原作者所有，如有侵犯您的原创版权请告知，我们将尽快删除相关内容。
      </p>
    </div>
  </div>
</template>

<style scoped>
#article_container {
  width: 50%;
  min-width: 700px;
  background-color: #00000000;
  padding: 10px;
  overflow: hidden;
}
#article_content {
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgb(220, 220, 220);
}
#article_title {
  font-size: 1.8em;
  font-weight: bold;
  color: black;
}
.article_meta {
  color: rgb(181, 181, 181);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-bottom: 50px;
}
.paragraph {
  text-indent: 2em;
  line-height: 2em;
}
.illustration {
  width: 100%;
}
#declaration_divider {
  width: 100%;
  height: 1px;
  border: 0;
  background-color: rgb(181, 181, 181);
  margin-top: 50px;
}
.declaration {
  text-indent: 2em;
  line-height: 2em;
  color: rgb(25, 118, 210);
}
</style>

<script>
import utils from "../js/utils.js";

export default {
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
      article: {},
    };
  },
  async fetch() {
    this.article = await fetch(
      "http://www.lzsdq.cn:9999/api/articles/" + this.$route.params.id
    ).then((res) => {
      return res.json();
    });
    this.illustrationPosition = this.getIllustrationPosition(
      this.article.paragraphs.length
    );
  },
};
</script>
