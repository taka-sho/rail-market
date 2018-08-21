<template lang='pug'>
b-form-group
  b-form-input(
    v-model='address'
    v-on:change='update'
    type='text'
    placeholder='住所'
  )
</template>

<script lang='ts'>

import {
  mapActions,
  mapState
} from 'vuex'

import MutationTypes from '@store/mutationTypes'

export default {
  data () {
    return {
      address: ''
    }
  },
  methods: {
    ...mapActions(['updateUserInfo']),
    update (e) {
      this.updateUserInfo({
        key: MutationTypes.UPDATES.USER_INFO.ADDRESS,
        changed: e
      })
    }
  }
}
</script>

<style lang='scss'>
</style>
