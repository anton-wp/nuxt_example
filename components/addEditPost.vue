<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="inputBlocks">
      <div class="inputBlocks-item">
        <label for="">Name</label>
        <input type="text" v-model="post.name" />
      </div>
      <div class="inputBlocks-item">
        <label for="">Image Url</label>
        <input type="text" v-model="post.img" />
      </div>
      <div class="inputBlocks-item">
        <label for="">Content</label>
        <textarea type="text" v-model="post.text" />
      </div>
      <div class="inputBlocks-item">
        <v-select
          v-model="post.tag"
          :items="tags"
          item-text="name"
          return-object
          attach
          chips
          label="Tag"
          multiple
        >
          <template v-slot:selection="{ item }">
            <v-chip>
              <span>{{ item.name }}</span>
            </v-chip>
          </template>
        </v-select>
        <button class="delete" @click="deleteTag">delete</button>
      </div>
      <div class="inputBlocks-item block-button">
        <button @click="addEditPost">
          {{ post._id ? "update" : "add" }} Post
        </button>
      </div>
    </div>
    <div class="examplePost" v-if="post">
      <Post :post="post" :form="true" />
    </div>
  </div>
</template>

<script>
import Post from "@/components/post";
import reqPost from "@/mixin/reqPost";
import reqTag from "@/mixin/reqTag";
export default {
  components: {
    Post,
  },
  mixins: [reqPost, reqTag],
  props: ["post", "title"],
  data: () => ({
    tags: [],
    tag: null,
  }),
  methods: {
    async addEditPost() {
      if (!this.post._id) {
        await this.createPost();
      } else {
        await this.updatePost();
      }
      this.$router.push("/");
    },
    async deleteTag() {
      console.log(this.post);
      if (this.post.tag) {
        await this.deleteTags(this.post.tag[0]._id);
        this.tags = this.tags.filter((item) => item._id !== this.post.tag._id);
        this.post.tag = null;
      }
    },
  },
  async mounted() {
    this.tags = await this.getTags();
  },
};
</script>

<style scoped>
h1 {
  margin: 30px;
  text-align: center;
}
input,
textarea {
  border-radius: 5px;
  padding: 5px;
  border: 1px solid grey;
}
textarea {
  vertical-align: top;
}
.inputBlocks {
  display: flex;
  justify-content: center;
  padding: 50px 20px;
  flex-wrap: wrap;
}
.inputBlocks-item {
  margin: 20px 10px;
}
.block-button {
  width: 100%;
  display: flex;
  justify-content: center;
}
.examplePost {
  display: flex;
  justify-content: center;
}
button {
  cursor: pointer;
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: cornflowerblue;
  color: white;
  border: 1px solid cornflowerblue;
}
.select-tag {
  padding: 5px;
}
.delete {
  background-color: brown;
  border: brown;
}
</style>
