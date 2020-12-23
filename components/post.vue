<template>
  <v-card
    class="my-12 mx-6 pb-5 col-12 col-md-4"
    elevation="7"
    shaped
    max-width="374"
  >
    <nuxt-link class="link" :to="!form ? `/${post._id}` : '#'">
      <!-- <span v-if="post.tag" class="tag">{{ post.tag.name }}</span> -->
      <v-img v-if="post.img" :src="post.img" height="250"></v-img>
      <v-card-title>{{ post.name }}</v-card-title>
      <p>{{ post.text }}</p>
    </nuxt-link>
    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip v-for="tag in post.tag" :key="tag._id">{{ tag.name }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-row v-if="!form" align="center" justify="space-around">
      <v-btn depressed color="error" @click="deletePost"> delete </v-btn>

      <nuxt-link :to="`/editPost/${post._id}`">
        <v-btn depressed color="primary"> edit </v-btn>
      </nuxt-link>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: ["post", "form"],
  data: () => ({
    selection: null,
  }),
  methods: {
    async deletePost() {
      this.$emit("deletePost", this.post._id);
    },
  },
};
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 300px;
}
.link {
  text-decoration: none;
  color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  word-break: break-all;
}
.tag {
  padding: 5px 10px;
  background-color: chocolate;
  border-radius: 5px;
  color: white;
  margin: 10px;
}
h1 {
  text-align: center;
}
</style>
