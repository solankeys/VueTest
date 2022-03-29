<template>
  <button>{{text}}</button>
</template>


<script>


export default ({
  name:'Button',
  msg:'solanki',
  props: ['text']
})
</script>
<style scoped>
  button {
  padding: 12px 6px;
  background-color: #e01e5a;
  border: none;
  outline: none;
  border-radius: 6px;
  color: #fff;
  margin-right: 10px;
  border: 1px solid #e01e5a;
}
button:hover {
  background-color: transparent;
  border: 1px solid #e01e5a;
  color: #e01e5a;
}
</style>