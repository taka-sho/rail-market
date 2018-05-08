<template lang="pug">
  div
    .terms
      .title
        h3 鉄道事業者
      b-row.inner
        .form
          b-form-group
        b-col
          b-form-radio-group(
            id='btnradios4'
            stacked
            :options='area'
            v-model="companyArea"
            name='area'
          )
        b-col.form(v-if="companyArea === 'east'")
          b-form-group
            b-form-radio-group(
              id='btnradios4_1'
              stacked
              :options='eastJapan'
              v-model="selected"
              v-on:change='updateCompany'
              name='company'
            )
        b-col.form(v-if="companyArea === 'west'")
          b-form-group
            b-form-radio-group(
              id='btnradios4_2'
              stacked
              :options='westJapan'
              v-model="selected"
              v-on:change='updateCompany'
              name='company'
            )
        b-col.form(v-if="companyArea === 'other'")
          b-form-group
            input(
              placeholder='鉄道事業者名'
              v-model='otherCompany'
              v-on:change='updateCompanyInput'
            )
    .terms
      .inner
        .title
          h3 車両形式
        .form
          b-form-group
            input(
              placeholder='車両形式（例：3000系, 100形'
              v-on:change='updateSeries'
              v-model='train'
            )
</template>

<script lang='ts'>
export default {
  methods: {
    updateCompany (e) {
      this.$parent.company = e
    },
    updateCompanyInput (e) {
      this.$parent.company = this.otherCompany
    },
    updateSeries (e) {
      this.$parent.train = this.train
    },
  },
  data () {
    return {
      companyArea: 'jr',
      otherCompany: '',
      train: '',
      selected: this.$store.state.company | 0,
      area: [
        {text: '国鉄・JR', value: 'jr'},
        {text: '大手関東私鉄', value: 'east'},
        {text: '大手西日本私鉄', value: 'west'},
        {text: 'その他', value: 'other'}
      ],
      eastJapan: [
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
        {text: '近鉄(近畿日本鉄道株式会社)', value: '11'},
        {text: '京阪(京阪電気鉄道株式会社)', value: '12'},
        {text: '南海(南海電気鉄道株式会社)', value: '13'},
        {text: '西鉄(西日本鉄道株式会社)', value: '14'},
        {text: '阪神(阪神電気鉄道株式会社)', value: '15'},
        {text: '阪急(阪急電鉄株式会社)', value: '16'},
        {text: '名鉄(名古屋鉄道株式会社)', value: '17'}
      ]
    }
  }
}
</script>

<style lang="scss">
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
