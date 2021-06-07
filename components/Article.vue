<template>
  <div id="article_container">
    <div id="article_content">
      <div id="article_title">{{ article.title }}</div>
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
    </div>
  </div>
</template>

<style scoped>
#article_container {
  width: 50%;
  min-width: 700px;
  background-color: #00000000;
  padding: 20px;
  overflow: hidden;
}
#article_content {
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgb(220, 220, 220);
}
#article_title {
  font-size: 2em;
  font-weight: bold;
  color: black;
  margin-bottom: 40px;
}
.paragraph {
  text-indent: 2em;
}
.illustration {
  width: 100%;
}
</style>

<script>
export default {
  methods: {
    getIllustrationPosition: function (paragraphCount) {
      //不在最后一个段落
      if (paragraphCount <= 2) {
        return 0;
      } else {
        return Math.round(Math.random() * (paragraphCount - 2));
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
