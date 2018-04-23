<template lang="pug">
  .form
    b-form-group(label='ヘッドライト・テールライト')
      b-form-radio-group(:id="'head' + index" :options='headAndTail' :name="'head' + index" v-model='answer')
</template>

<script lang='ts'>
export default {
  props: [
    'index'
  ],
  data () {
    return {
      answer: '0',
      headAndTail: [
        {text: 'なし', value: '0'},
        {text: '点灯しない', value: '1'},
        {text: '一部難あり', value: '2'},
        {text: '正常に点灯する', value: '3'}
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
