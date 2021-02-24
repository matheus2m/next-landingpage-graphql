import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { PricingBoxProps } from 'types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = (props: PricingBoxProps) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>R${props.totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{props.numberInstallments}x de</span> R${props.priceInstallment}
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList dangerouslySetInnerHTML={{ __html: props.benefits }} />

    <Button href={props.button.url} onClick={onClick} withPrice>
      <p>{props.button.label}</p>
      <div>
        <S.ButtonFullPrice>R${props.totalPrice}</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>
          R${props.numberInstallments * props.priceInstallment}
        </S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
