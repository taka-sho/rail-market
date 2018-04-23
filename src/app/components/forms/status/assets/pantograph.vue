<template lang="pug">
  .form
    b-form-group(label='パンタグラフ')
      b-form-radio-group(:id="'pantograph' + index" :options='pantograph' :name="'pantograph' + index" v-model='answer')
</template>

<script lang='ts'>
export default {
  props: ['index'],
  data () {
    return {
      answer: '0',
      pantograph: [
        {text: 'なし', value: '0'},
        {text: '正常', value: '1'},
        {text: '破損', value: '2'},
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
