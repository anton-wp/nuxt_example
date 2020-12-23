<template>
  <div>
    <div class="container">
      <div v-for="item in posts" :key="item._id">
        <Post :post="item" @deletePost="deletePost" />
      </div>
    </div>
  </div>
</template>
<script>
import Post from "@/components/post";
export default {
  components: {
    Post,
  },
  data: () => ({
    posts: [],
  }),
  async asyncData({ $axios }) {
    const posts = await $axios.$get("http://localhost:3000/api/tests");
    return { posts };
  },
  methods: {
    async deletePost(id) {
      try {
        await this.$axios.$delete(`http://localhost:3000/api/test/${id}`);
        this.posts = this.posts.filter((post) => post._id !== id);
      } catch (err) {
        console.log(err);
      }
    },
    // async getData() {
    //   this.$axios.$get("http://localhost:3000/api/tests").then((res) => {
    //     this.dataDynamic = [...this.dataDynamic, ...res];
    //   });
    // },
  },
};
</script>
<style>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

</style>
