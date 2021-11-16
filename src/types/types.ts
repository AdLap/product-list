interface Product {
    readonly name: string;
    vatRate: number;
    buyPrice: number;
    sellPrice: number;
    readonly id: number;
}

export default Product