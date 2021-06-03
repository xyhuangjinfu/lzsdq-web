<template>
  
</template>

<style>

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