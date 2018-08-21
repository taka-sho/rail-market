<template lang="pug">
b-container
  h2 発送方法
  .terms
    .form
      b-form-group(label='発送会社')
        b-form-radio-group(
          id='head'
          :options='deliverWay'
          v-model='valDeliverCompany'
          v-on:change='updateCompany'
        )
      b-form-group(v-show="deliverCompany === '3'")
        input(
          type='text'
          placeholder='発送会社名'
          v-model='valDeliverCompanyName'
          v-on:change='updateCompanyName'
          required
        )
    .form
      b-form-group(label='発送料目安')
        input(
          type='number'
          step='100'
          v-model='valDeliverValue'
          v-on:change='updateValue'
          placeholder='目安を書いてください'
          required
        )
    b-button(
      type="button"
      variant="primary"
      v-on:click='pushFire'
    ) 出品
</template>

<script lang='ts'>
import {
  mapActions,
  mapState
} from 'vuex'
import MutationTypes from '@store/mutationTypes'
import database from '@fire/utils/database'

export default {
  data () {
    return {
      valDeliverCompany: '0',
      valDeliverCompanyName: '',
      valDeliverValue: 0,
      deliverWay: [
        {text: '宅急便', value: '0'},
        {text: 'ゆうパック', value: '1'},
        {text: '普通・定形外郵便', value: '2'},
        {text: 'その他', value: '3'},
      ]
    }
  },
  computed: mapState([
    'deliverCompany',
    'deliverCompanyName',
    'deliverValue'
  ]),
  methods: {
    ...mapActions(['updateDelivery']),
    updateCompany (e) {
      this.updateDelivery({
        key: MutationTypes.UPDATES.DELIVER.COMPANY,
        changed: e
      })
    },
    updateCompanyName (e) {
      this.updateDelivery({
        key: MutationTypes.UPDATES.DELIVER.NAME,
        changed: e.target.value
      })
    },
    updateValue (e) {
      this.updateDelivery({
        key: MutationTypes.UPDATES.DELIVER.VALUE,
        changed: e.target.value
      })
    },
    pushFire () {
      database.set(
        `products/${database.uid()}/${this.$route.params.id}`,
        this.$store.state
      ).then(() => {
        this.$router.push('/mypage')
      }).catch(err => {
        throw new Error(err.message)
      })
    }
  },
  mounted () {
    this.valDeliverCompany = this.deliverCompany
    this.valDeliverCompanyName = this.deliverCompanyName
    this.valDeliverValue = this.deliverValue
  }
}
</script>

<style lang="scss">
</style>
