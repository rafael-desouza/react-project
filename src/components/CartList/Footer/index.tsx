import React from 'react'

import Container from './styles'

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import Logo from 'components/common/Logo'

const Footer = () => {
  return (
    <Container>
      <div className="logo">
        <Logo />
      </div>
      <div className="social-medias" data-testid="social-medias">
        <FaFacebook className="ico" />
        <FaInstagram className="ico" />
        <FaTwitter className="ico" />
      </div>
      <div className="company-data" data-testid="company-data">
        livenshop s.a / CNPJ: 00.000.000/0001-00 / Inscrição Estadual:
        00.000.00-0 / Endereço: Rua Exemplo de Rua, 0000, Um estado, US -
        00000-00
      </div>
    </Container>
  )
}

export default Footer
