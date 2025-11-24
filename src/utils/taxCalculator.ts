
import { Product } from '../models/Product.js'

export function calculateTax(product: Product): number {
    if (product.category === 'groceries') {
        let taxGrocery = product.price * 3/100
        return parseFloat(taxGrocery.toFixed(2))
    }
    else {
        let taxNotGrocery = product.price * 4.75/100
        return parseFloat(taxNotGrocery.toFixed(2))
    } 
}