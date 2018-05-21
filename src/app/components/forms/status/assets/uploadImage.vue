<template lang="pug">
  .form
    b-form-group(
      label='画像'
    )
      label.dragArea(
          v-on:dragleave.prevent=""
          v-on:dragover.prevent=""
          v-on:dragenter.prevent=""
          v-on:drop.prevent='onFileChange'
        )
        p(v-show='!uploaded') 画像をドロップするか、クリックしてファイルを選択
        img(
          v-show='uploaded'
          :src='image'
        )
        input.imageUpload(
          type='file'
          v-on:change='onFileChange'
          accept='image/*'
        )
</template>

<script lang='ts'>
import uuid from 'uuid'
import {
  mapState,
  mapActions
} from 'vuex'

import storage from '@fire/utils/storage'
import database from '@fire/utils/database'
import MutationTypes from '@store/mutationTypes'

export default {
  props: ['index'],
  data () {
    return {
      image: '',
      uploaded: false,
    }
  },
  methods: {
    ...mapActions(['updateStatus']),
    onFileChange (e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return
      this.createImage(files[0])
    },
    createImage (file) {
      const reader = new FileReader()
      reader.onload = e => {
        this.image = e.target.result
      }
      this.uploaded = true
      reader.readAsDataURL(file)

      const extension = file.name.split('.')[file.name.split('.').length - 1]
      const imageUrl = `images/${database.uid()}/${uuid()}.${extension}`

      storage.put(imageUrl, file).then(() => {
        this.updateStatus({
          key: MutationTypes.UPDATES.DETAILS.IMAGE_URL,
          changed: imageUrl,
          index: this.index
        })
      })
    }
  },
  mounted () {
    const imageUrl = this.$store.state[`t${this.index}`].imageUrl
    if (imageUrl) {
      storage.download(imageUrl).then(url => {
        this.image = url
        this.uploaded = true
      })
    }
  }
}
</script>

<style lang="scss">
label.dragArea {
  color: #333;
	background-color: #eee;
	padding: 30px;
	border: dotted 4px #AAAAAA;
  cursor: pointer;

  input.imageUpload {
    display: none;
    height: 100px;
    width: 400px;
    border: dotted 3px #ddd;
  }

  img {
    height: 300px;
    width: auto;
  }
}
</style>
