import { HttpStatusCode } from "@angular/common/http";
import { BaseResponse } from "../core/interfaces/api/base.response";

export function buildResponse<T>(status: HttpStatusCode, data: T): BaseResponse<T> {
    return { status, data };
  }