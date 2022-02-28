import { AxiosResponse } from "axios";
import { request } from "utils/http/setup";

type HttpResponse = AxiosResponse & Response

type ApiResponse = <T extends any>(response: HttpResponse) => T

const WrapperAxiosResponse:ApiResponse = (response: HttpResponse) => response.data

export const get = (url: string, config?: any) => request.get(url, config).then((response: any) => WrapperAxiosResponse(response as HttpResponse))
export const put = (url: string, data?: any, config?: any) => request.put(url, data, config).then((response: any) => WrapperAxiosResponse(response as HttpResponse))