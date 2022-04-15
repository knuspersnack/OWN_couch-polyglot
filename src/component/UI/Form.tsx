import React, { FC } from 'react';
import style from '../../style/ui-components/Form.module.scss';

type Props = {}

const Form: FC<Props> = ({ children }) => {
  return (
    <div className={style.form}>{children}</div>
  )
}

export default Form