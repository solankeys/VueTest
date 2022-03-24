<template>
  <Testcard :airports="airport" />
</template>

<script>
import { ref } from 'vue'
import airportData from './airportdata.js'
import Testcard from './TestCard.vue'

export default {
  name: 'Testpage',
  components: {
    Testcard,
  },
  setup() {
    const airport = ref(airportData)

    return { airport }
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
...