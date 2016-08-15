<template>
  <div class="container-fluid">
    <nav class="navbar navbar-default">
      <div class="">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          Cnode
        </a>
        <ul class="nav navbar-nav">
          <li id='a'><a v-link="'/home'">首页</a></li>
          <li><a v-link="'/wqx'">wqx</a></li>
        </ul>
        
      </div>
    </nav>

    <div>
        <router-view ></router-view>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import $ from 'jquery'
export default {
  components: {
    Hello
  },
  methods: {
    click: function () {
      console.log($("#a"))
    }
  }
}
</script>

<style>
.container-fluid {
     padding-right: 0px; 
     padding-left: 0px; 
    margin-right: auto;
    margin-left: auto;
}



</style>
