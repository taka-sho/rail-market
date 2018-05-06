<template lang="pug">
  .form
    b-form-group(label='カプラー')
      b-form-radio-group(
        :id="'coupler' + index"
        :options='form'
        :name="'coupler' + index"
        v-model='answer'
      )
</template>

<script lang='ts'>
export default {
  props: [ 'index' ],
  data () {
    return {
      answer: this.$store.state.coupler | 0,
      form: [
        {text: 'なし', value: '0'},
        {text: 'アーノルト', value: '1'},
        {text: 'KATOカプラーフック付', value: '2'},
        {text: 'KATOカプラーフック無', value: '3'},
        {text: 'TNカプラー'}
      ]
    }
  }
}
</script>

<style lang="css">
</style>
