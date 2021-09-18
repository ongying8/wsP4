<template>
  <div id="hello">
    <h2>Name : {{ myName }}</h2>
    <p>Tel : {{ Tel }}</p>
    <p>id : {{ id }}</p>

    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-success">Success</button>
    <br>
    <i class="fas fa-save"></i>
  </div>
</template>

<script>
// import App from '../HelloWorld.vue'
export default {
  name: "hello",
  data() {
    return {
      myName: "Pattaraporn",
      Tel: "0823353863",
      id: "6130203462",
    };
  },
};
</script>

<style>
.test {
  font-size: 9 em;
}
#hello {
  background: rgb(176, 255, 209);
  color: rgb(0, 0, 0);
}
</style>