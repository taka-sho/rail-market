<template lang="pug">
  div
    h1 My page
    input(
      v-model='n'
    )
    //- b-button(
    //-   v-on:click='genNew'
    //-   type='button'
    //- ) Gen New

    ul
      li(v-if='loading') Loading Now...
      li(v-for='(value, key) in d')
        router-link(
          :to="`assessment/${key}/overview`"
        ) {{ key }}
    b-button(
      v-on:click='signOut'
      type='button'
    ) Sign out
</template>

<script lang='ts'>
import database from '@fire/utils/database'
import signOut from '@fire/utils/auth/signout'
// const basic = {
//   gauge: '0',
//   types: '0',
//   maker: '0',
//   company: '0',
//   train: '',
//   status: {
//
//   }
// }

export default {
  data () {
    return {
      d: {},
      n: '',
      loading: true
    }
  },
  methods: {
    // genNew () {
    //   const data = {
    //     lights: '0',
    //     coupler: '0',
    //     pantograph: '0',
    //     running: '0'
    //   }
    //   for (let i=1; i<=20; i++) {
    //     database.set(
    //       `${database.uid()}/trains/${this.$route.params.id}/status/${i}`,
    //       data
    //     ).then(() => {
    //       if (i == 20) {
    //         this.$router.push(`/assessment/${this.$route.params.id}/status`)
    //       }
    //     }).catch(err => {
    //       throw new Error(err.message)
    //     })
    //   }
    // },
    signOut () {
      signOut()
        .then(() => {
          this.$router.push('/signin')
        })
    }
  },
  beforeMount () {
    database.read(database.uid()).then(snapshot => {
      this.loading = false
      this.d = snapshot.val().trains
    }).catch(e => {
      console.log(e.message)
    })
  }
}
</script>

<style lang="scss">
</style>
