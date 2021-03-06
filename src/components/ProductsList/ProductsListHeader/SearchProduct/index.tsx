import React, { useRef } from 'react'

import Container from './styles'
import { FaSearch } from 'react-icons/fa'

type Props = {
  onSearch: (nameToSearch: string) => void
}

/**
 *Search Input to look for products
 * @param param onSearch - function to be executed when input search to be triggered
 * @returns JSX.element
 */
const SearchProduct = ({ onSearch }: Props) => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>

  const search = () => {
    onSearch(inputRef.current.value)
  }

  const sendSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    search()
  }

  return (
    <Container>
      <form onSubmit={sendSearch}>
        <input
          type="text"
          className="input-search"
          placeholder="busque aqui seu produto"
          data-testid="input-search"
          ref={inputRef}
        />
        <FaSearch className="ico" onClick={search} data-testid="ico" />
      </form>
    </Container>
  )
}

export default SearchProduct
