<template lang="pug">
  div
    h1 My page
    ul
      li
        router-link(to='/search') 商品検索
      li
        router-link(to='/generate') 新規出品

    ul
      li(v-if='loading') Loading Now...
      li(v-for='(value, key) in d')
        b-button(
          v-on:click='goTo(key)'
          type='button'
        ) {{ key }}
    b-button(
      v-on:click='signOut'
      type='button'
    ) Sign out
</template>

<script lang='ts'>
import database from '@fire/utils/database'
import signOut from '@fire/utils/auth/signout'

export default {
  data () {
    return {
      d: {},
      loading: true
    }
  },
  methods: {
    signOut () {
      signOut()
        .then(() => {
          this.$router.push('/signin')
        })
    },
    goTo (key) {
      database.read(`products/${database.uid()}`).then(snapshot => {
        this.$store.replaceState(snapshot.val()[key])
        this.$router.push(`/assessment/${key}/overview`)
      }).catch(err => {
        console.log(err.message)
        setTimeout(() => {
          this.$router.push('/signin')
        }, 2000)
      })
    }
  },
  beforeMount () {
    database.read(`products/${database.uid()}`).then(snapshot => {
      this.loading = false
      this.d = snapshot.val()
    }).catch(e => {
      console.log(e.message)
    })
  }
}
</script>

<style lang="scss">
li {
  height: 50px;
}
</style>
