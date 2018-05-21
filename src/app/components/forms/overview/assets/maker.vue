<template lang="pug">
  .terms
    .inner
      .title
        h3 模型メーカー
      .form
        b-form-group
          b-form-radio-group(
            id='btnradios3'
            name='maker'
            :options='form'
            v-model='val'
            v-on:change='updateMakerNum'
            stacked
          )
      .form.col(v-if="maker == '6'")
        b-form-group
          input(
            placeholder='模型メーカー名'
            v-on:change='updateMakerName'
            v-model='makerNameInput'
          )
</template>

<script lang='ts'>
import { mapActions, mapState } from 'vuex'
import MutationTypes from '@store/mutationTypes'

export default {
  methods: {
    ...mapActions(['updateOverview']),
    updateMakerNum (e) {
      this.updateOverview({
        key: MutationTypes.UPDATES.MAKER,
        changed: e
      })
    },
    updateMakerName (e) {
      this.updateOverview({
        key: MutationTypes.UPDATES.MAKER_NAME,
        changed: e.target ? e.target.value : ''
      })
    }
  },
  computed: mapState(['maker', 'makerName']),
  data () {
    return {
      val: '0',
       makerNameInput: '',
      form: [
        {text: "カトー<span class='exact'>(KATO)</span>", value: '0'},
        {text: "トミックス<span class='exact'>(TOMIX)</span>", value: '1'},
        {text: "グリーンマックス<span class='exact'>(GREENMAX)</span>", value: '2'},
        {text: "カツミ<span class='exact'>(KTM)</span>", value: '3'},
        {text: "エンドウ<span class='exact'>(ENDO)</span>", value: '4'},
        {text: "天賞堂<span class='exact'>(Tenshodo)</span>", value: '5'},
        {text: 'その他', value: '6'}
      ]
    }
  },
  mounted () {
    this.val = this.maker
    this.makerNameInput = this.makerName
  }
}
</script>

<style lang="scss">
</style>
