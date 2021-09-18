<template>
 <div id = "hello">
   <br><p>Name : {{myName}}</p>
   <p>Tel : {{tel}}</p>
   <p>ID : {{ID}}</p>

  <button type="button" class="btn btn-danger">Danger</button>
  <button type="button" class="btn btn-info">Info</button>
  <button type="button" class="btn btn-warning">Warning</button>
  <br><i class="fas fa-save"></i>
  <br />

 </div>
</template>

<script>
export default {
  name : "hello",
  data() {
    return {
      myName : "Pattaraporn",
      tel: "0825210663",
      ID: "6130203462",
    };
  }
};
</script>

<style>
  #hello{
    background-color: rgb(195, 255, 255);
    color: rgb(0, 0, 0);
  }
</style>