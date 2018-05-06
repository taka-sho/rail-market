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
    ) Signin
</template>

<script lang='ts'>
import signin from '../../firebase/utils/auth/signin'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      signin(this.email, this.password)
        .then(user => {
          alert('Success!')
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
