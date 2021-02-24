import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import * as S from './styles'
import { SectionAboutUsProps } from 'types/api'

const SectionAboutUs = (props: SectionAboutUsProps) => (
  <Container>
    <Heading reverseColor>{props.title}</Heading>

    <S.Content>
      {props.authors.map((author) => (
        <ProfileCard
          key={author.name}
          name={author.name}
          role={author.role}
          image={author.photo}
          socialLinks={author.socialLinks}
          description={author.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
