<template lang='pug'>
  div
    b-form-input(
      v-model='email'
      type='email'
      placeholder='Enter your email address'
    )
    b-form-input(
      v-model='pass'
      type='password'
      placeholder='password'
    )
    b-button(
      type='submit'
      variant='primary'
      v-on:click='signup'
    ) Create
</template>

<script lang='ts'>
import signUp from '@fire/utils/auth/signup'
import signin from '@fire/utils/auth/signin'

export default {
  data () {
    return {
      email: '',
      pass: ''
    }
  },
  methods: {
    signup () {
      signUp(this.email, this.pass)
        .then(() => {
          signin(this.email, this.pass)
            .then(user => {
              this.$router.push('/info')
            }).catch(err => {
              alert(err.message)
            })
        })
    }
  }
}
</script>

<style lang='scss'>
</style>
