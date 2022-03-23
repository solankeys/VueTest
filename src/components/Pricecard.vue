<template>
  <div class="price-card">
    <h4>$ 123/month</h4>
    <p>
      Affordable package for continuous customer experience improvements. No
      Limit.
    </p>
    <ul>
      <li>Unlimited Responses</li>
      <li>Unlimited Surveys</li>
      <li>Unlimited Users</li>
    </ul>
    <button> Select Plan</button>
  </div>
</template>
<script>
export default {
  name: 'Pricecard',
}
</script>

<style scoped>
.price-card{
  width: 300px;
}
ul{
flex-direction: column;
}
button {
background-color:transparent ;
color: #4EC4A0;
border: 1px solid #4EC4A0;
width: auto;
border-radius: 50px;
padding: 15px 30px;
}
button:hover {
background-color: #4EC4A0;
color: #fff;
}
</style>
