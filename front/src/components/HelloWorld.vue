<template>
    <div class="left-menu">
        <ul id="nav">
          <li><a @click="selected = 1" :class="{highlight:selected == 1}" href="#"><i class="fab fa-delicious fa-sm"></i>Tableau de bord</a></li>
          <li><a @click="selected = 5" :class="{highlight:selected == 5}" href="#"><i class="fas fa-dollar-sign fa-sm"></i>Transactions</a></li>
          <li><a @click="selected = 2" :class="{highlight:selected == 2}" href="#"><i class="fas fa-wallet fa-sm"></i>Solde</a></li>
          <li><a @click="selected = 3" :class="{highlight:selected == 3}" href="#"><i class="fas fa-calendar-alt fa-sm"></i>Planificateur</a></li>
          <li><a @click="selected = 4" :class="{highlight:selected == 4}" href="#"><i class="fas fa-signal fa-sm"></i>Rapports</a></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>


<style>
 .left-menu{
   float: left;
   background-color: #2c2f33;
   width: 18%;
   height: 100%;
 
   
 }
 #nav{
   list-style: none;
   padding-left: 4em;
   text-align: left;
 }
 
 #nav li{
  padding-top: 2em;
 }
 #nav a{
   display: inline-block;
   margin-left: 5px;
   margin-bottom: 2em;
   padding: 0.6em;
   width: 12em;
   text-decoration: none;
   color: white;
  
 }
 #nav a:hover, #nav a:focus{
   background: #21bf73;
   border-radius: 8px;
   box-shadow: 0px 8px 8px -6px #80FFDE;
   
 }
 i {
  display: inline-block;
  margin-right: 0.5em;
}

.hightlight{
   background: #21bf73;
   border-radius: 8px;
   box-shadow: 0px 8px 8px -6px #80FFDE;
}
</style>