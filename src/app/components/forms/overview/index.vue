<template lang='pug'>
  b-container
    h2 出品概要の入力
    Gauge
    Types
    Maker
    Company
    router-link(to='status') 出品物の状態
</template>

<script lang='ts'>
import Gauge from './assets/gauge'
import Types from './assets/types'
import Maker from './assets/maker'
import Company from './assets/company'

export default {
  components: {
    Gauge,
    Types,
    Maker,
    Company
  },
  data () {
   return {
     selected: ''
   }
 }
}
</script>

<style lang='scss'>
.terms {
  margin-bottom: 15px;

  .inner {
    border-bottom: solid 1px #ccc;

    span.exact {
      color: #999;
    }
  }
}
</style>
