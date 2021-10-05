<template>
  <div>
    <h2>Page2</h2>
    <button type="button" class="btn btn-warning" @click="Back">Back</button>
    <div>
      <br />
      <b-table :items="search"></b-table>
    </div>
  </div>
</template>

<script>
import Router from "vue-router";
const router = new Router({ mode: "history" });

import axios from "axios";
export default {
  name: "Page2",
  data() {
    return { search: [] };
  },
  mounted() {
    axios
      .get("https://mocki.io/v1/423b4c07-dc19-4a17-94f8-fd8d2b0484b8")
      .then((res) => {
        const infoall = res.data;
        this.search = infoall;
      });
  },
  methods: {
    Back() {
      router.push(`/Student`);
      router.go();
    },
  },
};
</script>

<style>
</style>