import { Category } from "../categories";
import { Product } from "./product.interface";

export interface AddProduct extends Omit<Product, 'id' | 'category'> {
    category: Pick<Category, 'id'>;
}