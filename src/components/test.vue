<template>
  <div id = "test" class="tmp">
    <br><h4>Test Today</h4>
      <p>{{shown}}</p>
      <img v-bind:src=url
      width = "10%" height="10%"/><br>
      Name : {{imgName}}<br>
      <span/> celsius: {{celsius}}<br>
      <span/> fahrenheit: {{fahrenheit}}<br>
      <!-- ------------------------------------------------------------ -->
        <div class="card">
        <div class="class-header">
            ชื่อ : {{myinfo.myName}}
            <button type="button" class="btn btn-info"  @click="myShowInfo"> {{labelBotton}} </button> 
            </div>
            <div class="class-body" :hidden="hideShown">
                myNickName: {{myinfo.myNickName}}
                <p>myID: {{myinfo.myId}}</p>
                </div>
      </div>
<!-- ----------------------------------------------------------------------- -->
     v-on & v-bind <br>
      <button type="button" class="btn btn-danger"  @click="alertMsg('D' , 'F' ,$event)"> Click </button>
      <button type="button" class="btn btn-info"  @dblclick="alertMsgDB"> ClickDB </button>

      <!-- <img src="https://cf.shopee.co.th/file/bec340152d8288d0bbdbca09b61fff32"
      width = "20%" height="20%"/>
      ------------------------------------------------------------------->
    <br>v-model

      <div class="input-group input-group-sm mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">user</span>
         <input type="text" class="form-control" aria-label="Sizing example input" v-model="usrName">
        </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">password</span>
         <input type="text" class="form-control" aria-label="Sizing example input"  v-model="usrPass">
        </div>
        <div>
            S H O W N <br>
            user : {{usrName}}<br>
            password : {{usrPass}}
        </div>
        <div class="container">
            <div class="input-group mb-3">
                <span class="input-group-text" id="inputGroup-sizing-default">Color</span>
                <input type="text" class="form-control" aria-describedby="inputGroup-size-default" v-model="bgColor">
                </div>
             <div v-bind:style="{'background-color': bgColor}">
                Color : {{bgColor}}
             </div>
            </div>
<!-- ----------------------------------------------------------------------- -->
      

  </div>
</template>

<script>
export default {
name : "test",
    data(){
     return{
        imgName : "ชินจัง",
        url : "https://cf.shopee.co.th/file/bec340152d8288d0bbdbca09b61fff32",
        celsius : 30,
        dataPumu : ["หัว" , "ก้อย"],
        text : "click",

        myinfo:{
            myName: "Pattaraporn",
            myNickName: "Ying",
            myId: "6130203462",
        },

        hideShown : true ,

        usrName: null,
        usrPass: null,
        bgColor: null


    }
},
    computed: {
     fahrenheit(){
            let result = this.celsius*1.8 + 32 ;
            return result;
        },
    random(){
        return Math.random() > 0.5 ? 1:0 ;
    },
    shown(){
        return this.dataPumu[this.random];
    },
    labelBotton(){
        return this.hideShown ? "Hide" : "Shown";
    }

    },

    methods:{
        alertMsg(p1, p2, e){
            alert(`You ${e.type} the button at ${e.clientX}, ${e.clientY}`);
            alert(`parameter ${p1} , ${p2}` );
        },
        alertMsgDB(){
            alert('Hi, Ying');
        },
        myShowInfo(){
            this.hideShown = !this.hideShown;
        }

    }
};
</script>

<style>
.tmp {
  background: rgb(253, 206, 247);
  color: rgb(0, 0, 0);
}
</style>