import { Category } from "../categories";

export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    category: Category;
}