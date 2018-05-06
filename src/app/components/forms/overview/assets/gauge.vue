<template lang="pug">
  .terms
    .inner
      .title
        h3 ゲージ {{ gaugeVal }}
      .form
        b-form-group
          b-form-radio-group(
            id='btnradios1'
            name='gauge'
            :options='form'
            v-model='gaugeVal'
            v-on:click='update'
            stacked
          )
</template>

<script lang='ts'>

import {
  mapActions,
  mapState
} from 'vuex'

export default {
  methods: {
    ...mapActions([
      // 'setGauge'
    ]),
    update () {
      console.log('honya')
    }
  },
  computed: {
    // ...mapState([
    //   'gaugeVal'
    // ])
  },
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
