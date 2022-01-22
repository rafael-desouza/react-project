import React from 'react'
import { render, screen } from '@testing-library/react'

import Footer from '..'

describe('Footer', () => {
  beforeEach(() => render(<Footer />))

  test('deve renderizar a área de redes sociais e verificar a classe social-medias', () => {
    const socialMedia = screen.getByTestId('social-medias')

    expect(socialMedia).toHaveClass('social-medias')
  })

  test('deve renderizar a área informações da empresa e verificar a classe company-data', () => {
    const companyData = screen.getByTestId('company-data')

    expect(companyData).toHaveClass('company-data')
  })
})
