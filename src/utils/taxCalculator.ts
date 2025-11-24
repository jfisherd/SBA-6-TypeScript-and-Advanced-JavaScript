import { Product } from '../models/Product.js'

export function calculateTax(product: Product): number {
    if (product.category === 'groceries') {
        return product.price * 3/100 // 3.00% tax 
    }
    else {
        return product.price * 4.75/100 // 4.75% tax
    } 
}