<template lang="pug">
  .form
    b-form-group(label='走行状態')
      b-form-radio-group(
        :id="'running' + index"
        :options='form'
        :name="'running' + index"
        v-model='val'
        v-on:change='update'
      )
</template>

<script lang='ts'>
import { mapState, mapActions } from 'vuex'
import MutationTypes from '@store/mutationTypes'

export default {
  props: [ 'index' ],
  data () {
    return {
      val: '0',
      form: [
        {text: 'モーターなし', value: '0'},
        {text: '走り始めからスムーズ', value: '1'},
        {text: '一定速度以上はスムーズ', value: '2'},
        {text: 'スムーズに走らない', value: '3'},
        {text: '全く走らない', value: '4'},
        {text: '異音がする', value: '5'}
      ]
    }
  },
  methods: {
    ...mapActions(['updateStatus']),
    update (e) {
      this.updateStatus({
        key: MutationTypes.UPDATES.DETAILS.RUNNING,
        changed: e,
        index: this.index
      })
    }
  },
  mounted () {
    this.val = this.$store.state[`t${this.index}`].running
  }
}
</script>

<style lang="scss">
</style>
