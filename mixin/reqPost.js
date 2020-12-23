const reqPost = {
  methods: {
    async createPost() {
      try {
        await this.$axios.$post(`http://localhost:3000/api/test`, this.post);
      } catch (err) {
        console.log(err);
      }
    },
    async updatePost() {
      try {
        await this.$axios.$put(
          `http://localhost:3000/api/test/${this.post._id}`,
          this.post
        );
      } catch (err) {
        console.log(err);
      }
    }
  },
}
export default reqPost;
