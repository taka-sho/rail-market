<template lang='pug'>
b-button(
  type='submit'
  variant='primary'
  v-on:click='signOut'
) SignOut
</template>

<script lang='ts'>

import signout from '../../firebase/utils/auth/signout'

export default {
  methods: {
    signOut: function (){
      signout()
        .then(() => {
          alert('Success')
          this.$router.push('/signin')
        })
        .catch(err => {
          alert(err.message)
        })
    }
  }
}
</script>

<style lang='scss'>
</style>
