import { GetProduct, Product } from "../products";

export interface ProductStateModel {
    products: GetProduct[];
    isLoading: boolean;
    selectedProduct: Product | null;
}