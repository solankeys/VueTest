<template>
  <div>
    <h3>{{ greetings }}</h3>
    <input @keyup.enter="greet()" v-model="greetings" />
    <h3>{{love}}</h3>
    <input @keyup.enter="loves(love + '!!!!!')" v-model="love" />
    <hr />
    <!-- <div v-if="isVisible" class="box"> Hi</div>
    <div v-else-if="isVisible2" class="box two"> Heyy</div>
    <div v-else class="box"> Hello</div> -->
    <test-box />
    <hr>
    <!-- <div v-show="active" class="box"> solanki</div>
    <hr>
    <button v-on:click="active = !active" class="toggle">Toggle</button>
    <hr >
    <button @click="active = !active" class="toggle">Toggle</button>
    <hr />
    <button @click="toggleBox" class="toggle">Toggle</button>
    <hr />
    <button @click.left="toggleBox" class="toggle">Toogle</button>
    <hr />
    <button @click.prevent="toggleBox" class="toggle">Toogle</button>
    <hr />
    <button @click.prevent.stop="toggleBox" class="toggle">Toogle</button> -->
  </div>
</template>

<script>
import TestBox from './TestBox.vue'

export default {
  components: { TestBox },
  name: 'Testcard',
 
  props: ['airports'],
  data: function () {
    return {
      love:' Love',
      greetings: 'Hi',
      isVisible:false,
      isVisible2: false,
      active: true
    }
  },
  methods: {
    toggleBox () {
      this.active = !this.active
    },
    greet() {
      console.log(this.greetings)
    },
    loves(love) {
      console.log(love)
    }
  }
}
</script>
<style scoped>
.wrapper {
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
.box {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
}
.toggle{
height: 50px;
border-radius: 12px;
padding: 10px ;
}
</style>
