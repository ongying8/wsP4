<template>
  <div id="penpraa" class="tmpPraa">
    <img v-bind:src="url" width="15%" height="15%" /><br /><br />
    <h4>💗ห่มจีวรคือเป็นพระ ห่มผ้าด้วยนะคือเป็นห่วง💗</h4>
    <div class="input-group mb-3">
      <span
        class="input-group-text" id="inputGroup-sizing-sm" style=" background-color:#CCFF66;color:black; width: 127px">ID</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        v-model="info.ID"
      />
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm" style=" background-color:#CCFF66;color:black; width: 127px">First Name</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        v-model="info.firstName"
      />
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm" style=" background-color:#CCFF66;color:black; width: 127px">Last Name</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        v-model="info.lastName"
      />
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm" style=" background-color:#CCFF66;color:black; width: 127px">Nick Name</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        v-model="info.Nickname"
      />
    </div>

    <div style="font-size:150%;" 
      class="input-group mb-3"
      v-for="(data, index) in gender"
      v-bind:key="index"
    >
      <input
        type="radio"
        class="btn-check"
        name="options"
        :id="index"
        autocomplete="off"
        v-model="info.gender"
        :value="data.value"
      />
      <label class="btn btn-light" :for="index">{{
        data.lable
      }}</label>
    </div>

    <button type="button" class="btn btn-danger " @click="save" style="font-size:150%;">Save</button>
    <br>
    .

    <div :hidden="!show">
      <b-table style="background-color:#FFFACD;" striped hover :items="myfriend"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "penpraa",
  data() {
    return {
      info: {
        ID: null,
        firstName: null,
        lastName: null,
        Nickname: null,
        gender: null,
      },
      url: "https://pbs.twimg.com/media/DeGo5X9UwAA39CT.jpg",

      gender: [
        { lable: "Male", value: "Male" },
        { lable: "Female", value: "Female" },
      ],

      myfriend: [],
    };
  },
  methods: {
    save() {
      this.myfriend.push(this.info);
      this.show = true;
      this.info = {
        ID: null,
        firstName: null,
        lastName: null,
        Nickname: null,
        gender: null,
      };
    },
  },
};
</script>

<style>
.tmpPraa {
  background: rgb(255, 203, 92);
  color: rgb(24, 20, 0);
}
</style>