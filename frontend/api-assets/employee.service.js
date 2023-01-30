import { GET_ALL_PRODUCTS, httpCommon, MASS_DELETE, SAVE_PRODUCT } from "./index";

const getAllProducts = () => {
    return httpCommon.get(GET_ALL_PRODUCTS);
};

const massDelete = id => {
    return httpCommon.post(MASS_DELETE, { id });
};

const saveProduct = product => {
    return httpCommon.post(SAVE_PRODUCT, product);
};

export const productService = {
    getAllProducts,
    massDelete,
    saveProduct,
};
