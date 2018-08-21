<template lang='pug'>
b-form-group
  b-form-input(
    v-model='username'
    v-on:change='update'
    type='text'
    placeholder='ユーザー名'
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
      username: ''
    }
  },
  methods: {
    ...mapActions(['updateUserInfo']),
    update (e) {
      this.updateUserInfo({
        key: MutationTypes.UPDATES.USER_INFO.USERNAME,
        changed: e
      })
    }
  }
}
</script>

<style lang='scss'>
</style>
