import { Category } from "../categories/category.interface";
import { Product } from "./product.interface";

export interface AddProduct extends Omit<Product, 'id' | 'category'> {
    category: Pick<Category, 'id'>;
}