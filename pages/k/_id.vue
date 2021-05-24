<template>
  <div id="container">
    {{ $route.params.id }}
    详情页面

    <p>{{ knowledge.content }}</p>
  </div>
</template>

<style>
p {
  text-indent: 2em;
}
</style>

<script>
export default {
  data() {
    return {
      knowledge: {},
    };
  },
  async fetch() {
    this.knowledge = await fetch(
      "http://www.lzsdq.cn:9999/api/knowledges/" + this.$route.params.id
    ).then((res) => res.json());
  },
};
</script>
