import { AxiosRequestConfig, AxiosResponse } from 'axios'
import MainHeader from 'components/MainHeader'
import useSendRequest from 'hooks/use-send-request'
import React, { useCallback, useEffect, useState } from 'react'

import Item from 'types/item'
import Product from './Product'
import Container from './styles'

const ProductsList = () => {
  const [items, setItems] = useState<Item[]>([])
  const { sendRequest: getItemsList } = useSendRequest()

  const createList = (itemsListObject: AxiosResponse) => {
    const itemsList = itemsListObject.data as Item[]
    const newItemsList: Item[] = []

    for (const items of itemsList) {
      const newItem: Item = {
        id: items.id,
        createdAt: items.createdAt,
        name: items.name,
        price: items.price,
        stock: items.stock,
        image: items.image.replace('com', 'com.br'),
        amount: 1,
      }

      newItemsList.push(newItem)
    }

    setItems(newItemsList)
  }

  const fetchItemsList = useCallback(() => {
    const configs: AxiosRequestConfig = {
      method: 'GET',
      url: 'https://5d6da1df777f670014036125.mockapi.io/api/v1/product',
    }

    getItemsList(configs, createList)
  }, [])

  useEffect(() => {
    fetchItemsList()
  }, [fetchItemsList])

  return (
    <>
      <MainHeader />
      <Container>
        {items.map(product => (
          <Product key={product.id} item={product} />
        ))}
      </Container>
    </>
  )
}

export default ProductsList
