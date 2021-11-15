import Product from '@/types/Product'

const getProducts = (): Promise<Product[]> => {

    const products = [
        {
            name: "Porsche",
            vatRate: 0,
            buyPrice: 1_000_000,
            sellPrice: 1_500_000,
            id: 1,
        },
        {
            name: "Infiniti",
            vatRate: 0,
            buyPrice: 800_000,
            sellPrice: 1_000_000,
            id: 2,
        },
        {
            name: "Mazda",
            vatRate: 0,
            buyPrice: 300_000,
            sellPrice: 400_000,
            id: 3,
        },
        {
            name: "Lexus",
            vatRate: 0,
            buyPrice: 700_000,
            sellPrice: 900_000,
            id: 4,
        },
        {
            name: "Mercedes",
            vatRate: 0,
            buyPrice: 900_000,
            sellPrice: 1_100_000,
            id: 5,
        },
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000);
        () => reject(new Error('Network Error'))
    })
}

export default getProducts;
