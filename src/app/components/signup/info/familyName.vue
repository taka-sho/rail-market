<template lang='pug'>
b-form-group
  b-form-input(
    v-model='fName'
    v-on:change='update'
    type='text'
    placeholder='苗字'
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
      fName: ''
    }
  },
  methods: {
    ...mapActions(['updateUserInfo']),
    update (e) {
      this.updateUserInfo({
        key: MutationTypes.UPDATES.USER_INFO.FAMILY_NAME,
        changed: e
      })
    }
  }
}
</script>

<style lang='scss'>
</style>
