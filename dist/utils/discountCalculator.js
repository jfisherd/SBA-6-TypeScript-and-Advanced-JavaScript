import { Product } from '../models/Product.js';
export function calculateDiscount(product) {
    let discount = product.price * product.discountPercentage / 100;
    return parseFloat(discount.toFixed(2));
}
//# sourceMappingURL=discountCalculator.js.map