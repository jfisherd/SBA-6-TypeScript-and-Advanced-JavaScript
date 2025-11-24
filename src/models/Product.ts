import { calculateDiscount } from "../utils/discountCalculator.js";
import { calculateTax } from "../utils/taxCalculator.js";

export class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    // stock: number;
    // tags: [];
    sku: string;
    // weight: number;
    // dimensions: object;
    // warrantyInformation: string;
    // shippingInformation: string;
    // availabilityStatus: string;
    // reviews: [];
    // returnPolicy: string;
    // minimumOrderQuantity: number;
    // meta: object;
    // images: [];
    // thumbnail: string;

    constructor(id: number, title: string, description: string, category: string, price: number, discountPercentage: number, sku: string) {
        this.id = NaN;
        this.title = 'NaN';
        this.description = 'NaN';
        this.category = 'NaN';
        this.price = NaN;
        this.discountPercentage = NaN;
        this.sku = 'NaN';
    }

    displayDetails() {
        console.log(`
            Item: ${this.title}
            Item ID: ${this.id}
            Item SKU: ${this.sku}
            Description: ${this.description}
            Category: ${this.category}
            Retail Price ($): ${this.price}
            Your Price: $${this.getPriceWithDiscount()}(-${this.discountPercentage}%)
            Your Savings: $${this.price-this.getPriceWithDiscount()}
            Tax: $${this.price-this.getPriceWithTax()}
            Final Price: $${this.getPriceWithTax}
            `)
    }

    getPriceWithDiscount() {
        return this.price - calculateDiscount(this)
    }

    getPriceWithTax() {
        return this.getPriceWithDiscount() + calculateTax(this)
    }
}

