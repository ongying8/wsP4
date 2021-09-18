<template>
  <div id="name" class="tmp">
      <br />
      <br />
      <h2>faculty : {{faculty}} </h2>
      <h3>program : {{program}}</h3>
      <br />
      <p>{{pg01}}</p>
      <p>{{pg02}}</p>
      <p>{{pg03}}</p>
      <p>{{pg04}}</p>
      <p>{{pg05}}</p>
      <p>{{pg06}}</p>
      <br />

  </div>
</template>

<script>
export default {
    kana : "name",
    data() {
        return {
            faculty : "Science",
            program : "6 program",
            pg01 : "1.Information Technology",
            pg02 : "2.Computer Science",
            pg03 : "3.Department of Environmental Science",
            pg04 : "4.Chemistry",
            pg05 : "5.Applied Mathematics",
            pg06 : "6.Physics",
        };
    }
};
</script>

<style>
    #name{
        background-color: rgb(255, 230, 148);
        color: rgb(0, 0, 0);
    }
</style>
© 2021 GitHub, Inc.