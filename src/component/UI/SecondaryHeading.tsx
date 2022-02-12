import React from 'react'
import style from '../../style/ui-components/SecondaryHeading.module.scss';

type Props = {text: string}

function SecondaryHeading({text}: Props) {
  return (
    <h2 className={style.headingSecondary}>{text}</h2>
  )
}

export default SecondaryHeading