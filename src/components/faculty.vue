<template>
  <div id="faculty" class="col">
    <br>
    <p>Faculty :{{ name }}</p>
    <p>1 : {{ no1 }}</p>
    <p>2 : {{ no2 }}</p><br>
  </div>
</template>

<script>
// import App from '../HelloWorld.vue'
export default {
  name: "faculty",
  data() {
    return {
      name: " Science",
      no1: "IT",
      no2: "COM SCI",
    };
  },
};
</script>

<style>
.col {
  background: rgb(255, 222, 133);
  color: rgb(0, 0, 0);
}
</style>