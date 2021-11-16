import Product from '@/types/types'

const fetchProducts = (): Promise<Product[]> => {

    const products = [
        {
            name: "Porsche",
            checked: false,
            vatRate: 0,
            buyPrice: 1_000_000,
            sellPrice: 1_500_000,
            tradeMargin: 0,
            id: 1,
        },
        {
            name: "Infiniti",
            checked: false,
            vatRate: 0,
            buyPrice: 800_000,
            sellPrice: 1_000_000,
            tradeMargin: 0,
            id: 2,
        },
        {
            name: "Mazda",
            checked: false,
            vatRate: 0,
            buyPrice: 300_000,
            sellPrice: 400_000,
            tradeMargin: 0,
            id: 3,
        },
        {
            name: "Lexus",
            checked: false,
            vatRate: 0,
            buyPrice: 700_000,
            sellPrice: 900_000,
            tradeMargin: 0,
            id: 4,
        },
        {
            name: "Mercedes",
            checked: false,
            vatRate: 0,
            buyPrice: 900_000,
            sellPrice: 1_100_000,
            tradeMargin: 0,
            id: 5,
        },
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        },1000);
        setTimeout(() => {
            reject(new Error('Network Error'))
        },1500);
    })
};



export default fetchProducts;
