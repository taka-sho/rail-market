<template lang="pug">
  .terms
    .inner
      .title
        h3 模型メーカー
      .form
        b-form-group
          b-form-radio-group(id='btnradios3' stacked :options='maker' name='maker' v-model='selected')
      .form.col(v-show="selected === '6'")
        b-form-group
          input(placeholder='模型メーカー名')
</template>

<script lang='ts'>
export default {
  data () {
    return {
      selected: '0',
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
