import { Product } from './models/Product.js' // Used elsewhere, not here
import { contactApi } from './services/apiService.js'
import { calculateTax } from './utils/taxCalculator.js' // Used in Product.ts, not here

let receivedProductArray = await contactApi() // Makes an array of products received from the api

for (let i = 0; i < receivedProductArray.length; i++) { 
    console.log(receivedProductArray[i])
}