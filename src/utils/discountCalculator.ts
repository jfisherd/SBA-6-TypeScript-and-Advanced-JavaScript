import { Product } from '../models/Product.js'

export function calculateDiscount(product: Product): number {
    return product.price * discountPercentage

}