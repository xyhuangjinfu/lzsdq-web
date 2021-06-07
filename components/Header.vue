<template>
  <div id="header">
    <div id="search_container">
      <div id="search_content">
        <div>
          <a href="/"><img src="../assets/qwls.png" id="logo" /></a>
        </div>
      </div>
    </div>
    <div id="menu_container">
      <div id="menu_content">
        <a href="/" class="menu" target="_blank">首页</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
#search_container {
  width: 100%;
  height: 2em;
  background-color: rgb(227, 242, 253);
  font-size: 3em;
  font-weight: bold;
}
#search_content {
  width: 60%;
  margin: 0 auto;
}
#logo {
  height: 50px;
}
#menu_container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 1.9em;
  /* background-color: rgb(13, 71, 161); */
  background-color: rgb(25, 118, 210);
  color: white;
  font-size: 1.3em;
}
#menu_content {
  width: 60%;
  margin: 0 auto;
}
.menu {
  display: block;
  width: 5em;
  height: 1.9em;
  line-height: 1.9em;
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
  background-color: rgb(21, 101, 192);
}
a.menu:active {
  color: white;
  text-decoration: none;
  background-color: rgb(21, 101, 192);
}
</style>
