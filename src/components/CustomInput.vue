<template>
  <div class="custom-input">
    {{ label }}
    <input v-model="inputValue" @keyup.enter="submitform" :type="type" />
  </div>
</template>
<script>
export default {
  name: 'custom-input',
  props: ['label', 'modelValue' ,'type'],
  computed: {
    inputValue: {
      get() {
        return this.modelValue
      },
      set(value) {
        // console.log(value)
        this.$emit('update:modelValue', value)
      },
    },
  },
  methods: {
    submitform() {
      console.log(this.inputValue)
    },
  },
}
</script>
<style scoped></style>
