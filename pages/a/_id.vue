<template>
  <div id="page">
    <div id="content">
      <!-- <div id="header"> -->
      <!-- <a href="/main">
        <img src="~/assets/logo.png" style="width: 225px; height: 60px"
      /></a> -->
      <!-- <img src="~/assets/logo.png" style="width:100px; height:80px"/> -->
      <!-- </div> -->

      <div id="article">
        <h3>{{ article.title }}</h3>
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
    </div>
    <Footer id="footer" />
  </div>
</template>

<style>
#page {
  position: relative;
  min-height: 100vh;
}
#content {
  width: 50%;
  min-height: 100%;
  margin: 0 auto;
}
#footer {
  position: absolute;
  bottom: 0;
  margin-top: 300px;
}
#article {
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: coral;
}
/* #header {
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 18%;
  padding-right: 18%;
} */
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
