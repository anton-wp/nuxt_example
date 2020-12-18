<template>
  <div>
    <button @click="getData">click</button>
    <div style="display: flex">
      <ul v-if="dataStatic">
        <h1>Static</h1>
        <li v-for="(item, index) in dataStatic.results" :key="index">
          {{ item.name }}
        </li>
      </ul>
      <ul v-if="dataDynamic">
        <h1>Dynamic</h1>
        <li v-for="(item, index) in dataDynamic" :key="index">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    dataDynamic: [],
    dataStatic: null,
  }),
  async asyncData({ $axios }) {
    const dataStatic = await $axios.$get("https://pokeapi.co/api/v2/pokemon");
    return { dataStatic };
  },
  methods: {
    async getData() {
      // this.$axios.setHeader("Referrer Policy", "no-referrer");
      // this.$axios.$get(
      //   "https://www.virail.com/virail/v7/autocomplete/berli/en_us?ga=true"
      // );
      this.$axios.$get("https://pokeapi.co/api/v2/pokemon").then((res) => {
        this.dataDynamic = [...this.dataDynamic, ...res.results];
      });
    },
  },
};
</script>
<style>
</style>
