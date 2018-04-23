<template lang="pug">
  .form
    b-form-group(label='画像')
      label.uploadTitle(@drop.prvent="onDrop")
        p(v-show='!(uploadedImage)') 画像をドロップするか、クリックしてファイルを選択
        img(v-show='uploadedImage' :src='uploadedImage')
        input.imageUpload(type='file' v-on:change='onFileChange')
</template>

<script lang='ts'>
export default {
  props: ['index'],
  data () {
    return {
      uploadedImage: ''
    }
  },
  methods:{
    onFileChange: function (e) {
      const files = e.target.files || e.dataTransfer.files
      this.createImage(files[0])
    },
    createImage: function (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.uploadedImage = e.target.result
      };
      reader.readAsDataURL(file)
    }
  }
}
</script>

<style lang="scss">
</style>
