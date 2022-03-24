<template>
  <div class="satisfaction__card">
      <div v-for="data in steps" :key="data.title" class="card">
        <h3>{{ data.title }}</h3>
        <p>{{ data.message }}</p>
      </div>
    </div>
</template>
<script>
import { ref } from 'vue'
import data from './CardData.js'

export default {
  name: 'Card',
  props: ['steps']
}
</script>
<style scoped>
.satisfaction__card {
  display: flex;
  align-content: center;
  justify-content: space-between;
}
.card {
  text-align: center;
  width: 200px;
  border-radius: 12px;
  margin: 0rem 1.2rem 0rem 1.2rem;
  padding: 3rem 2rem 3rem 2rem;
  background-color: #ffffff;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0px 7px 50px -37px #0d1f4a;
}
p{
text-align: center;
}
</style>
