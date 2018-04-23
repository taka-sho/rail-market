<template lang="pug">
  .terms
    .inner
      .title
        h3 品目
      .form
        b-form-group
          b-form-radio-group(id='btnradios2' stacked :options='types' name='types' v-model='selected')
</template>

<script lang='ts'>
export default {
  data () {
    return {
      selected: '0',
      types: [
        {text: '車両セット', value: '0'},
        {text: '車両単品', value: '1'},
        {text: 'パーツ類', value: '2'},
        {text: 'ステッカー・インレタ・デカール', value: '3'},
        {text: '車両ケース', value: '4'},
        {text: 'ストラクチャー', value: '5'}
      ],
    }
  }
}
</script>

<style lang="scss">
</style>
