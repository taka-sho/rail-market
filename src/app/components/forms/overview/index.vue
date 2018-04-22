<template lang='pug'>
  b-container
    h2 出品概要の入力
    .terms
      .inner
        .title
          h3 ゲージ
        .form
          b-form-group
            b-form-radio-group(id='btnradios1' stacked :options='gauge' name='gauge')
    .terms
      .inner
        .title
          h3 品目
        .form
          b-form-group
            b-form-radio-group(id='btnradios2' stacked :options='types' name='types')
    .terms
      .inner
        .title
          h3 模型メーカー
        .form
          b-form-group
            b-form-radio-group(id='btnradios3' stacked :options='maker' name='maker')
    .row
      .terms.col
        .inner
          .title
            h3 鉄道事業者
          .form
            b-form-group
              b-form-radio-group(id='btnradios4' stacked :options='area' v-model="selected" name='area')
        .terms.col(v-show="selected === 'east'")
          .inner
            .form
              b-form-group
                b-form-radio-group(id='btnradios4_1' stacked :options='eastJapan' name='company')
        .terms.col(v-show="selected === 'west'")
          .inner
            .form
              b-form-group
                b-form-radio-group(id='btnradios4_2' stacked :options='westJapan' name='company')
        .terms.col(v-show="selected === 'other'")
          .inner
            .form
              b-form-group
                input(placeholder='鉄道事業者名')
        .terms.col
          .inner
            .title
              h3 車両形式
            .form
              b-form-group
                input(placeholder='車両形式（例：3000系, 100形')
</template>

<script lang='ts'>
export default {
  data () {
   return {
     gauge: [
       { text: 'Nゲージ', value: 'radio1-1' },
       { text: '16番ゲージ', value: 'radio1-2' }
     ],
     types: [
       {text: '車両セット', value: 'radio2-1'},
       {text: '車両単品', value: 'radio2-2'},
       {text: 'パーツ類', value: 'radio2-3'},
       {text: 'ステッカー・インレタ・デカール', value: 'radio2-4'},
       {text: '車両ケース', value: 'radio2-5'},
       {text: 'ストラクチャー', value: 'radio2-6'}
     ],
     maker: [
       {text: "カトー<span class='exact'>(KATO)</span>", value: 'radio3-1'},
       {text: "トミックス<span class='exact'>(TOMIX)</span>", value: 'radio3-2'},
       {text: "グリーンマックス<span class='exact'>(GREENMAX)</span>", value: 'radio3-3'},
       {text: 'カツミ(KTM)', value: 'radio3-4'},
       {text: 'エンドウ(ENDO)', value: 'radio3-5'},
       {text: '天賞堂(Tenshodo)', value: 'radio3-6'},
       {text: 'その他', value: 'radio3-7'}
     ],
     selected: '',
     area: [
       {text: '国鉄・JR', value: 'jr'},
       {text: '大手関東私鉄', value: 'east'},
       {text: '大手西日本私鉄', value: 'west'},
       {text: 'その他', value: 'other'}
     ],
     eastJapan: [
       {text: '小田急(小田急電鉄株式会社)', value: ''},
       {text: '京王(京王電鉄株式会社)', value: ''},
       {text: '形成(形成電鉄株式会社)', value: ''},
       {text: '京急(京浜急行電鉄株式会社)', value: ''},
       {text: '西武(西武鉄道株式会社)', value: ''},
       {text: '東急(東京急行電鉄株式会社)', value: ''},
       {text: '東京メトロ(東京地下鉄株式会社)', value: ''},
       {text: '東武(東武鉄道株式会社)', value: ''},
       {text: '都営(東京都交通局)', value: ''}
     ],
     westJapan: [
       {text: '近鉄(近畿日本鉄道株式会社)', value: ''},
       {text: '京阪(京阪電気鉄道株式会社)', value: ''},
       {text: '南海(南海電気鉄道株式会社)', value: ''},
       {text: '西鉄(西日本鉄道株式会社)', value: ''},
       {text: '阪神(阪神電気鉄道株式会社)', value: ''},
       {text: '阪急(阪急電鉄株式会社)', value: ''},
       {text: '名鉄(名古屋鉄道株式会社)', value: ''}
     ]
   }
 }
}
</script>

<style lang='scss'>
.terms {
  margin-bottom: 15px;

  .inner {
    border-bottom: solid 1px #ccc;

    span.exact {
      color: #999;
    }
  }
}
</style>
