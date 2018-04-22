<template lang="pug">
b-container
  h2 発送方法
  .terms
    .form
      b-form-group(label='発送会社')
        b-form-radio-group(id='head' :options='deliverWay' :name='head' v-model='selected')
      b-form-group(v-show="selected === 'other'")
        input(type='text' placeholder='発送会社名' required)
    .form
      b-form-group(label='発送料目安')
        input(type='number' step='100' v-model='cars' placeholder='目安を書いてください' required)
</template>

<script lang='ts'>
export default {
  data () {
    return {
      deliverWay: [
        {text: '宅急便', value: 'yamato'},
        {text: 'ゆうパック', value: 'yu-pack'},
        {text: '普通・定形外郵便', value: 'yu-bin'},
        {text: 'その他', value: 'other'},
      ],
      selected: ''
    }
  }
}
</script>

<style lang="scss">
</style>
