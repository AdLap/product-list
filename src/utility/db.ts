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
            picture: 'https://firebasestorage.googleapis.com/v0/b/adlap-9b9e8.appspot.com/o/porshe.jpg?alt=media&token=299c9509-e72e-4fc1-bc41-0a17ee4e58fb',
            id: 1,
        },
        {
            name: "Infiniti",
            checked: false,
            vatRate: 0,
            buyPrice: 800_000,
            sellPrice: 1_000_000,
            tradeMargin: 0,
            picture: 'https://firebasestorage.googleapis.com/v0/b/adlap-9b9e8.appspot.com/o/ininiti.jpg?alt=media&token=52a9b0b6-e4d9-43de-b1aa-af50657114f5',
            id: 2,
        },
        {
            name: "Mazda",
            checked: false,
            vatRate: 0,
            buyPrice: 300_000,
            sellPrice: 400_000,
            tradeMargin: 0,
            picture: 'https://firebasestorage.googleapis.com/v0/b/adlap-9b9e8.appspot.com/o/mazda.jpg?alt=media&token=ffc0edde-7b1a-4dfd-8f83-7bbc7cf9eef7',
            id: 3,
        },
        {
            name: "Lexus",
            checked: false,
            vatRate: 0,
            buyPrice: 700_000,
            sellPrice: 900_000,
            tradeMargin: 0,
            picture: 'https://firebasestorage.googleapis.com/v0/b/adlap-9b9e8.appspot.com/o/lexus.jpg?alt=media&token=600545df-e301-4adb-b0e0-237ede6733bf',
            id: 4,
        },
        {
            name: "Mercedes",
            checked: false,
            vatRate: 0,
            buyPrice: 900_000,
            sellPrice: 1_100_000,
            tradeMargin: 0,
            picture: 'https://firebasestorage.googleapis.com/v0/b/adlap-9b9e8.appspot.com/o/mercedes.jpg?alt=media&token=8003b800-a68e-405b-98f2-c4f6fc2d5e3b',
            id: 5,
        },
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, Math.random() * 1000);
        setTimeout(() => {
            reject(new Error(`Network Error:\nnic nie wczytano\nOdśwież stronę`))
        }, Math.random() * (1001 - 750) + 750);
    })
};

export default fetchProducts;
