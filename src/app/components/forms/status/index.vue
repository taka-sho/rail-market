<template lang="pug">
  b-container
    h2 出品物の状態
    .terms
      .inner
        .title
          h3 両数
        .form
          b-form-select(v-model="selected" :options="options" class="mb-3")
    .terms(v-for='(i, index) in Number(selected)').cars
      .title
        h2 {{ i }}両目
      Lights(:index='index')
      Running(:index='index')
      Coupler(:index='index')
      Pantograph(:index='index')
      Options(:index='index')
      UploadImage(:index='index')
    router-link(to='delivery') 配送方法へ
</template>

<script lang='ts'>
import Lights from './assets/lights'
import Running from './assets/running'
import Coupler from './assets/coupler'
import Pantograph from './assets/pantograph'
import Options from './assets/options'
import UploadImage from './assets/uploadImage'

export default {
  components: {
    Lights,
    Running,
    Coupler,
    Pantograph,
    Options,
    UploadImage
  },
  data () {
    return {
      cars: 1,
      selected: '1',
      options: Array.apply(null, new Array(20)).map((v,i) => 1 + i) // make array 1 to 20
    }
  }
}
</script>

<style lang="scss">
.cars {
  margin-bottom: 15px;
  border-bottom: solid 1px #ccc;

  .form {
    margin-bottom: 10px;
  }
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

</style>
