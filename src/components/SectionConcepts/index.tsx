import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import * as S from './styles'
import { SectionConceptsProps } from 'types/api'

const SectionConcepts = (props: SectionConceptsProps) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{props.title}</Heading>
      <S.List>
        {props.concepts.map((concept) => (
          <S.Item key={concept.title}>{concept.title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
