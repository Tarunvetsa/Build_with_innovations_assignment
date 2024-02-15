export const PRODUCTS = async () => {
    let products = [];

    await fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            if (data && data.products) {
                products = data.products;
            } else {
                console.error('Invalid response format:', data);
            }
        })
        .catch(error => console.error('Error fetching products:', error));

    return products;
}
