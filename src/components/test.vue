<template>
  <div id="test" class="tmp">
      <br><h4>Test Today</h4>
      <p>{{show}}</p>
      <img v-bind:src=url
      width = "10%" height="10%"/><br>
      Name : {{imgName}}<br>
      <span/> celsius: {{celsius}}<br>
      <span/>fahrenheit: {{fahrenheit}}<br>
      <!-- ---------------------------------------- -->
      <div class="card">
          <div class="class-header">
              ชื่อ : {{myinfo.myName}}
              <button type="button" class="btn btn-info" @click="myShowInfo"> {{labelBotton}} </button>
              </div>
              <div class="class-body" :hidden="hideShown">
                  myNickName: {{myinfo.myNiclName}}
                  <p>myID: {{myinfo.myId}} </p>
                  </div>
        </div>
        <!-- ---------------------------------------- -->
        v-on & v-bind <br>
        <button type="button" class="btn btn-danger" @click="alertMsg('D', 'F', $event)">Click</button>
        <button type="button" class="btn btn-info" @dblclick="alertMsgDB">DB_Click</button>
        <!-- ---------------------------------------- -->
        <br>v-model

        <div class="input-group input-group-sm mb-3">
            <span class-"input-group-text" id="inputGroup-sizing-sm">user</span>
            <input type="text" class="form-control" aria-label-"Sizing example input" v-model="usrName">
            </div>
        <div class="input-groupㆍmb-3">
            <span class="input-group-text" id=" inputGroup-sizing-sm">password</span>
            <input type="text" class="form-control" aria-label-"Sizing example input" v-model="usrpass">
            </div>

