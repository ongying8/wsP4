<template>
  <div class="about">
    <h1>MY DATA!!</h1>
    <!-- <b-table stiped hover :items="allUsers"> </b-table> -->
    <button type="submit" class="btn btn-primary" @click="add">
      + {{ counterR }}
    </button>
    <!-- <button type="submit" class="btn btn-primary" @click="addReactive">
      - {{ counterReactive.ct }}
    </button> -->
  </div>
</template>

<script>
// import { ref, reactive } from "@vue/composition-api";
import counters from "./counter.js";
// import { ref, reactive } from "vue";
//ref ใช้กับ typ ประเภท int str... ทั่วไป
//reactive ใช้กับพวก opject array
export default {
  name: "about",
  setup() {
    const { counterR, add } = counters.couterIncrement(88888);

    return { counterR, add };
    // const counter = ref(0); //ใช้ ref ต้อง .value ด้วย
    // function add() {
    //   counter.value++;
    // }
    // const counterReactive = reactive({ ct: 100 });
    // function addReactive() {
    //   counterReactive.ct--;
    // }

    // return { counter, add, counterReactive, addReactive };
  },

  // data() {
  //   // return {
  //   //   counter: 0,
  //   // }
  // },
  computed: {
    allUsers() {
      return this.$store.getters.getAllUser;
    },
  },
  // methods: {
  //   // add() {
  //   //   this.counter++;
  //   // },
  // },
};
</script>

