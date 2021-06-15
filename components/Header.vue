<template>
  <div class="header-container">
    <div class="header-content">
      <div class="title">
        <a href="/">
          <div class="main-title">有意思</div>
          <div class="sub-title">奇怪的知识增加了</div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  head() {
    return {
      link: [{ rel: "stylesheet", href: require("~/assets/css/header.css") }],
    };
  },
};
</script>
