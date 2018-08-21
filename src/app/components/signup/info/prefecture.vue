<template lang='pug'>
b-form-group
  b-form-input(
    v-model='pre'
    v-on:change='update'
    type='text'
    placeholder='都道府県'
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
      pre: ''
    }
  },
  methods: {
    ...mapActions(['updateUserInfo']),
    update (e) {
      this.updateUserInfo({
        key: MutationTypes.UPDATES.USER_INFO.PREFECTURE,
        changed: e
      })
    }
  }
}
</script>

<style lang='scss'>
</style>
