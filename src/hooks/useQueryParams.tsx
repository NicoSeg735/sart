'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export interface IQueryParams {
  name: string
  value?: string | string[]
}

export default function useQueryParams() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const actualParams = new URLSearchParams(searchParams)
  const actualPath = `${pathname}?${actualParams.toString()}`
  const { push } = router

  const setParams = ({
    name,
    value,
    newParams
  }: IQueryParams & { newParams: URLSearchParams }) => {
    newParams.delete(name)
    if (value) {
      Array.isArray(value)
        ? value.forEach((item) => newParams.append(name, item))
        : newParams.set(name, value)
    } else {
      newParams.delete(name)
    }
  }

  const generateURLParams = (queryParams: IQueryParams | IQueryParams[]) => {
    const newParams = new URLSearchParams(searchParams)
    if (Array.isArray(queryParams)) {
      queryParams.forEach((parameter) => {
        setParams({ ...parameter, newParams })
      })
    } else {
      setParams({ ...queryParams, newParams })
    }

    return `${pathname}?${newParams.toString()}`
  }

  const handleParamsChange = (
    queryParams: IQueryParams | IQueryParams[],
    method: 'push' | 'replace' | undefined = 'push'
  ) => {
    const newURL = generateURLParams(queryParams)

    if (method === 'replace') {
      router.replace(newURL, {
        scroll: false
      })
    } else router[method](newURL)
  }

  const switchOrderSort = (sortName: string) => {
    const sortArray = sortName.split(' ').map((item) => item.trim())
    return !sortArray.includes('desc') ? `${sortName} desc` : undefined
  }

  const handleSortParams = (sortName: string) => {
    const currentSort = searchParams.getAll('sort')
    const newParams = new URLSearchParams(searchParams)
    if (!currentSort) {
      setParams({ name: 'sort', value: sortName, newParams })
      setParams({ name: 'page', value: '1', newParams })
    } else {
      const index = currentSort.findIndex((item) => item.includes(sortName))

      if (index !== -1) {
        const updatedSort = switchOrderSort(currentSort[index] as string)
        if (updatedSort) {
          currentSort[index] = updatedSort
        } else {
          currentSort.splice(index, 1)
        }
      } else {
        currentSort.push(sortName)
      }

      if (currentSort.length > 0) {
        setParams({ name: 'sort', value: currentSort, newParams })
        setParams({ name: 'page', value: '1', newParams })
      } else {
        newParams.delete('sort')
      }
    }

    push(`${pathname}?${newParams.toString()}`)
  }

  return {
    searchParams,
    handleParamsChange,
    handleSortParams,
    actualPath,
    generateURLParams
  }
}
