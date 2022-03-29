<template>
  <div class="test-box">
    <div v-if="isVisible" class="box"> Hi</div>
    <div v-else-if="isVisible2" class="box two"> Heyy</div>
    <div v-else class="box"> Hello</div> 
    <div v-show="active" class="box"> solanki</div>
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
    <button @click.prevent.stop="toggleBox" class="toggle">Toogle</button>
  </div>
</template>

<script>
export default {
name:'TestBox',
data: function () {
    return {
      isVisible:false,
      isVisible2: false,
      active: true
    }
  },
  methods: {
    toggleBox () {
      this.active = !this.active
    },
  }

}
</script>

<style>
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