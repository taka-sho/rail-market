<template lang='pug'>
  b-container
    Username
    FamilyName
    UnderName
    Prefecture
    Address
    BuildingName
    b-button(
      type='submit'
      variant='primary'
      v-on:click='setInfo'
    ) Create
</template>

<script lang='ts'>

import database from '@fire/utils/database'

import Username from './info/username'
import FamilyName from './info/familyName'
import UnderName from './info/underName'
import Prefecture from './info/prefecture'
import Address from './info/address'
import BuildingName from './info/buildingName'

export default {
  components: {
    Username,
    FamilyName,
    UnderName,
    Prefecture,
    Address,
    BuildingName
  },
  data () {
    return {}
  },
  methods: {
    setInfo () {
      const {
        username,
        familyName,
        underName,
        prefecture,
        address,
        buildingName
      } = this.$store.state.userInfo
      database.set(
        `users/${database.uid()}/userInfo`,
        {
          userName: username,
          familyName: familyName,
          underName: underName,
          prefecture: prefecture,
          address: address,
          buildingName: buildingName,
          point: 0
        }
      ).then(() => {
        this.$router.push('/mypage')
      }).catch(err => {
        throw new Error(err.message)
      })
    }
  }
}
</script>

<style lang='scss'>
</style>
