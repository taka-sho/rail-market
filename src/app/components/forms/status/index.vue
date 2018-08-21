<template lang="pug">
  b-container
    h2 出品物の状態
    .terms
      .inner
        .title
          h3 両数
        .form
          b-form-select(
            v-model.number="numberOf"
            v-on:change='updateNumberOf'
            :options="options"
            class="mb-3"
          )
    .terms(
      v-for='(i, index) in 20'
      v-show='index < numberOf'
    ).cars
      .title
        h2 {{ i }}両目
      Lights(:index='index')
      Running(:index='index')
      Coupler(:index='index')
      Pantograph(:index='index')
      Options(:index='index')
      UploadImage(:index='index')
    b-button(
      type="button"
      variant="primary"
      v-on:click='pushFire'
    ) Update
</template>

<script lang='ts'>
import Lights from './assets/lights'
import Running from './assets/running'
import Coupler from './assets/coupler'
import Pantograph from './assets/pantograph'
import Options from './assets/options'
import UploadImage from './assets/uploadImage'

import database from '@fire/utils/database'

import { mapActions } from 'vuex'
import MutationTypes from '@store/mutationTypes'

export default {
  components: {
    Lights,
    Running,
    Coupler,
    Pantograph,
    Options,
    UploadImage
  },
  methods: {
    ...mapActions(['updateStatus']),
    updateNumberOf (e) {
      this.updateStatus({
        key: MutationTypes.UPDATES.NUMBER_OF,
        changed: e - 1,
        index: this.index
      })
    },
    pushFire () {
      database.set(
        `products/${database.uid()}/${this.$route.params.id}`,
        this.$store.state
      ).then(() => {
        this.$router.push(`/assessment/${this.$route.params.id}/delivery`)
      }).catch(err => {
        throw new Error(err.message)
      })
    }

  },
  data () {
    return {
      d: {},
      cars: 1,
      numberOf: '1',
      options: Array.apply(null, new Array(20)).map((v,i) => 1 + i) // make array 1 to 20
    }
  },
  beforeMount () {
    database.read(`products/${database.uid()}`).then(snapshot => {
      this.d = snapshot.val()[this.$route.params.id.status]
      this.numberOf = snapshot.val()[this.$route.params.id]['numberOf'] + 1
      if (!this.d) {}
    }).catch(e => {
      console.log(e.message)
    })
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
