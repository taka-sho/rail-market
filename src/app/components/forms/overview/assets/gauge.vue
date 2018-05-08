<template lang="pug">
  .terms
    .inner
      .title
        h3 ゲージ
      .form
        b-form-group
          b-form-radio-group(
            id='btnradios1'
            name='gauge'
            :options='form'
            v-model='gaugeVal'
            v-on:change='update'
            stacked
          )
</template>

<script lang='ts'>

import database from '@fire/utils/database'

export default {
  methods: {
    update (e) {
      this.$parent.gauge = e
    }
  },
  props: ['db'],
  data ()  {
    return {
      gaugeVal: this.$store.state.gauge | 0,
      form: [
        { text: 'Nゲージ', value: '0' },
        { text: '16番ゲージ', value: '1' }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
