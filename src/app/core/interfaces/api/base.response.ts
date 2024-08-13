import { HttpStatusCode } from "@angular/common/http";
import { ServerErrorResponse } from "./server-error.response";

export interface BaseResponse<T> {
    status: HttpStatusCode;
    data: T;
    error?: ServerErrorResponse;
}