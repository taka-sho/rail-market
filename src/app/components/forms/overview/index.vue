<template lang='pug'>
  b-container
    h2 出品概要の入力
    Gauge
    //- Types
    Maker
    Company
    b-button(
      type="button"
      variant="primary"
      v-on:click='pushFire'
    ) Update
</template>

<script lang='ts'>
import {
  mapState,
  mapActions
} from 'vuex'
import { State } from '@store/state'

import database from '@fire/utils/database'
import * as firebase from 'firebase'

import MutationTypes from '@store/mutationTypes'

import Gauge from './assets/gauge'
import Types from './assets/types'
import Maker from './assets/maker'
import Company from './assets/company'

export default {
  data () {
   return {
     loaded: false
   }
 },
  components: {
    Gauge,
    // Types,
    Maker,
    Company
  },
  computed: {
    uid () {
      return database.uid()
    }
  },
  methods: {
    pushFire () {
      database.set(
        `products/${this.uid}/${this.$route.params.id}`,
        this.$store.state
      ).then(() => {
        this.$router.push(`/assessment/${this.$route.params.id}/status`)
      }).catch(err => {
        throw new Error(err.message)
      })
    }
  },
 beforeMount () {
   database.read(`products/${this.uid}/${this.$route.params.id}`).then(snapshot => {
     this.$store.replaceState(snapshot.val())
   }).catch(err => {
     console.log(err.message)
     setTimeout(() => {
       this.$router.push('/signin')
     }, 2000)
   })
 }
}
</script>

<style lang='scss' scoped>
</style>
