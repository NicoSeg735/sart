/* global RequestCache */

export interface IOptions {
  cache?: RequestCache
  tags?: string[]
  body?: string
  method: 'POST' | 'GET' | 'PUT' | 'DELETE'
}

export interface FetchError {
  message: string
  status: number
}

export interface FetchResult<T> {
  data: T | null
  error?: FetchError
}

export const getDataByFetch = async <T>(
  url: string,
  options: IOptions
): Promise<FetchResult<T>> => {
  const { cache = 'force-cache', tags, method, body } = options
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT + url}`, {
      cache,
      next: {
        tags
      },
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      ...(body && { body: JSON.stringify({ body }) })
    })
    if (res.status !== 200) {
      const error = {
        message: `Error ${res.status}: ${res.statusText}`,
        status: res.status
      }
      return { data: null, error }
    }

    const json = await res.json()

    return { data: json, error: json?.error }
  } catch (error) {
    console.error('Error fetching data:', error)

    return { data: null, error: { message: 'Error de conexión', status: 500 } }
  }
}

export default getDataByFetch
