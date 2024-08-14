import { Category } from "../categories";

export interface CategoryStateModel {
    categories: Category[];
    isLoading: boolean;
    categorySelected: Category | null;
}