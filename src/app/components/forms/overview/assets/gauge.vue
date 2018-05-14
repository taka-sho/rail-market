<template lang="pug">
  .terms
    .inner
      .title
        h3 ゲージ
      .form
        b-form-group
          b-form-radio-group(
            name='gauge'
            :options='form'
            v-model='val'
            v-on:change='update'
            stacked
          )
</template>

<script lang='ts'>

import {
  mapState,
  mapActions
} from 'vuex'

import MutationTypes from '@store/mutationTypes'

export default {
  data () {
    return {
      val: '0',
      form: [
        { text: 'Nゲージ', value: '0' },
        { text: '16番ゲージ', value: '1' }
      ]
    }
  },
  methods: {
    ...mapActions(['updateOverview']),
    update (e) {
      this.updateOverview({
        key: MutationTypes.UPDATES.SERIES,
        changed: e
      })
    }
  },
  computed: mapState(['gauge']),
  mounted () {
    this.val = this.gauge
  }
}
</script>

<style lang="scss">
</style>
