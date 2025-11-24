import { Product } from "../models/Product.js"
import { NetworkError } from "../utils/errorHandler.js"
import { DataError } from "../utils/errorHandler.js"

let fetchProductData = async (): Promise<Product[]|Error> => {
    try {
        let myProductArray: Product[] = []

        let myResponse = await fetch('https://dummyjson.com/products')

        if (!myResponse.ok) {
            throw new NetworkError('Failed to receive a response from the API')
        }

        let data = await myResponse.json()
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

        return myProductArray
    }
    catch (error) {
        if (error instanceof DataError) {
            console.error('A data error has occurred: ', error)
        } else if (error instanceof NetworkError) {
            console.error('A data error has occurred: ', error)
        } else {
            console.error('An unexpected has occurred: ', error)
        }
        return new Error('error')
    }
}


