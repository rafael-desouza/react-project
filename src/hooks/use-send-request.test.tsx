import MockAdapter from 'axios-mock-adapter'
import { renderHook } from '@testing-library/react-hooks'
import useSendRequest from './use-send-request'
import axios, { AxiosResponse } from 'axios'
import mockedItem from 'tests/mockedItemBuilder'
import { act } from '@testing-library/react'
import Item from 'types/item'

describe('useSendRequest', () => {
  test('deve iniciar com os valores padrões do hook ', async () => {
    const mock = new MockAdapter(axios)
    const mockData = [mockedItem]

    const url = 'http://mock'
    mock.onGet(url).reply(200, mockData)

    const { result } = renderHook(useSendRequest)
    expect(result.current.isLoading).toBeFalsy()
    expect(result.current.error).toBeUndefined()
  })

  test('deve buscar os resultados do response disparado pelo sendRequest ', async () => {
    const mock = new MockAdapter(axios)
    const mockData = [mockedItem]
    let data: Item[] = []

    const url = 'http://mock'
    mock.onGet(url).reply(200, mockData)

    const mockedFunction = (response: AxiosResponse) => {
      data = response.data
    }

    const { result } = renderHook(useSendRequest)
    expect(result.current.isLoading).toBeFalsy()
    expect(result.current.error).toBeUndefined()

    await act(async () =>
      result.current.sendRequest({ url: url }, mockedFunction, null)
    )

    expect(JSON.stringify(data)).toEqual(JSON.stringify(mockData))
  })
})
