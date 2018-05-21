<template lang='pug'>
  div
    b-form-input(
      v-model='username'
      type='text'
      placeholder='ユーザー名'
    )
    b-form-input(
      v-model='fName'
      type='text'
      placeholder='苗字'
    )
    b-form-input(
      v-model='uName'
      type='text'
      placeholder='名前'
    )
    b-form-input(
      v-model='pre'
      type='text'
      placeholder='都道府県'
    )
    b-form-input(
      v-model='address'
      type='text'
      placeholder='住所'
    )
    b-form-input(
      v-model='buildingName'
      type='text'
      placeholder='建物名ほか'
    )
    b-button(
      type='submit'
      variant='primary'
      v-on:click='setInfo'
    ) Create
</template>

<script lang='ts'>

import database from '@fire/utils/database'

export default {
  data () {
    return {
      username: '',
      fName: '',
      uName: '',
      pre: '',
      address: '',
      buildingName: ''
    }
  },
  methods: {
    setInfo () {
      database.set(
        `users/${database.uid()}/info`,
        {
          username: this.username,
          familyName: this.fName,
          underName: this.uName,
          prefecture: this.pre,
          address: this.address,
          buildingName: this.buildingName,
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
