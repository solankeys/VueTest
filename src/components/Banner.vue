<template>
  <div class="banner">
    <div class="banner__left">
      <h1>Customer feedback made simple</h1>
      <p>Likemetric: Customer Experience Management platform for SMBs</p>
      <div class="trusted-brand">
        <p>Trusted by these brands:</p>
        <ul>
          <li><img src="../assets/dropbox.png" /></li>
          <li><img src="../assets/airbnd1.png" /></li>
          <li><img src="../assets/fedex1.png" /></li>
          <li><img src="../assets/abinbev1.png" /></li>
        </ul>
      </div>
      <Button :text="title" />
      <Button text="Load More" />
    </div>
    <div class="banner__imagecontainer">
      <img src="../assets/customerlikemetric.png" />
    </div>
  </div>
</template>
<script>
import Button from './Button.vue'

export default {
  name: 'Banner',
  components: {
    Button,
  },
  data() {
    return {
      title: 'Load more',
    }
  },
}
</script>

<style scoped>
.banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to top right, blue);
}
.trusted-brand {
  display: flex;
  align-items: center;
}
.banner__imagecontainer {
  width: 600px;
  height: 600px;
}
.banner__imagecontainer img {
  width: 100%;
  height: 100;
  object-fit: cover;
}
</style>
