<template>
  <header>
    <img alt="likemetric logo" src="../assets/likemetric.png" />
    <ul id="navbar">
      <li v-for="item in items" :key="item.id">{{ item.list }}</li>
    </ul>
    <!-- <button>Sign Up</button> -->
    <Button  />
  </header>
</template>
<script>
import Button from './Button.vue';

 export default{
   name:'Navbar',
   components: {
     Button,
   },
 data: function () {
    return {
      items: [
        {list: 'Products'},
       {list: 'Solutions'},
       {list: 'Pricing'},
       {list: 'Insight'},
       {list: 'About Us'},
       {list: 'Industry'},
      ],
    }
  }
 }

</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  height: 70px;
}
ul {
  display: flex;
  align-items: center;
  gap: 10px;
}
ul li {
  list-style: none;
}
button {
  padding: 12px 6px;
  background-color: #e01e5a;
  border: none;
  outline: none;
  border-radius: 6px;
  color: #fff;
}
button:hover {
  background-color: transparent;
  border: 1px solid #e01e5a;
  color: #e01e5a;
}
</style>
