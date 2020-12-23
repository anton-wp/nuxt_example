<template>
  <AddEditPost :post="post" :title="'Edit Post'"/>
</template>
<script>
import AddEditPost from "@/components/addEditPost";
export default {
  components: {
    AddEditPost,
  },
  data: () => ({
    post: {},
  }),
  async asyncData({ $axios, params }) {
    const post = await $axios.$get(
      `http://localhost:3000/api/test/${params.id}`
    );
    return { post };
  },
};
</script>
