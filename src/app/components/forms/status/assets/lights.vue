<template lang="pug">
  .form
    b-form-group(label='ヘッドライト・テールライト')
      b-form-radio-group(
        :options='form'
        v-model='val'
        v-on:change='update'
      )
</template>

<script lang='ts'>
import { mapState, mapActions } from 'vuex'
import MutationTypes from '@store/mutationTypes'

export default {
  props: ['index'],
  data () {
    return {
      val: '0',
      form: [
        {text: 'なし', value: '0'},
        {text: '点灯しない', value: '1'},
        {text: '一部難あり', value: '2'},
        {text: '正常に点灯する', value: '3'}
      ]
    }
  },
  methods: {
    ...mapActions(['updateStatus']),
    update (e) {
      this.updateStatus({
        key: MutationTypes.UPDATES.DETAILS.LIGHTS,
        changed: e,
        index: this.index
      })
    }
  },
  mounted () {
    this.val = this.$store.state[`t${this.index}`].lights
  }
}
</script>

<style lang="scss">
</style>
