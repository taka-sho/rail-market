<template lang="pug">
  div
    b-row
      b-col.terms
        .inner
          .title
            h3 鉄道事業者
          .form
            b-form-group
              b-form-radio-group(id='btnradios4' stacked :options='area' v-model="selected" name='area')
      b-col.terms(v-show="selected === 'east'")
        .inner
          .form
            b-form-group
              b-form-radio-group(id='btnradios4_1' stacked :options='eastJapan' name='company')
      b-col.terms(v-if="selected === 'west'")
        .inner
          .form
            b-form-group
              b-form-radio-group(id='btnradios4_2' stacked :options='westJapan' name='company')
      b-col.terms(v-if="selected === 'other'")
        .inner
          .form
            b-form-group
              input(placeholder='鉄道事業者名')
    .terms
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
      selected: 'jr',
      area: [
        {text: '国鉄・JR', value: 'jr'},
        {text: '大手関東私鉄', value: 'east'},
        {text: '大手西日本私鉄', value: 'west'},
        {text: 'その他', value: 'other'}
      ],
      eastJapan: [
        {text: '小田急(小田急電鉄株式会社)', value: 'odakyu'},
        {text: '京王(京王電鉄株式会社)', value: 'keio'},
        {text: '形成(形成電鉄株式会社)', value: 'keisei'},
        {text: '京急(京浜急行電鉄株式会社)', value: 'keikyu'},
        {text: '西武(西武鉄道株式会社)', value: 'seibu'},
        {text: '東急(東京急行電鉄株式会社)', value: 'tokyu'},
        {text: '東京メトロ(東京地下鉄株式会社)', value: 'metro'},
        {text: '東武(東武鉄道株式会社)', value: 'tobu'},
        {text: '都営(東京都交通局)', value: 'toei'}
      ],
      westJapan: [
        {text: '近鉄(近畿日本鉄道株式会社)', value: 'kintetsu'},
        {text: '京阪(京阪電気鉄道株式会社)', value: 'keihan'},
        {text: '南海(南海電気鉄道株式会社)', value: 'nankai'},
        {text: '西鉄(西日本鉄道株式会社)', value: 'nisitetsu'},
        {text: '阪神(阪神電気鉄道株式会社)', value: 'hanshin'},
        {text: '阪急(阪急電鉄株式会社)', value: 'hankyu'},
        {text: '名鉄(名古屋鉄道株式会社)', value: 'meitetsu'}
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
