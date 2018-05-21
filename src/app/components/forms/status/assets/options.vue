<template lang="pug">
  .form
    b-form-group(label='付属品')
      b-form-radio-group(
        :id="'options' + index"
        :options='options'
        :name="'options' + index"
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
      options: [
        {text: '完品', value: '0'},
        {text: '取り付け済み', value: '1'},
        {text: '欠品', value: '2'}
      ]
    }
  },
  methods: {
    ...mapActions(['updateStatus']),
    update (e) {
      this.updateStatus({
        key: MutationTypes.UPDATES.DETAILS.OPTIONS,
        changed: e,
        index: this.index
      })
    }
  },
  mounted () {
    this.val = this.$store.state[`t${this.index}`].options
  }
}
</script>

<style lang="scss">
</style>
