const reqPost = {
  methods: {
    async createTags() {
      try {
        await this.$axios.$post(`http://localhost:3000/api/tag`, { name: this.tag });
      } catch (err) {
        console.log(err);
      }
    },
    async getTags() {
      try {
        return await this.$axios.$get(`http://localhost:3000/api/tags`);
      } catch (err) {
        console.log(err);
      }
    },
    async deleteTags(id) {
      try {
        return await this.$axios.$delete(`http://localhost:3000/api/tag/${id}`);
      } catch (err) {
        console.log(err);
      }
    },
  },
}
export default reqPost;
