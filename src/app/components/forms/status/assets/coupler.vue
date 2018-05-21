<template lang="pug">
  .form
    b-form-group(label='カプラー')
      b-form-radio-group(
        :id="'coupler' + index"
        :options='form'
        :name="'coupler' + index"
        v-model='val'
        v-on:change='update'
      )
</template>

<script lang='ts'>
import {
  mapState,
  mapActions
} from 'vuex'
import MutationTypes from '@store/mutationTypes'

export default {
  props: [ 'index' ],
  data () {
    return {
      val: '0',
      form: [
        {text: 'なし', value: '0'},
        {text: 'アーノルト', value: '1'},
        {text: 'KATOカプラーフック付', value: '2'},
        {text: 'KATOカプラーフック無', value: '3'},
        {text: 'TNカプラー'}
      ]
    }
  },
  computed: mapState(['t0']),
  methods: {
    ...mapActions(['updateStatus']),
    update (e) {
      this.updateStatus({
        key: MutationTypes.UPDATES.DETAILS.COUPLER,
        changed: e,
        index: this.index
      })
    }
  },
  mounted () {
    this.val = this.$store.state[`t${this.index}`].coupler
  }
}
</script>

<style lang="css">
</style>
