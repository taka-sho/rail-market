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
            :options='maker'
            v-model='selected'
            v-on:change='update'
            stacked
          )
      .form.col(v-show="selected === '6'")
        b-form-group
          input(
            placeholder='模型メーカー名'
            v-on:change='updateOther'
            v-model='otherMaker'
          )
</template>

<script lang='ts'>
export default {
  methods: {
    update (e) {
      this.$parent.maker = e
    },
    updateOther (e) {
      this.$parent.maker = this.otherMaker
    }
  },
  data () {
    return {
      selected: this.$store.state.maker | 0,
      otherMaker: '',
      maker: [
        {text: "カトー<span class='exact'>(KATO)</span>", value: '0'},
        {text: "トミックス<span class='exact'>(TOMIX)</span>", value: '1'},
        {text: "グリーンマックス<span class='exact'>(GREENMAX)</span>", value: '2'},
        {text: "カツミ<span class='exact'>(KTM)</span>", value: '3'},
        {text: "エンドウ<span class='exact'>(ENDO)</span>", value: '4'},
        {text: "天賞堂<span class='exact'>(Tenshodo)</span>", value: '5'},
        {text: 'その他', value: '6'}
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
