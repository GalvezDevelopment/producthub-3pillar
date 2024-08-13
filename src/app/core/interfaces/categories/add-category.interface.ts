import { Category } from "./category.interface";

export interface AddCategory extends Omit<Category, 'id'> {}