<template lang="pug">
  .form
    b-form-group(
      label='画像'
    )
      label.dragArea(
          @dragleave.prevent=""
          @dragover.prevent=""
          @dragenter.prevent=""
          @drop.prevent="uploadImage"
        )
        p(v-show='!(uploading)') 画像をドロップするか、クリックしてファイルを選択
        img(
          v-show='uploading'
          v-on:src='uploadedImage'
        )
        input.imageUpload(
          type='file'
          v-on:change='uploadImage'
          accept='image/*'
        )
</template>

<script lang='ts'>
export default {
  props: ['index'],
  data () {
    return {
      uploadedImage: '',
      uploading: false
    }
  },
  methods:{
    uploadImage (e) {
      const files = e.target.files || e.dataTransfer.files
      this.createImage(files[0])
      this.uploading = true
    },
    createImage (file) {
      const reader = new FileReader()
      reader.onload = e => {
        this.uploadedImage = e.target.result
      }
      reader.readAsDataURL(file)
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
