import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import Container from './styles'

/**
 * Global spin loading
 * @returns JSX.element
 */
const Loading = () => {
  return (
    <Container>
      <AiOutlineLoading3Quarters className="spin-loading" />
    </Container>
  )
}

export default Loading
