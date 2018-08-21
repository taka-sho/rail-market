<template lang='pug'>
b-form-group
  input(
    placeholder='出品名'
    v-model='name'
  )
  b-button(
    type="button"
    variant="primary"
    v-on:click='generate'
  ) Update
</template>

<script lang='ts'>
import State from '@store/state'
import database from '@fire/utils/database'

import MutationTypes from '@store/mutationTypes'

import { mapActions } from 'vuex'

export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    ...mapActions(['updateOverview']),
    generate () {
      const newState = new State(database.uid())
      database.set(
        `products/${database.uid()}/${this.name}`,
        newState
      ).then(() => {
        this.$store.replaceState(newState)
        this.$router.push(`/assessment/${this.name}/overview`)
      }).catch(err => {
        throw new Error(err.message)
      })
    }
  }
}
</script>

<style lang='scss'>
</style>
