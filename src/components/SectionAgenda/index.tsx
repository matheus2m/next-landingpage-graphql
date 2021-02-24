import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { SectionAgendaProps } from 'types/api'

const SectionAgenda = (props: SectionAgendaProps) => (
  <Container id="agenda">
    <Heading reverseColor>{props.title}</Heading>
    <S.Text dangerouslySetInnerHTML={{ __html: props.description }} />
  </Container>
)

export default SectionAgenda
