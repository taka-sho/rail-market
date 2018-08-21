interface Detail {
  coupler: string
  lights: string
  options: string
  pantograph: string
  running: string
  imageUrl: string
}

interface UserInfo {
  username: string
  familyName: string
  underName: string
  prefecture: string
  address: string
  buildingName: string
  point: number
  cart: object
}

export class State {
  constructor (uid: string) {
    this.ownerUid = uid
  }
  ownerUid: string
  sellingStatus: string = 'selling'
  buyerUid: string = ''

  gauge: string = '0'
  maker: string = '0'
  makerName: string = ''
  productType: string='0'
  railwayCompanyArea: string = 'jr'
  railwayCompanyNum: string = '00'
  railwayCompanyName: string = ''
  series: string = ''
  productValue: number = 2000
  numberOf: number = 0
  deliverCompany: string = ''
  deliverCompanyName: string = ''
  deliverValue: number = 0

  userInfo: UserInfo = {
    username: '',
    familyName: '',
    underName: '',
    prefecture: '',
    address: '',
    buildingName: '',
    point: 0,
    cart: {}
  }

  t0: Detail = {
    coupler: '0',
    lights: '0',
    options: '0',
    pantograph: '0',
    running: '0',
    imageUrl: ''
  }
  t1: Detail = {
    coupler: '0',
    lights: '0',
    options: '0',
    pantograph: '0',
    running: '0',
    imageUrl: ''
  }
  t2: Detail = {
    coupler: '0',
    lights: '0',
    options: '0',
    pantograph: '0',
    running: '0',
    imageUrl: ''
  }
  t3: Detail = {
    coupler: '0',
    lights: '0',
    options: '0',
    pantograph: '0',
    running: '0',
    imageUrl: ''
  }
  t4: Detail = {
    coupler: '0',
    lights: '0',
    options: '0',
    pantograph: '0',
    running: '0',
    imageUrl: ''
  }
  t5: Detail = {
    coupler: '0',
    lights: '0',
    options: '0',
    pantograph: '0',
    running: '0',
    imageUrl: ''
  }
  t6: Detail = {
    coupler: '0',
    lights: '0',
    options: '0',
    pantograph: '0',
    running: '0',
    imageUrl: ''
  }
  t7: Detail = {
    coupler: '0',
    lights: '0',
    options: '0',
    pantograph: '0',
    running: '0',
    imageUrl: ''
  }
  t8: Detail = {
    coupler: '0',
    lights: '0',
    options: '0',
    pantograph: '0',
    running: '0',
    imageUrl: ''
  }
  t9: Detail = {
    coupler: '0',
    lights: '0',
    options: '0',
    pantograph: '0',
    running: '0',
    imageUrl: ''
  }
  t10: Detail = {
    coupler: '0',
    lights: '0',
    options: '0',
    pantograph: '0',
    running: '0',
    imageUrl: ''
  }
  t11: Detail = {
    coupler: '0',
    lights: '0',
    options: '0',
    pantograph: '0',
    running: '0',
    imageUrl: ''
  }
  t12: Detail = {
    coupler: '0',
    lights: '0',
    options: '0',
    pantograph: '0',
    running: '0',
    imageUrl: ''
  }
  t13: Detail = {
    coupler: '0',
    lights: '0',
    options: '0',
    pantograph: '0',
    running: '0',
    imageUrl: ''
  }
  t14: Detail = {
    coupler: '0',
    lights: '0',
    options: '0',
    pantograph: '0',
    running: '0',
    imageUrl: ''
  }
  t15: Detail = {
    coupler: '0',
    lights: '0',
    options: '0',
    pantograph: '0',
    running: '0',
    imageUrl: ''
  }
  t16: Detail = {
    coupler: '0',
    lights: '0',
    options: '0',
    pantograph: '0',
    running: '0',
    imageUrl: ''
  }
  t17: Detail = {
    coupler: '0',
    lights: '0',
    options: '0',
    pantograph: '0',
    running: '0',
    imageUrl: ''
  }
  t18: Detail = {
    coupler: '0',
    lights: '0',
    options: '0',
    pantograph: '0',
    running: '0',
    imageUrl: ''
  }
  t19: Detail = {
    coupler: '0',
    lights: '0',
    options: '0',
    pantograph: '0',
    running: '0',
    imageUrl: ''
  }
}

export default State
