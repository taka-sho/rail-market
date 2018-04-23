<template lang="pug">
  .terms
    .inner
      .title
        h3 ゲージ
      .form
        b-form-group
          b-form-radio-group(id='btnradios1' stacked :options='gauge' name='gauge' v-model='selected')
</template>

<script lang='ts'>
export default {
  data () {
    return {
      selected: '0',
      gauge: [
        { text: 'Nゲージ', value: '0' },
        { text: '16番ゲージ', value: '1' }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
