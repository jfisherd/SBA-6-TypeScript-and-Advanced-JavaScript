import { calculateDiscount } from "../utils/discountCalculator.js";
import { calculateTax } from "../utils/taxCalculator.js";
export class Product {
    id;
    title;
    description;
    category;
    price;
    discountPercentage;
    // stock: number;
    // tags: [];
    sku;
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
    constructor(id, title, description, category, price, discountPercentage, sku) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = Number(price.toFixed(2));
        this.discountPercentage = discountPercentage;
        this.sku = sku;
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
            Your Savings: $${this.price - this.getPriceWithDiscount()}
            Tax: $${this.price - this.getPriceWithTax()}
            Final Price: $${this.getPriceWithTax}
            `);
    }
    getPriceWithDiscount() {
        return this.price - calculateDiscount(this);
    }
    getPriceWithTax() {
        return this.getPriceWithDiscount() + calculateTax(this);
    }
}
//# sourceMappingURL=Product.js.map