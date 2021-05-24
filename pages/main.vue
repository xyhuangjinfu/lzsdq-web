<template>
  <div id="container">
    <div id="header"></div>
    <div id="content">
      <div id="knowledge">
        <div id="knowledge_list">
          <div
            class="knowledge_item"
            v-for="kn in knowledges"
            v-bind:key="kn.id"
          >
            <h5>
              <router-link
                class="knowledge_title"
                v-bind:to="'/k/' + kn.id"
                target="_blank"
                >{{ kn.title }}{{ kn.id }}</router-link
              >
            </h5>
            <h7 class="knowledge_summary">{{ kn.content }}></h7>
          </div>
        </div>
        <div id="knowledge_nav" class="pagination">
          <a href="/">上一页</a>
          <a href="/">下一页</a>
        </div>
      </div>
      <div id="others">
        <div id="hot">hot</div>
        <div id="advert">advert</div>
      </div>
    </div>
  </div>
</template>

<style>
.pagination {
  display: inline-block;
}
.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}
#knowledge_nav {
  float: right;
}
#container {
  width: 100%;
  height: auto;
  background-color: rgb(245, 245, 245);
  overflow: hidden;
  padding-bottom: 150px;
}
#header {
  width: 100%;
  height: 150px;
  position: relative;
}
#content {
  width: 70%;
  min-height: 600px;
  position: relative;
  left: 15%;
}
#knowledge {
  width: 70%;
  position: relative;
  background-color: #ffffff;
  border-radius: 5px;
  float: left;
}
#others {
  width: 28%;
  position: relative;
  float: left;
  left: 25px;
}
#hot {
  width: 100%;
  min-height: 200px;
  position: relative;
  background-color: #ffffff;
  border-radius: 5px;
}
#advert {
  width: 100%;
  min-height: 200px;
  position: relative;
  background-color: #ffffff;
  border-radius: 5px;
  top: 25px;
}
.knowledge_item {
  padding: 20px;
}
.knowledge_title {
  color: #000000;
}
.knowledge_summary {
  color: rgb(181, 181, 181);
}
</style>

<script>
export default {
  data() {
    return {
      knowledges: [{ id: 1, title: "qq", content: "ert" }],
    };
  },
  async fetch() {
    this.knowledges = await fetch(
      "http://www.lzsdq.cn:9999/api/knowledges/?page_size=1&page_num=3"
    ).then((res) => res.json());
  },
};
</script>