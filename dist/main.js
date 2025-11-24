import { Product } from './models/Product.js'; // used elsewhere, not here
import { contactApi } from './services/apiService.js';
import { calculateTax } from './utils/taxCalculator.js'; // used in Product.ts, not here
let receivedProductArray = await contactApi(); // makes an array of products received from the api
for (let i = 0; i < receivedProductArray.length; i++) { // simply displays the products fetched from the api, displayDetails() not calling correctly
    // console.log(receivedProductArray[i])
    // console.log(receivedProductArray[i].displayDetails())    // object is possibly undefined
    console.log(receivedProductArray[i]?.displayDetails()); // .displayDetails() itself is shown
}
//# sourceMappingURL=main.js.map