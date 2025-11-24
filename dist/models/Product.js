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
        return `
        Item: ${this.title}
        Item ID: ${this.id}
        Item SKU: ${this.sku}
        
        Category: ${this.category}
        
        Description: ${this.description}

        Retail Price ($):   $${Math.round(this.price * 100) / 100}
        Your Price:         $${Math.round(this.getPriceWithDiscount() * 100) / 100}(-${this.discountPercentage}%)
        Your Savings:       $${Math.round((this.price - this.getPriceWithDiscount()) * 100) / 100}
        Tax:                $${Math.round((this.price - this.getPriceWithTax()) * 100) / 100}
        Final Price:        $${Math.round(this.getPriceWithTax() * 100) / 100}
        
        
        `;
    }
    getPriceWithDiscount() {
        return this.price - calculateDiscount(this);
    }
    getPriceWithTax() {
        return this.getPriceWithDiscount() + calculateTax(this);
    }
}
//# sourceMappingURL=Product.js.map