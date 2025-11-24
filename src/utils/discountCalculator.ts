import { Product } from '../models/Product.js'

export function calculateDiscount(product: Product): number {
    let discount = product.price * product.discountPercentage/100
    return parseFloat(discount.toFixed(2))
}

