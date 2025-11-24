export declare class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    sku: string;
    constructor(id: number, title: string, description: string, category: string, price: number, discountPercentage: number, sku: string);
    displayDetails(): void;
    getPriceWithDiscount(): number;
    getPriceWithTax(): number;
}
//# sourceMappingURL=Product.d.ts.map