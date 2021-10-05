<template lang="">
    <div>
      <img v-bind:src="url" width="15%" height="15%" /><br /><br />
        <br>
        <form @submit="checkForm">
            <p v-if="conditions.length">
            <b> Please Input your infomation </b>
            <ul>
                <li v-for="error in conditions" :key="error" style="color: red"> {{ error }}</li>
            </ul>
            </p>
            <input type="text" v-model="id" placeholder="Student ID" style="margin-right:10px">
            <input type="checkbox" v-model="gender" value="Male"> Male
            <input type="checkbox" v-model="gender" value="Female"> Female
            <br>
            <input type="text" v-model="Fname" placeholder="FirstName" style="margin-right:10px" required>
            <input type="text" v-model="Lname" placeholder="LastName" style="margin-right:10px" required>
            <br>
            <textarea v-model="introduce" placeholder="Introduce yourself"></textarea>
            <br>
            <input type="radio" id="one" value="one" v-model="picked"/> จบละจ้า
            <input type="radio" id="two" value="two" v-model="picked"/> จะไม่จบช่ะ?

            <select v-model="delected">
                <option value="">Select</option>
                <option 
                v-for="option in options" :key="option" v-bind:value="option.value">{{option.text}}
                </option>
            </select>

            <br><br>
            <input type="submit" value="Submit" >
            <br><br>
            <!-- <router-link to="/Page2">Page2</router-link><br> -->
            <button type="button" class="btn btn-danger" @click="page2">Go to Page2</button>

        </form>
    </div>
</template>
<script>
import Router from "vue-router";
const router = new Router({ mode: "history" });

export default {
  name: "Student",
  data() {
    return {
      id: null,
      gender: [],
      Fname: null,
      Lname: null,
      introdude: null,
      picked: null,
      selected: "",
      options: [
        { text: "ชั้นปีที่1", vale: "1" },
        { text: "ชั้นปีที่2", vale: "2" },
        { text: "ชั้นปีที่3", vale: "3" },
        { text: "ชั้นปีที่4", vale: "4" },
      ],
      url: "https://i.pinimg.com/564x/87/ca/23/87ca23c9ed018f7b1ff9c482ae96c212.jpg",
      conditions: [],
    };
  },
  methods: {
    checkForm(e) {
      if (!this.id) {
        this.conditions.push("*Please input your Student ID*");
      } else {
        router.push(`/Page1/${this.id}/${this.Fname}/${this.Lname}`);
        router.go();
      }
      e.preventDefault();
    },
    page2() {
      router.push(`/Page2`);
      router.go();
    },
  },
};
</script>
<style lang="">
</style>