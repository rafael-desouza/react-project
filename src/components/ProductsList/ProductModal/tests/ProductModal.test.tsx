import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import ProductModal from '..'
import mockedItem from 'tests/mockedItemBuilder'

const handleClose = jest.fn()

describe('Product', () => {
  beforeEach(() => {
    render(<ProductModal onClose={handleClose} item={mockedItem} />)
  })

  test('deve conter uma imagem com a classe img', () => {
    const img = screen.getByTestId('img-modal')

    expect(img).toHaveClass('img')
  })

  test('deve conter um botão com a classe close', () => {
    const closeBtn = screen.getByTestId('close-modal')

    expect(closeBtn).toHaveClass('close-modal')
  })

  test('deve fechar o modal ao clicar no botão close', () => {
    const closeBtn = screen.getByTestId('close-modal')

    fireEvent.click(closeBtn)

    expect(handleClose).toBeCalledTimes(1)
  })
})
