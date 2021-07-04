<template>
  <div class="error-page-container">
    <div
      class="
        error-info-container
        display-flex
        flex-direction-column flex-align-center
      "
    >
      <embed
        src="~/assets/img/error_page.svg"
        width="180px"
        height="180px"
        type="image/svg+xml"
        pluginspage="http://www.adobe.com/svg/viewer/install/"
      />
      <div class="message">{{ error.statusCode }} {{ error.message }}</div>
      <div class="home"><a href="/">返回首页</a></div>
    </div>
  </div>
</template>

<style scoped>
@import url("~/assets/css/common.css");

.error-page-container {
  height: 100vh;
  padding-top: 30vh;
}
.error-info-container {
  margin: 0 auto;
}
.message {
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: rgb(74, 74, 74);
}
.home {
  margin-top: 1rem;
}
.home a {
  color: rgb(13, 71, 161);
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
}
</style>

<script>
export default {
  props: ["error"],
};
</script>