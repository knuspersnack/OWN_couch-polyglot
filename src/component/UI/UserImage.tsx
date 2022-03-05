import React, { FC } from 'react'
import style from '../../style/ui-components/UserImage.module.scss';


type Props = {
    imageLabel: string;
}

const UserImage:FC<Props> = ({imageLabel, children}) => {
  return (
    <figure className={style.userImageShape}>
            {children}
            <figcaption className={style.caption}>{imageLabel}</figcaption>
          </figure>
  )
}

export default UserImage