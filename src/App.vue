<template>
  <!-- <HelloWorld /> -->
  <div class="container">
    <Topnavbar />
    <Navbar />
    <Banner />
    <Capture />
    <Satisfaction />
    <Testpage/>
    <Services />
    <Getstarted />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import Banner from './components/Banner.vue';
import Capture from './components/Capture.vue'
import Satisfaction from './components/Satisfaction.vue'
import Services from './components/Services.vue'
import Getstarted from './components/Getstarted.vue'
import Topnavbar from './components/Topnavbar.vue'
import Testpage from './components/Testpage.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navbar,
    Banner,
    Capture,
    Satisfaction,
    Services,
    Getstarted,
    Topnavbar,
    Testpage
  },
}
</script>

<style>
.container {
  width: 90%;
  margin: 0 auto;
}
ul{
display: flex;
gap:10px;
}
ul li{
list-style-type: none;
}
button {
outline: none;
border: none;
}
</style>
