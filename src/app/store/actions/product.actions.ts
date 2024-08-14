import { AddProduct, UpdateProduct } from "@producthub/domain";

export class AddProductAction {
    static type = '[Product] Add';

    constructor(public product: AddProduct) {}
}

export class GetProductAction {
    static type = '[Product] Get';

    constructor(public productId: string) {}
}

export class GetAllProductsAction {
    static type = '[Product] Get all';

    constructor() {}
}

export class UpdateProductAction {
    static type = '[Product] Update';

    constructor(public product: UpdateProduct) {}
}

export class DeleteProductAction {
    static type = '[Product] Delete';

    constructor(public productId: string) {}
}