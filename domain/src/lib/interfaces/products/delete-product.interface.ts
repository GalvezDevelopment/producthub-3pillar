import { Product } from "./product.interface";

export interface DeleteProduct extends Pick<Product, 'id'> {}