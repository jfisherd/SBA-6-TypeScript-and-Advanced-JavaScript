import { Product } from "../models/Product.js"
import { NetworkError } from "../utils/errorHandler.js"
import { DataError } from "../utils/errorHandler.js"

export const contactApi = async (): Promise<Product[]> => {
    let productArray: Product[] = [] // initialize the empty array to be returned
    try {
        let response = await fetch('https://dummyjson.com/products/') // request the api

        if (!response.ok) { // network error condition
            throw new NetworkError('Failed to receive a response from the API') 
        }

        if (Math.random()<0.2) {
            throw new NetworkError('Failed to receive a response from the API') // throw a random NetworkError to debug
        }

        if (Math.random()<0.2) {
            throw new DataError('A data error has occurred, invalid value') // throw a random NetworkError to debug
        }

        if (Math.random()<0.2) {
            throw new Error('An unexpected error has occurred') // throw a random NetworkError to debug
        }
        

        let data = await response.json()
        let objectArray = data.products // the array of objects from the api

        for (let i = 0; i < objectArray.length; i++) {
            if (objectArray[i].price < 0 || objectArray[i].discountPercentage < 0 || objectArray[i].discountPercentage >= 100) {  // data error condition
                throw new DataError('Data must have value greater than 0')
            }
            productArray[i] = new Product( // construct a new array of Product objects
                objectArray[i].id,
                objectArray[i].title,
                objectArray[i].description,
                objectArray[i].category,
                objectArray[i].price,
                objectArray[i].discountPercentage,
                objectArray[i].sku
            )
        }
    }
    catch (error) {
        if (error instanceof DataError) {
            console.error('A data error has occurred: ', error)
        } else if (error instanceof NetworkError) {
            console.error('A network error has occurred: ', error)
        } else {
            console.error('An unexpected has occurred: ', error)
        }
    }
    finally {
        return productArray
    }
}


