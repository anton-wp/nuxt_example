<template>
  <AddEditPost :post="post" :title="'Create new Post'"/>
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
};
</script>
