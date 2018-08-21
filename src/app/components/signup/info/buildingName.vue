<template lang='pug'>
  b-form-input(
    v-model='buildingName'
    v-on:change='update'
    type='text'
    placeholder='建物名ほか'
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
      buildingName: ''
    }
  },
  methods: {
    ...mapActions(['updateUserInfo']),
    update (e) {
      this.updateUserInfo({
        key: MutationTypes.UPDATES.USER_INFO.BUILDING_NAME,
        changed: e
      })
    }
  }
}
</script>

<style lang='scss'>
</style>
