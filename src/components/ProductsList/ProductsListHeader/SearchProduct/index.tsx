import React, { FormEventHandler, useRef } from 'react'
import Container from './styles'
import { FaSearch } from 'react-icons/fa'

type Props = {
  onSearch: (nameToSearch: string) => void
}

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
          ref={inputRef}
        />
        <FaSearch className="ico" onClick={search} />
      </form>
    </Container>
  )
}

export default SearchProduct
