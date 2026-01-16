import axios from "axios"

export async function getProducts() {
    let result = [];
    try {
        const res = await axios.get("https://dummyjson.com/products");
        result = res.data.products || [];

    } catch (error) {
        //logger fn
        console.log("error occured : ", error);

    }

    return result;

}