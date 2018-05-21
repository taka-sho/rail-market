<template lang="pug">
  .form
    b-form-group(label='パンタグラフ')
      b-form-radio-group(
        :id="'pantograph' + index"
        :options='pantograph'
        :name="'pantograph' + index"
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
      pantograph: [
        {text: 'なし', value: '0'},
        {text: '正常', value: '1'},
        {text: '破損', value: '2'},
      ]
    }
  },
  methods: {
    ...mapActions(['updateStatus']),
    update (e) {
      this.updateStatus({
        key: MutationTypes.UPDATES.DETAILS.PANTOGRAPH,
        changed: e,
        index: this.index
      })
    }
  },
  mounted () {
    this.val = this.$store.state[`t${this.index}`].pantograph
  }
}
</script>

<style lang="scss">
</style>
