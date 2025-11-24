import { Product } from './models/Product.js'
import { contactApi } from './services/apiService.js'
import { calculateTax } from './utils/taxCalculator.js' // Used in Product.ts, not here

let receivedProductArray = await contactApi()

for (let i = 0; i < receivedProductArray.length; i++) { // This example and the related fetch request are hard coded for 30 items
    console.log(receivedProductArray[i])
}