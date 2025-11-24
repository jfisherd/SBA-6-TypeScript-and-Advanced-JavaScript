import { Product } from './models/Product.js'
import { DataError } from './utils/errorHandler.js'
import { NetworkError } from './utils/errorHandler.js'

// constructor(id: number, title: string, description: string, category: string, price: number, discountPercentage: number, sku: string)
let testBanana = new Product(123, 'testBanana', 'A test banana ripe for testing', 'groceries', 100, 10, 'B A N A N A S')
let testAnA = new Product(123, 'testA', 'A vowel available for purchase', 'vowels', 250, 2, 'An A, please')

let myProductArray: Product[] = []

fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
        let myObjectArray = data.products

        for (let i = 0; i < myObjectArray.length; i++) {
            myProductArray[i] = new Product(
                myObjectArray[i].id,
                myObjectArray[i].title,
                myObjectArray[i].description,
                myObjectArray[i].category,
                myObjectArray[i].price,
                myObjectArray[i].discountPercentage,
                myObjectArray[i].sku
            )
        }
    })
    .catch(error => {
        if (error instanceof DataError) {
            console.error('A data eror has occurred: ', error)
        } else if (error instanceof NetworkError) {
            console.error('A data eror has occurred: ', error)
        } else {
            console.error('An unexpected has occurred: ', error)
        }
    })

for (let i = 0; i < myProductArray.length; i++) {}





