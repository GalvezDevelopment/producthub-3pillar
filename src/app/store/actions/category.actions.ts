import { AddCategory } from "../../core/interfaces/categories/add-category.interface";
import { UpdateCategory } from "../../core/interfaces/categories/update-category.interface";

export class AddCategoryAction {
    static type = '[Category] Add';
    constructor(public category: AddCategory) {}
}

export class GetCategoryAction {
    static type = '[Category] Get';
    constructor(public id: string) {}
}

export class GetAllCategoriesAction {
    static type = '[Category] Get all';
    constructor() {}
}

export class UpdateCategoryAction {
    static type = '[Category] Update';
    constructor(public category: UpdateCategory) {}
}

export class DeleteCategoryAction {
    static type = '[Category] Delete';
    constructor(public categoryId: string) {}
}