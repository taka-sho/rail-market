<template lang="pug">
  .terms
    .inner
      .title
        h3 品目
      .form
        b-form-group
          b-form-radio-group(
            id='btnradios2'
            name='types'
            :options='form'
            v-on:change='update'
            v-model='val'
            stacked
          )
</template>
<script lang='ts'>
import { mapState, mapActions } from 'vuex'
import MutationTypes from '@store/mutationTypes'


export default {
  methods: {
    ...mapActions(['updateOverview']),
    update (e) {
      this.updateOverview({
        key: MutationTypes.UPDATES.PRODUCT_TYPE,
        changed: e
      })
    }
  },
  computed: mapState(['productType']),
  data () {
    return {
      val: '0',
      form: [
        {text: '車両セット', value: '0'},
        {text: '車両単品', value: '1'},
        {text: 'パーツ類', value: '2'},
        {text: 'ステッカー・インレタ・デカール', value: '3'},
        {text: '車両ケース', value: '4'},
        {text: 'ストラクチャー', value: '5'}
      ],
    }
  },
  mounted () {
    this.val = this.productType
  }
}
</script>

<style lang="scss">
</style>
