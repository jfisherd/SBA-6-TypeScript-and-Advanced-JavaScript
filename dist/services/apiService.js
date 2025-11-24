import { Product } from "../models/Product.js";
import { NetworkError } from "../utils/errorHandler.js";
import { DataError } from "../utils/errorHandler.js";
// import { productArray } from "../main.js"
export const contactApi = async () => {
    let productArray = [];
    try {
        let response = await fetch('https://dummyjson.com/products/');
        if (!response.ok) {
            throw new NetworkError('Failed to receive a response from the API');
        }
        let data = await response.json();
        let objectArray = data.products;
        // console.log(objectArray)
        for (let i = 0; i < objectArray.length; i++) {
            productArray[i] = new Product(objectArray[i].id, objectArray[i].title, objectArray[i].description, objectArray[i].category, objectArray[i].price, objectArray[i].discountPercentage, objectArray[i].sku);
            // productArray[i]?.displayDetails()
        }
    }
    catch (error) {
        if (error instanceof DataError) {
            console.error('A data error has occurred: ', error);
        }
        else if (error instanceof NetworkError) {
            console.error('A network error has occurred: ', error);
        }
        else {
            console.error('An unexpected has occurred: ', error);
        }
    }
    finally {
        return productArray;
    }
};
//# sourceMappingURL=apiService.js.map