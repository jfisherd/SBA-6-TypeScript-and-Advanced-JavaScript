import { Product } from './models/Product.js';
import { contactApi } from './services/apiService.js';
import { calculateTax } from './utils/taxCalculator.js'; // used in Product.ts, not here
let receivedProductArray = await contactApi(); // makes an array of products received from the api
for (let i = 0; i < receivedProductArray.length; i++) {
    console.log(receivedProductArray[i]?.displayDetails()); // displays product details, if the method exists
}
//# sourceMappingURL=main.js.map