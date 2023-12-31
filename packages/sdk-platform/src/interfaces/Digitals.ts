import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface DigitalAttr {
  url: string
  content_type: string
  filename: string
  byte_size: number
}

export interface DigitalData extends JsonApiDocument {
  type: string
  id: string
  attributes: DigitalAttr
  relationships: IRelationships
}

export interface IDigital extends JsonApiSingleResponse {
  data: DigitalData
}

export interface IDigitals extends JsonApiListResponse {
  data: DigitalData[]
}

export interface IDigitalResult extends ResultResponse<IDigital> {}

export interface IDigitalsResult extends ResultResponse<IDigitals> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>
