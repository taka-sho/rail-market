<template lang="pug">
  b-form(:submit='signUp')
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
      type="submit"
      variant="primary"
      v-on:click='signUp'
    ) SignUp
</template>

<script lang='ts'>
import signup from '../../firebase/utils/auth/signup'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      signup(this.email, this.password)
        .then(user => alert('Create account: ' + user.email))
        .catch(error => alert(error.message))
    }
  }
}
</script>

<style lang="scss">
</style>
