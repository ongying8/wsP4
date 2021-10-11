<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Home</h1>
    <!-- <form> -->
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="ID"
          v-model="id"
        />
      </div>
      <button type="submit" class="btn btn-primary" @click="addUser">
        Add
      </button>
    <!-- </form> -->
    <b-table stiped hover :items="users"> </b-table>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  data() {
    return {
      id: null,
    }
  },
  methods: {
    addUser(){
      this.$store.dispatch('setCurrentUser',this.id);
    }
  },
  computed: {
    users(){
      return this.$store.getters.getUser;
    }
  }
};
</script>
