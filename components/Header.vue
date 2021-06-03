<template>
  <div id="header">
    <div id="search">
      <div><a href="/"><img src="../assets/qwls.png" /></a></div>
    </div>
    <div id="menu_container">
      <a href="/" class="menu" target="_blank">首页</a>
      <a href="/" class="menu" target="_blank">生活</a>
      <a href="/" class="menu" target="_blank">历史</a>
      <a href="/" class="menu" target="_blank">科技</a>
    </div>
  </div>
</template>

<style>
#search {
  width: 100%;
  height: 2em;
  background-color: rgb(227, 242, 253);
  font-size: 3em;
  font-weight: bold;
    padding-left: 25%;
  padding-right: 25%;
}
#menu_container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 2em;
  /* background-color: rgb(13, 71, 161); */
  background-color: rgb(21, 101, 192);
  color: white;
  font-size: 1.4em;
  padding-left: 25%;
  padding-right: 25%;
}
.menu {
  display: block;
  width: 5em;
  height: 2em;
  line-height: 2em;
  text-align: center;
}
a.menu:link {
  color: white;
  text-decoration: none;
}
a.menu:visited {
  color: white;
  text-decoration: none;
}
a.menu:hover {
  color: white;
  text-decoration: none;
  background-color: rgb(13, 71, 161);
}
a.menu:active {
  color: white;
  text-decoration: none;
  background-color: rgb(13, 71, 161);
}
</style>
