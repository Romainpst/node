<template>
  <div class="home">
    <div class="parent">
      <HelloWorld />
      <TableauDeBord />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TableauDeBord from '@/components/TableauDeBord.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld, TableauDeBord
  }
}
</script>

<style>
.parent{
    position: fixed;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: #23272a;
    overflow: hidden;
    display: flex;
  }
</style>
