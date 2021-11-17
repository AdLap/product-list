interface Product {
    readonly name: string;
    checked: boolean;
    vatRate: number;
    buyPrice: number;
    sellPrice: number;
    tradeMargin: number;
    picture: string;
    readonly id: number;
}

export default Product
