interface Product {
    readonly name: string;
    checked: boolean;
    vatRate: number;
    buyPrice: number;
    sellPrice: number;
    tradeMargin: number;
    readonly id: number;
}

export default Product
