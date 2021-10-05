<template>
  <div>
    <h1>Search Page1</h1>
    <div>
      <b-table :items="search"></b-table>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Page1",
  data() {
    return {
      search: [],
    };
  },
  mounted() {
    axios
      .get("https://mocki.io/v1/423b4c07-dc19-4a17-94f8-fd8d2b0484b8")
      .then((res) => {
        const info = res.data;
        console.log("=================");
        console.log(info);
        console.log("=================");
        this.search = info.filter((info) =>
          info.id.includes(this.$route.params.id)
        );
      });
  },
};
</script>
<style>
</style>