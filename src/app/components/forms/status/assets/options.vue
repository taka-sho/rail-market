<template lang="pug">
  .form
    b-form-group(label='付属品')
      b-form-radio-group(
        :id="'options' + index"
        :options='options'
        :name="'options' + index"
        v-model='answer'
      )
</template>

<script lang='ts'>
export default {
  props: ['index'],
  data () {
    return {
      answer: this.$store.state.options | 0,
      options: [
        {text: '完品', value: '0'},
        {text: '取り付け済み', value: '1'},
        {text: '欠品', value: '2'}
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
