<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  
  export default{
    name: 'app',
    data () {
      return {
        
      }
    } 
  }

</script>

<style>
.navbar-light .navbar-nav .nav-link {
    color: rgba(255,255,255, 0.5);
}
.navbar-light .navbar-nav .nav-link:hover {
    color: rgba(230,230,230, 0.5);
}
</style>
