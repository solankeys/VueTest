<template>
  <button>TEXT</button>
  <!-- <button>{{text}}</button> -->
</template>
<script>


export default ({
  name:'Button',
  props: {
    text:string
  }
})
</script>
<style scoped>
  button {
  border: none;
  outline: none;
  border-radius: 50px;
  
  }
</style>