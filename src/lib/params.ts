import { IQueryParams } from '@/hooks/useQueryParams'

export const generateQueryParamsString = (params: IQueryParams[]) => {
  const formattedParams: string[] = []
  params.forEach((param) => {
    if (param.value) {
      if (Array.isArray(param.value)) {
        param.value.forEach((value) => {
          formattedParams.push(`${param.name}=${value}`)
        })
      } else {
        formattedParams.push(`${param.name}=${param.value}`)
      }
    }
  })
  return formattedParams.length > 0 ? `?${formattedParams.join('&')}` : ''
}
