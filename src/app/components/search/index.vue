<template lang='pug'>
  b-container
    h1 検索
    div(v-for='(value, key) in products')
      p {{ key }}
    .form
      b-form-group
        b-form-radio-group(
          name='gauge'
          :options='formGauge'
          v-model='valGauge'
          stacked
        )
    .form
      b-form-group
        b-form-radio-group(
          id='btnradios3'
          name='maker'
          :options='formMaker'
          v-model='valMaker'
          stacked
        )
    b-row.inner
      .form
        b-form-group
      b-col
        b-form-radio-group(
          id='btnradios4'
          stacked
          :options='area'
          v-model="companyNum"
          name='area'
        )
      b-col.form(v-if="companyNum === '1'")
        b-form-group
          b-form-radio-group(
            id='btnradios4_1'
            stacked
            :options='eastJapan'
            v-model="companyNum"
            name='company'
          )
      b-col.form(v-if="companyNum === '2'")
        b-form-group
          b-form-radio-group(
            id='btnradios4_2'
            stacked
            :options='westJapan'
            v-model="companyNum"
            name='company'
          )
      b-col.form(v-if="companyNum === '3'")
        b-form-group
          input(
            placeholder='鉄道事業者名'
            v-model='companyName'
          )
    .form
      b-form-group
        b-button(
          type='submit'
          variant='primary'
          v-on:click='search'
        ) Search
    ul
      li(v-for='(value, key) in d')
        b-button(
          type='button'
        ) {{ key }}
</template>

<script lang='ts'>
import search from '@fire/utils/search'

export default {
  data () {
    return {
      d: {},
      keywords: '',
      valGauge: 'all',
      valMaker: 'all',
      companyArea: 'all',
      companyNum: 'all',
      companyName: 'all',
      products: {},
      formGauge: [
        { text: '全て', value: 'all' },
        { text: 'Nゲージ', value: '0' },
        { text: '16番ゲージ', value: '1' }
      ],
      formMaker: [
        {text: '全て', value: 'all'},
        {text: "カトー<span class='exact'>(KATO)</span>", value: '0'},
        {text: "トミックス<span class='exact'>(TOMIX)</span>", value: '1'},
        {text: "グリーンマックス<span class='exact'>(GREENMAX)</span>", value: '2'},
        {text: "カツミ<span class='exact'>(KTM)</span>", value: '3'},
        {text: "エンドウ<span class='exact'>(ENDO)</span>", value: '4'},
        {text: "天賞堂<span class='exact'>(Tenshodo)</span>", value: '5'},
        {text: 'その他', value: '6'}
      ],
      area: [
        {text: '全て', value: 'all'},
        {text: '国鉄・JR', value: '0'},
        {text: '大手関東私鉄', value: '1'},
        {text: '大手西日本私鉄', value: '2'},
        {text: 'その他', value: 'other'}
      ],
      eastJapan: [
        {text: '全て', value: 'all'},
        {text: '小田急(小田急電鉄株式会社)', value: '00'},
        {text: '京王(京王電鉄株式会社)', value: '01'},
        {text: '形成(形成電鉄株式会社)', value: '02'},
        {text: '京急(京浜急行電鉄株式会社)', value: '03'},
        {text: '西武(西武鉄道株式会社)', value: '04'},
        {text: '東急(東京急行電鉄株式会社)', value: '05'},
        {text: '東京メトロ(東京地下鉄株式会社)', value: '06'},
        {text: '東武(東武鉄道株式会社)', value: '07'},
        {text: '都営(東京都交通局)', value: '08'}
      ],
      westJapan: [
        {text: '全て', value: 'all'},
        {text: '近鉄(近畿日本鉄道株式会社)', value: '11'},
        {text: '京阪(京阪電気鉄道株式会社)', value: '12'},
        {text: '南海(南海電気鉄道株式会社)', value: '13'},
        {text: '西鉄(西日本鉄道株式会社)', value: '14'},
        {text: '阪神(阪神電気鉄道株式会社)', value: '15'},
        {text: '阪急(阪急電鉄株式会社)', value: '16'},
        {text: '名鉄(名古屋鉄道株式会社)', value: '17'}
      ]
    }
  },
  methods: {
    search () {
      search.s({
        gauge: this.valGauge,
        maker: this.valMaker,
        company: this.companyNum
      }).then(d => {
        this.d = d
      })
    }
  },
  mounted () {
  }
}
</script>

<style lang='scss'>
</style>
