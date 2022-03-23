<template>
  <div class="satisfaction">
    <h2>3 steps to Customer Satisfaction</h2>
    <p>
      Improving customer experience is a continuous cycle of gathering high
      quantities of reliable feedback and taking action.
    </p>
    <div class="satisfaction__card">
      <!-- <div class="card">
        <h3>Capture instant feedback</h3>
        <p>
          Learn your customers’ emotions at the exact moment and experience
          point
        </p>
      </div> -->
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>
<script>
import Card from './Card.vue'

export default {
  name: 'Satisfaction',
  components: {
    Card,
  },
}
</script>
<style scoped>
.satisfaction {
  text-align: center;
}
.satisfaction__card {
  display: flex;
  align-content: center;
  justify-content: space-between;
}
</style>
