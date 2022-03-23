<template>
  <div class="annaualpricecard">
    <h4>$495 /annually</h4>
    <p>
      Collaborate, fix problems faster and celebrate successes as they happen.
    </p>
    <ul>
      <li>Everything in Essentials plus more</li>
      <li>Our most popular package</li>
    </ul>
    <button>Select Plan</button>
  </div>
</template>
<script>
export default {
  name: 'Annaulprice',
}
</script>
<style scoped>
.annaualpricecard {
  box-shadow: 0px 0px 27px 9px rgb(0 0 0 / 8%);
  padding: 5%;
  border-radius: 10px;
  width: 300px;
}
ul {
  flex-direction: column;
}
button {
  text-align: center;
  background-color: #e01e5a;
  width: auto;
  border-radius: 50px;
  padding: 15px 30px;
  color: #fff;
}
button:hover {
  border: 1px solid #e01e5a;
  background-color: transparent;
  color: #e01e5a;
}
</style>
