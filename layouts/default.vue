<template>
  <div>
    <v-app>
      <div class="header">
        <nuxt-link class="Home grey--text text--lighten-5" to="/"
          >Home</nuxt-link
        >
        <button class="button" @click="tagModal = true">+ New tag</button>
        <div v-if="tagModal" v-click-outside="closeTagModal" class="modal-tag">
          <input
            class="inputTag"
            type="text"
            placeholder="new tag"
            v-model="tag"
          />
          <button class="button" @click="createTag">create tag</button>
        </div>
        <nuxt-link class="addButton button" to="/addPost">+ New Post</nuxt-link>
      </div>
      <Nuxt />
    </v-app>
  </div>
</template>

<script>
import vClickOutside from "v-click-outside";
import reqTag from "@/mixin/reqTag";
export default {
  data: () => ({
    tagModal: false,
    tag: "",
  }),
  mixins: [reqTag],
  directives: {
    clickOutside: vClickOutside.directive,
  },
  methods: {
    closeTagModal() {
      this.tagModal = false;
    },
    async createTag() {
      await this.createTags();
      this.tagModal = false;
      this.tag = "";
    },
  },
};
</script>
<style>
/* @import "~vuetify/src/styles/main.sass"; */

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.header {
  height: 80px;
  background-color: #3a464f;
  display: flex;
  align-items: center;
}
.Home {
  text-decoration: none;
  color: white;
  padding: 10px;
  cursor: pointer;
}
.button {
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  padding: 10px;
  border-radius: 10px;
  background-color: cadetblue;
  color: white;
  font-size: 18px;
  border: 1px solid cadetblue;
}
.addButton {
  margin-left: auto;
  margin-right: 20px;
}
.modal-tag {
  position: absolute;
  width: 200px;
  height: 150px;
  background-color: white;
  border-radius: 10px;
  top: 60px;
  left: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.inputTag {
  padding: 5px;
  border-radius: 5px;
  margin: 20px 0;
}
</style>
