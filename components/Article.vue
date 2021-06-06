<template>
  <div id="article_container">
    <div id="article_content">
      <div id="article_title">{{ article.title }}</div>
      <p
        class="paragraph"
        v-for="paragraph in article.paragraphs"
        v-bind:key="paragraph.id"
      >
        {{ paragraph.content }}
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
</style>

<script>
export default {
  data() {
    return {
      article: {},
    };
  },
  async fetch() {
    this.article = await fetch(
      "http://www.lzsdq.cn:9999/api/articles/" + this.$route.params.id
    ).then((res) => {
      return res.json();
    });
  },
};
</script>
