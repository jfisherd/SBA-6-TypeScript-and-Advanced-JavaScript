import { Product } from './models/Product.js'
import { DataError } from './utils/errorHandler.js'
import { NetworkError } from './utils/errorHandler.js'

// constructor(id: number, title: string, description: string, category: string, price: number, discountPercentage: number, sku: string)
let testBanana = new Product(123, 'testBanana', 'A test banana ripe for testing', 'groceries', 100, 10, 'B A N A N A S')
let testAnA = new Product(123, 'testA', 'A vowel available for purchase', 'vowels', 250, 2, 'An A, please')




