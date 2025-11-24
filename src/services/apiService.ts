import { NetworkError } from "../utils/errorHandler.js"
import { DataError } from "../utils/errorHandler.js"

let fetchProductData = async () => {
    return new Promise((resolve, reject) => {
        try {
            // get the data
            // response.ok conditional check
            // resolve() the data if ok

            // fetch('https://dummyjson.com/products')
            // .then(res => res.json())
            // .then(console.log);

        }
        catch (error) {
            if (error instanceof NetworkError) {
                reject()
            }
        }
    })
}


