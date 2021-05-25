<template>
  <div id="container">
    <div id="header">
      <a href="/main">
        <img src="~/assets/logo.png" style="width: 225px; height: 60px"
      /></a>
      <!-- <img src="~/assets/logo.png" style="width:100px; height:80px"/> -->
    </div>

    <h4>{{ article.title }}</h4>
    <br />
    <br />
    <p
      class="paragraph"
      v-for="paragraph in article.paragraphs"
      v-bind:key="paragraph.id"
    >
      {{ paragraph.content }}
    </p>
  </div>
</template>

<style>
#header {
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 18%;
  padding-right: 18%;
}
p.paragraph {
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
    ).then((res) => res.json());
  },
};
</script>
