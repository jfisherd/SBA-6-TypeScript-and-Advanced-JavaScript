import { Product } from "../models/Product.js"
import { NetworkError } from "../utils/errorHandler.js"
import { DataError } from "../utils/errorHandler.js"

export const contactApi = () => {
    let fetchProductData = async (): Promise<Product[] | Error> => {
        try {
            let productArray: Product[] = []

            let response = await fetch('https://dummyjson.com/products')

            if (!response.ok) {
                throw new NetworkError('Failed to receive a response from the API')
            }

            let data = await response.json()
            let objectArray = data.products

            for (let i = 0; i < objectArray.length; i++) {
                productArray[i] = new Product(
                    objectArray[i].id,
                    objectArray[i].title,
                    objectArray[i].description,
                    objectArray[i].category,
                    objectArray[i].price,
                    objectArray[i].discountPercentage,
                    objectArray[i].sku
                )
            }

            return productArray
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
}

