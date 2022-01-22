import React, { useCallback, useEffect, useState } from 'react'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { FaSadTear } from 'react-icons/fa'

import ProductsListHeader from 'components/ProductsList/ProductsListHeader'
import useSendRequest from 'hooks/use-send-request'
import Footer from 'components/CartList/Footer'
import Item from 'types/item'
import Product from './Product'
import Container from './styles'
import Loading from 'components/UI/Loading'

/**
 * Display products list
 * @returns JSX.element
 */
const ProductsList = () => {
  const [items, setItems] = useState<Item[]>([])
  const [search, setSearch] = useState<string | null>(null)
  const { sendRequest: getItemsList, isLoading } = useSendRequest()

  /**
   * Define a value to search on products list
   * @param infoToSearch
   */
  const infoToSearch = (infoToSearch: string) => {
    setSearch(infoToSearch)
  }

  /**
   * Get data and converts into a JSX element
   * @param itemsListObject data to be displayed
   * @param search (optional) filter data acquired
   */
  const createList = (
    itemsListObject: AxiosResponse,
    search: string | null
  ) => {
    const itemsList = itemsListObject.data as Item[]

    const filteredList = search
      ? itemsList.filter(element =>
          element.name.toLowerCase().includes(search.toLocaleLowerCase())
        )
      : itemsList

    const newItemsList: Item[] = []

    for (const items of filteredList) {
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

  /**
   * Get products list
   */
  const fetchItemsList = useCallback((search: string | null) => {
    const configs: AxiosRequestConfig = {
      method: 'GET',
      url: 'https://5d6da1df777f670014036125.mockapi.io/api/v1/product',
    }

    getItemsList(configs, createList, search)
  }, [])

  useEffect(() => {
    fetchItemsList(search)
  }, [fetchItemsList, search])

  /**
   * empty list message
   */
  const emptyListProducts = () => {
    return (
      <div className="empty-list">
        <FaSadTear className="ico" />
        <p>
          Nenhum item encontrado para <span>{search}</span>
        </p>
        <p>E agora? Quem poderá me ajudar?</p>
        <ul>
          <li>Verifique a digitação</li>
          <li>Procure por termos genéricos na busca</li>
        </ul>
      </div>
    )
  }

  return (
    <Container>
      <ProductsListHeader onSearch={infoToSearch} />
      {isLoading && (
        <div className="loading">
          <Loading />
        </div>
      )}
      {!isLoading && items.length === 0 && emptyListProducts()}
      {items.length > 0 && (
        <div className="products-list">
          {items.map(product => (
            <Product key={product.id} item={product} />
          ))}
        </div>
      )}
      {!isLoading && <Footer />}
    </Container>
  )
}

export default ProductsList
