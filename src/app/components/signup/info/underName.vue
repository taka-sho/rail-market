<template lang='pug'>
b-form-group
  b-form-input(
    v-model='uName'
    v-on:change='update'
    type='text'
    placeholder='名前'
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
      uName: ''
    }
  },
  methods: {
    ...mapActions(['updateUserInfo']),
    update (e) {
      this.updateUserInfo({
        key: MutationTypes.UPDATES.USER_INFO.UNDER_NAME,
        changed: e
      })
    }
  }
}
</script>

<style lang='scss'>
</style>
