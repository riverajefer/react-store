import axios from "axios";
import {
    setProductsList
} from "../store/slices/products";

const API = 'https://dummyjson.com/products'

export const fetchAllProducts = () => (dispatch) => {
    axios.get(API).then((resp) => {
        console.log("🚀 ~ file: api-product.js ~ line 11 ~ axios.get ~ resp.data.products", resp.data.products)
        dispatch(setProductsList(resp.data.products))
    }).catch((error) => console.log(error));
}