<template lang="pug">
  .form
    b-form-group(label='走行状態')
      b-form-radio-group(
        :id="'running' + index"
        :options='form'
        :name="'running' + index"
        v-model='answer'
      )
</template>

<script lang='ts'>
export default {
  props: [ 'index' ],
  data () {
    return {
      answer: this.$store.state.running | 0,
      form: [
        {text: 'モーターなし', value: '0'},
        {text: '走り始めからスムーズ', value: '1'},
        {text: '一定速度以上はスムーズ', value: '2'},
        {text: 'スムーズに走らない', value: '3'},
        {text: '全く走らない', value: '4'},
        {text: '異音がする', value: '5'}
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
