<template lang="pug">
  div
    header
      h1 Edit
    main
      router-view
</template>

<script lang='ts'>

import database from '@fire/utils/database'

export default {}
</script>

<style lang="scss" scoped>
  header {
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    background-color: rgba(200, 200, 200, .8);
    z-index: 100;
  }
  main {
    margin-top: 75px;
  }
</style>
