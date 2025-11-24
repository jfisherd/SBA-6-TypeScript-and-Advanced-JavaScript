

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

    }

    getPriceWithDiscount() {

    }
}

