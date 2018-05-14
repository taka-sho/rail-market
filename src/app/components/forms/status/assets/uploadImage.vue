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
          v-on:src='uploadedImage'
        )
        input.imageUpload(
          type='file'
          v-on:change='onFileChange'
          accept='image/*'
        )
</template>

<script lang='ts'>
export default {
  props: ['index'],
  data () {
    return {
      uploadedImage: '',
      uploaded: false
    }
  },
  methods:{
    onFileChange (e) {
      const files = e.target.files || e.dataTransfer.files
      this.createImage(files[0])
      this.uploaded = true
    },
    createImage (file) {
      const reader = new FileReader()
      reader.onload = e => {
        this.uploadedImage = e.target.result
        console.log(this.uploadedImage)
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
