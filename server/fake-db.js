const Product = require('./model/products')
class FakeDB {

  constructor() {
    this.products = [
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heding1: 'SampleText1',
        heding2: 'SampleText2',
        heding3: 'SampleText3',
        hedingtext1: 'SamplePragraph1',
        hedingtext2: 'SamplePragraph2',
        hedingtext3: 'SamplePragraph3',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heding1: 'SampleText1',
        heding2: 'SampleText2',
        heding3: 'SampleText3',
        hedingtext1: 'SamplePragraph1',
        hedingtext2: 'SamplePragraph2',
        hedingtext3: 'SamplePragraph3',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Standard',
        price: 299,
        description: '',
        heding1: 'SampleText1',
        heding2: 'SampleText2',
        heding3: 'SampleText3',
        hedingtext1: 'SamplePragraph1',
        hedingtext2: 'SamplePragraph2',
        hedingtext3: 'SamplePragraph3',
      }
    ]
  }

  async initDb() {
    await this.cleanDb()
    this.pushProductsToDb()
  }

  async cleanDb() {
    await Product.deleteMany({})
  }

  pushProductsToDb() {
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product)
        newProduct.save()
      }
    )
  }

  seeDb() {
    this.pushProductsToDb()
  }
}

module.exports = FakeDB;
