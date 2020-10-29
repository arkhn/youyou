import { IResourceList } from '@ahryman40k/ts-fhir-types/lib/R4'
import { FHIR_API_Response, TypedBundle } from 'types'
import { AxiosResponse } from 'axios'

export function getApiResponseResources<T extends IResourceList>(
  response: AxiosResponse<FHIR_API_Response<T>>
): TypedBundle<T> | T | null {
  if (!response || !(response && response.data) || response.data.resourceType === 'OperationOutcome') return null

  return response.data ? (
    response.data
  ) : null
}
