<template>
  <div class="captured">
    <div class="captured__imagecontainer">
      <img src="../assets/mobile.png" />
    </div>
    <div class="captured__right">
      <h2>Capture Emotions Here And Now</h2>
      <p>
        The genuine feedback collected with our Smileys helps you improve
        customer experience and drive growth, efficiency and profit. Happy
        customers buy more! The genuine feedback collected with our Smileys
        helps you improve customer experience and drive growth, efficiency and
        profit. Happy customers buy more!
      </p>
      <Button text="Load More" />
    </div>
  </div>
</template>
<script>

import Button from './Button.vue'
export default ({
  name: 'Capture',
  components: {
    Button,
  },
  data() {
    return {
      
    }
  },

})
</script>
<style scoped>
.captured{
display: flex;
align-items:center;
}
p{
text-align:left;
}
</style>
