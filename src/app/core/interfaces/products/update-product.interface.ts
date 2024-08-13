import { Category } from "../categories/category.interface";
import { Product } from "./product.interface";

export interface UpdateProduct extends Omit<Product, 'category'> {
    category: Pick<Category, 'id'>;
}