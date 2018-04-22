<template lang="pug">
  b-container
    h2 出品物の状態
    .terms
      .inner
        .title
          h3 両数
        .form
          b-form-group
            input(type='number' min='1' max='20' v-model='cars' placeholder='1~20' required)
    .terms(v-for='(i, index) in Number(cars)').cars
      .inner
        .title
          h2 {{ i }}両目
      .form
        b-form-group(label='ヘッドライト・テールライト')
          b-form-radio-group(:id="'head' + index" :options='headAndTail' :name="'head' + index" v-model='f0')
      .form
        b-form-group(label='走行状態')
          b-form-radio-group(:id="'running' + index" :options='running' :name="'running' + index" v-model='f1')
      .form
        b-form-group(label='カプラー')
          b-form-radio-group(:id="'coupler' + index" :options='coupler' :name="'coupler' + index" v-model='f2')
      .form
        b-form-group(label='パンタグラフ')
          b-form-radio-group(:id="'pantograph' + index" :options='pantograph' :name="'pantograph' + index" v-model='f3')
      .form
        b-form-group(label='付属品')
          b-form-radio-group(:id="'options' + index" :options='options' :name="'options' + index" v-model='f4')
      .form
        b-form-group(label='画像')
          label.uploadTitle(@drop.prevent="onDrop")
            p(v-show='!uploadedImage') 画像をドロップするか、クリックしてファイルを選択
            img(v-show='uploadedImage' :src='uploadedImage')
            input.imageUpload(v-show='!uploadedImage' type='file' v-on:change='onFileChange')
    router-link(to='delivery') 配送方法へ
</template>

<script lang='ts'>
export default {
  data () {
    return {
      f0: '0',
      f1: '0',
      f2: '0',
      f3: '0',
      f4: '0',
      f5: '0',
      f6: '0',
      cars: '1',
      headAndTail: [
        {text: 'なし', value: '0'},
        {text: '点灯しない', value: '1'},
        {text: '一部難あり', value: '2'},
        {text: '正常に点灯する', value: '3'}
      ],
      running: [
        {text: 'モーターなし', value: '0'},
        {text: '走り始めからスムーズ', value: '1'},
        {text: '一定速度以上はスムーズ', value: '2'},
        {text: 'スムーズに走らない', value: '3'},
        {text: '全く走らない', value: '4'},
        {text: '異音がする', value: '5'}
      ],
      coupler: [
        {text: 'なし', value: '0'},
        {text: 'アーノルト', value: '1'},
        {text: 'KATOカプラーフック付', value: '2'},
        {text: 'KATOカプラーフック無', value: '3'},
        {text: 'TNカプラー'}
      ],
      pantograph: [
        {text: 'なし', value: '0'},
        {text: '正常', value: '1'},
        {text: '破損', value: '2'},
      ],
      options: [
        {text: '完品', value: '0'},
        {text: '取り付け済み', value: '1'},
        {text: '欠品', value: '2'}
      ],
      uploadedImage: ''
    }
  },
  methods:{
    onFileChange: function (e) {
      let files = e.target.files || e.dataTransfer.files
      this.createImage(files[0])
    },
    createImage(file) {
      let reader = new FileReader()
      reader.onload = (e) => {
        this.uploadedImage = e.target.result
      };
      reader.readAsDataURL(file)
    }
  }
}
</script>

<style lang="scss">
.cars {
  margin-bottom: 15px;
  border-bottom: solid 1px #ccc;

  .form {
    margin-bottom: 10px;
  }
}

label.uploadTitle {
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
