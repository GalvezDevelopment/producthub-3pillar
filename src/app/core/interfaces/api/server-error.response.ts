import { HttpStatusCode } from "@angular/common/http";

export interface ServerErrorResponse {
    message?: string;
    status: HttpStatusCode;
    stackTrace?: string;
}