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
            <h7 class="knowledge_summary">{{ kn.summary }}></h7>
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
#knowledge_nav{
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
      knowledges: [
        {
          id: 1,
          title: "我是vue标题",
          summary:
            "作为一名科学家，袁隆平院士深受全国人民崇拜和爱戴，这在全世界都是不多见的。科学成就和贡献我觉得只是一方面，虽然很重要，但还远远不能解释举国哀悼袁院士的盛况，一个至关重要的因素，是他那伟大的、至善至美的人格魅力，他朴实，他勤奋，他爱国，他奉献，他亲民，他心无旁骛，我们怀念袁隆平，就是要学习他身上这些朴实无华却又无比光辉的品格。袁院士，一路走好！",
        },
        {
          id: 2,
          title: "我是vue标题",
          summary:
            "作为一名科学家，袁隆平院士深受全国人民崇拜和爱戴，这在全世界都是不多见的。科学成就和贡献我觉得只是一方面，虽然很重要，但还远远不能解释举国哀悼袁院士的盛况，一个至关重要的因素，是他那伟大的、至善至美的人格魅力，他朴实，他勤奋，他爱国，他奉献，他亲民，他心无旁骛，我们怀念袁隆平，就是要学习他身上这些朴实无华却又无比光辉的品格。袁院士，一路走好！",
        },
        {
          id: 3,
          title: "我是vue标题",
          summary:
            "作为一名科学家，袁隆平院士深受全国人民崇拜和爱戴，这在全世界都是不多见的。科学成就和贡献我觉得只是一方面，虽然很重要，但还远远不能解释举国哀悼袁院士的盛况，一个至关重要的因素，是他那伟大的、至善至美的人格魅力，他朴实，他勤奋，他爱国，他奉献，他亲民，他心无旁骛，我们怀念袁隆平，就是要学习他身上这些朴实无华却又无比光辉的品格。袁院士，一路走好！",
        },
        {
          id: 4,
          title: "我是vue标题",
          summary:
            "作为一名科学家，袁隆平院士深受全国人民崇拜和爱戴，这在全世界都是不多见的。科学成就和贡献我觉得只是一方面，虽然很重要，但还远远不能解释举国哀悼袁院士的盛况，一个至关重要的因素，是他那伟大的、至善至美的人格魅力，他朴实，他勤奋，他爱国，他奉献，他亲民，他心无旁骛，我们怀念袁隆平，就是要学习他身上这些朴实无华却又无比光辉的品格。袁院士，一路走好！",
        },
        {
          id: 5,
          title: "我是vue标题",
          summary:
            "作为一名科学家，袁隆平院士深受全国人民崇拜和爱戴，这在全世界都是不多见的。科学成就和贡献我觉得只是一方面，虽然很重要，但还远远不能解释举国哀悼袁院士的盛况，一个至关重要的因素，是他那伟大的、至善至美的人格魅力，他朴实，他勤奋，他爱国，他奉献，他亲民，他心无旁骛，我们怀念袁隆平，就是要学习他身上这些朴实无华却又无比光辉的品格。袁院士，一路走好！",
        },
        {
          id: 6,
          title: "我是vue标题",
          summary:
            "作为一名科学家，袁隆平院士深受全国人民崇拜和爱戴，这在全世界都是不多见的。科学成就和贡献我觉得只是一方面，虽然很重要，但还远远不能解释举国哀悼袁院士的盛况，一个至关重要的因素，是他那伟大的、至善至美的人格魅力，他朴实，他勤奋，他爱国，他奉献，他亲民，他心无旁骛，我们怀念袁隆平，就是要学习他身上这些朴实无华却又无比光辉的品格。袁院士，一路走好！",
        },
        {
          id: 7,
          title: "我是vue标题",
          summary:
            "作为一名科学家，袁隆平院士深受全国人民崇拜和爱戴，这在全世界都是不多见的。科学成就和贡献我觉得只是一方面，虽然很重要，但还远远不能解释举国哀悼袁院士的盛况，一个至关重要的因素，是他那伟大的、至善至美的人格魅力，他朴实，他勤奋，他爱国，他奉献，他亲民，他心无旁骛，我们怀念袁隆平，就是要学习他身上这些朴实无华却又无比光辉的品格。袁院士，一路走好！",
        },
        {
          id: 8,
          title: "我是vue标题",
          summary:
            "作为一名科学家，袁隆平院士深受全国人民崇拜和爱戴，这在全世界都是不多见的。科学成就和贡献我觉得只是一方面，虽然很重要，但还远远不能解释举国哀悼袁院士的盛况，一个至关重要的因素，是他那伟大的、至善至美的人格魅力，他朴实，他勤奋，他爱国，他奉献，他亲民，他心无旁骛，我们怀念袁隆平，就是要学习他身上这些朴实无华却又无比光辉的品格。袁院士，一路走好！",
        },
        {
          id: 9,
          title: "我是vue标题",
          summary:
            "作为一名科学家，袁隆平院士深受全国人民崇拜和爱戴，这在全世界都是不多见的。科学成就和贡献我觉得只是一方面，虽然很重要，但还远远不能解释举国哀悼袁院士的盛况，一个至关重要的因素，是他那伟大的、至善至美的人格魅力，他朴实，他勤奋，他爱国，他奉献，他亲民，他心无旁骛，我们怀念袁隆平，就是要学习他身上这些朴实无华却又无比光辉的品格。袁院士，一路走好！",
        },
      ],
    };
  },
};
</script>