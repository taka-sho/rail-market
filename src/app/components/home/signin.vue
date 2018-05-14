<template lang='pug'>
  div
    b-form-input(
      v-model='email'
      type='email'
      placeholder='Enter your name'
    )
    b-form-input(
      v-model='password'
      type='password'
      placeholder='password'
    )
    b-button(
      type='submit'
      variant='primary'
      v-on:click='signIn'
    ) {{ status }}
</template>

<script lang='ts'>
import signin from '@fire/utils/auth/signin'

export default {
  data () {
    return {
      email: '',
      password: '',
      status: 'sign in'
    }
  },
  methods: {
    signIn: function () {
      this.status = 'Loading...'
      signin(this.email, this.password)
        .then(user => {
          this.$router.push('/mypage')
        }).catch(err => {
          alert(err.message)
        })
    }
  }
}
</script>

<style lang='scss'>
</style>
