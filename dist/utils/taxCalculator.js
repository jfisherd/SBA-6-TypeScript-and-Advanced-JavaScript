import { Product } from '../models/Product.js';
export function calculateTax(product) {
    if (product.category === 'groceries') {
        return product.price * 3 / 100;
    }
    else {
        return product.price * 4.75 / 100;
    }
}
//# sourceMappingURL=taxCalculator.js.map