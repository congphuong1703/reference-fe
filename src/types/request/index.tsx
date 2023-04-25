import { Method } from 'axios'

export type ApiReqType = {
  path: string
  method: Method
  params?: any
  body?: any
  headers?: any
  responseType?: ResponseType
}

export type ApiSuccessType<D> = {
  status: 'success'
  result: ApiResultType<D>
}

export type ApiSuccessListType<D> = {
  status: 'success'
  result: ApiResultListType<D>
}
type ApiResultType<D> = StandardApiResult & {
  data: D
}

type ApiResultListType<D> = StandardApiResult & {
  data: D
}

type ErrorType = {
  code: string
  message: string
}
type StandardApiResult = {
  currentPage?: number
  totalPages?: number
  perPage?: number
  totalEntries?: number
}
export type ApiFailureType = {
  status: 'failed'
  errors: ErrorType[] | ErrorType
}

export type ApiResType<D> = ApiShowResType<D> // | ApiListResType<D>;
export type ApiShowResType<D> = ApiSuccessType<D> | ApiFailureType
