<template>
  <div>
    <h1>{{ post.name }}</h1>
    <img :src="post.img" alt="sorry" />
    <p>{{ post.text }}</p>
  </div>
</template>

<script>
import reqPost from "@/mixin/reqPost";
export default {
  data: () => ({
    post: {},
  }),
  mixins: [reqPost],
  async asyncData({ $axios, params }) {
    const post = await $axios.$get(
      `http://localhost:3000/api/test/${params.id}`
    );
    return post ? { post } : {};
  },
};
</script>
