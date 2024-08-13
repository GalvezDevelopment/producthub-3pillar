import { Category } from "../categories/category.interface";

export interface CategoryStateModel {
    categories: Category[];
    isLoading: boolean;
    categorySelected: Category | null;
}