<template lang='pug'>
  b-container
    h2 出品概要の入力
    Gauge
    Types
    Maker
    Company
    b-form(:submit='update')
    b-button(
      type="submit"
      variant="primary"
      v-on:click='update'
    ) Update
</template>

<script lang='ts'>
import Gauge from './assets/gauge'
import Types from './assets/types'
import Maker from './assets/maker'
import Company from './assets/company'

import database from '@fire/utils/database'
import * as firebase from 'firebase'

export default {

  components: {
    Gauge,
    Types,
    Maker,
    Company
  },
  methods: {
    update () {
      const data = {
        gauge: this.gauge,
        type: this.types,
        maker: this.maker,
        company: this.company,
        train: this.train
      }
      database.set(this.uid, data)
      .then(() => {
        this.$router.push('/assessment/status')
      })
      .catch(err => {
        throw new Error(err.message)
      })
    }
  },
  computed: {
    uid: function () {
      return database.uid()
    },
    db: function () {
      return database.read(this.uid)
    }
  },
  data () {
   return {
     gauge: '0',
     types: '0',
     maker: '0',
     company: '0',
     selected: '0',
     train: ''
   }
 },
 // beforeMount () {
 //   setTimeout(() => {
 //     console.log(this.db)
 //     this.db.then(snapshot => {
 //       this.gauge = snapshot.val().gauge
 //       console.log(this.gauge)
 //     })
 //   }, 2000)
 // }
}
</script>

<style lang='scss' scoped>
</style>
