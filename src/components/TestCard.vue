<template>
  <div class="wrapper">
    <div v-for="airport in airports" :key="airport.abbreviation" class="card">
      <p>{{ airport.abbreviation }}</p>
      <p>{{ airport.name }}</p>
      <p>{{ airport.city }}, {{ airport.state }}</p>
    </div>
    <h3>{{greetings}}</h3>
    <input v-model="greetings" /> 
  </div>

</template>

<script>
import { ref } from 'vue'
import airportData from './airportdata.js'

export default {
  name: 'Testcard',
  props: ['airports'],
  data: function () {
    return {
      greetings:'Hi',
    }
  }
}
</script>
<style scoped>
.wrapper{
display: flex;
align-items: center;
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
</style>