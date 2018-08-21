import database from './database'

async function readAllProducts (): Promise<any> {
  return database.read('products').then(snapshot => {
    const a = snapshot.val()
    let d = {}
    for (const item in a) {
      for (const i in a[item]) {
        d[i] = a[item][i]
      }
    }
    return d
  })
}

const search = {
  s: async ({ gauge, maker, company }) => {

    const products = await readAllProducts()
    let result: any = {}

    for (const productName in products) {
      const p = products[productName]
      if (gauge === 'all' && maker === 'all' && company === 'all') {
        result = products
      } else if (maker === 'all' && company === 'all') {
        if (gauge === p.gauge) {
          result[productName] = p
        }
      } else if (gauge === 'all' && company === 'all') {
        if (maker === p.maker) {
          result[productName] = p
        }
      } else if (gauge === 'all' && maker === 'all') {
        if (company === p.railwayCompanyNum) {
          result[productName] = p
        }
      } else if (gauge === 'all') {
        if (maker === p.maker && company === p.railwayCompanyNum) {
          result[productName] = p
        }
      } else if (maker === 'all') {
        if (gauge === p.gauge && company === p.railwayCompanyNum) {
          result[productName] = p
        }
      } else if (company === 'all') {
        if (maker === p.maker && gauge === p.gauge) {
          result[productName] = p
        }
      } else {
        if (maker === p.maker && gauge === p.gauge && company === p.railwayCompanyNum) {
          result[productName] = p
        }
      }
    }
    return result
  }
}

export default search
