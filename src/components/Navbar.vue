<template>
  <header>
    <img alt="likemetric logo" src="../assets/likemetric.png" />
    <ul id="navbar">
      <li v-for="item in items" :key="item.id">{{ item.list }}</li>
    </ul>
    <!-- <button>Sign Up</button> -->
  <Button :text='title' />
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
      title:'Signup'
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

</style>
