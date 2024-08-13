import { GetProduct } from "../products/get-product.interface";
import { Product } from "../products/product.interface";

export interface ProductStateModel {
    products: GetProduct[];
    isLoading: boolean;
    selectedProduct: Product | null;
}