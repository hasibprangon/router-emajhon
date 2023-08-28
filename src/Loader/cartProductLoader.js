import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async() => {
const loadedProducts = await fetch('products.json');
const products = await loadedProducts.json();
//geting cart from localStorage
const storeddCart = getShoppingCart();
// console.log(savedCart);
// console.log(products);

//added product alada cart a rakhar jonno
const savedCart =[];

//finding id from localStorage
for(const id in storeddCart){
    const addedProduct = products.find(pd => pd.id === id);

    //if we can find addedProduct then we will set quantity
    if(addedProduct){
        const quantity = storeddCart[id];
        addedProduct.quantity = quantity;

        //here we add product in shavedCart
        savedCart.push(addedProduct);
    }
}


return savedCart;
}

export default cartProductsLoader;