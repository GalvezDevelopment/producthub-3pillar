import { Category } from "../categories/category.interface";

export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    category: Category;
}