import { Category } from "../categories";
import { Product } from "./product.interface";

export interface UpdateProduct extends Omit<Product, 'category'> {
    category: Pick<Category, 'id'>;
}