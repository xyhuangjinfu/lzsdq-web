<template>
  <div>
    <!-- <p v-if="$fetchState.pending">
      <span class="loading"></span>
    </p>
    <p v-else-if="$fetchState.error">Error while fetching mountains 🤬</p>
    <ul v-else>
      <li v-for="mountain in mountains" :key="mountain.title">
        <NuxtLink
          :to="{ name: 'mountains-slug', params: { slug: mountain.slug } }"
        >
          {{ mountain.title }}
        </NuxtLink>
      </li>
    </ul> -->
    <!-- <ul>
      <li v-for="m in xx.data" :key="m.id">{{ m.title }}</li>
    </ul> -->
    <div>aaa {{ mountains }}</div>
    <!-- <button @click="$fetch">Refresh Data</button> -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    // console.log("dddddd");
    return {
      mountains: [{ id: 1, title: "aaa" }],
    };
  },
  async fetch() {
    // this.mountains = await this.$axios.get('https://api.nuxtjs.dev/mountains');
    this.mountains = await axios.get('http://www.lzsdq.cn:9999/api/articles/hot').then(resp=> {return resp.data});
  }
  // activated() {
  //   if (this.$fetchState.timestamp <= Date.now() - 30000) {
  //     this.$fetch()
  //   }
  // },

  // async asyncData() {
  // let {data} = await axios.get("http://www.lzsdq.cn:9999/api/articles/hot")
  // return {info:data}
  // return axios
  //   .get("http://www.lzsdq.cn:9999/api/articles/hot")
  //   .then((resp) => {
  //     return { xx: resp };
  //   });
  // },
  // fetch() {
  //   console.log("ffffff");
  //   return axios
  //     .get("http://www.lzsdq.cn:9999/api/articles/hot")
  //     .then((resp) => {
  //       console.log(resp.data);
  //       return {info:resp.data}
  //     },(error)=>{
  //       console.log(error);
  //     });
  // },

  // asyncData() {
  //   console.log("aaaaaaa");
  //  axios
  //     .get("http://www.lzsdq.cn:9999/api/articles/hot")
  //     .then((resp) => {
  //       console.log(resp);
  //     },(error)=>{
  //       console.log(error);
  //     });
  // },
};
</script>
<style scoped>
li {
  margin-bottom: 0.5rem;
}
li:first-letter {
  text-transform: uppercase;
}
.loading {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 4px solid rgba(9, 133, 81, 0.705);
  border-radius: 50%;
  border-top-color: #158876;
  animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
