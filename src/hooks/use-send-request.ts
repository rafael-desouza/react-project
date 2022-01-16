import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { useState } from 'react'

const useSendRequest = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>()

  const sendRequest = async (
    configs: AxiosRequestConfig,
    applyData: (data: AxiosResponse) => void
  ) => {
    setIsLoading(true)

    try {
      const response = await axios(configs)
      setIsLoading(false)
      setError(null)

      applyData(response)
    } catch (error) {
      setIsLoading(false)
      setError((error as Error).message || 'Opps! Something went wrong')
    }
  }

  return { isLoading, error, sendRequest }
}

export default useSendRequest
