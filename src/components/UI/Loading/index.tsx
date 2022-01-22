import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import Container from './styles'

const Loading = () => {
  return (
    <Container>
      <AiOutlineLoading3Quarters className="spin-loading" />
    </Container>
  )
}

export default Loading
