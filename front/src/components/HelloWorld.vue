<template>
  <div class="parent-box">
    <div class="left-box">
      <p>lorem ipsum</p>
    </div>
    
    <div class="big-right-box">
      <p>lorem ipsum</p>
    </div>
   
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
  .parent-box{
    box-shadow: 15px 10px 10px 10px;
    display: flex;
    border-radius: 8px;
    width: 100em;
    height: 50em;
    margin-left: auto;
    margin-right: auto;
    background-color: #2c2f33;

  }

  .left-box{
    
    padding: 12px;
    display: block;
    width: auto;
  }

  .big-right-box{
   
  }
</style>