<template>
  <div id="pen" class="par">
      <img v-bind:src = url
      width = "20%" height="20%"/><br><br>
    <h4>ห่มจีวรคือเป็นพระห่ม ผ้าด้วยนะคือเป็นห่วง</h4>

    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Id</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        v-model="info.id"
      />
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">First Name</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        v-model="info.firstName"
      />
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Last Name</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        v-model="info.lastName"
      />
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Nick Name</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        v-model="info.NickName"
      />
    </div>

    <button type="button" class="btn btn-warning" @click="save">Save</button>

    <div :hidden="!show">
     <b-table striped hover :items="myFriends"></b-table>
    </div>

  </div>
</template>

<script>
export default {
  name: "employee",
  data() {
    return {
     url : 'https://f.ptcdn.info/777/057/000/p9ae2davnpo1z5gWg9S-o.jpg',
      info: {
        id:null,
        firstName: null,
        lastName: null,
        NickName: null,
      },
      show: false,

      myFriends: [],
    };
  },
  methods: {
    save() {
      this.myFriends.push(this.info);
      this.show = true;
      this.info = {
        id:null,
        firstName: null,
        lastName: null,
        NickName: null,
      };

    },

  },
};
</script>

<style>
.par {
  background :rgb(255, 197, 120);
  color: orangered;
}
</style>