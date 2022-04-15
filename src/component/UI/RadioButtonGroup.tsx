import React, { Children, FC } from 'react';
import style from '../../style/ui-components/RadioButtonGroup.module.scss';

type Props = {
  groupName: string;
  isHorizontal?: boolean;
};

const RadioButtonGroup: FC<Props> = ({ isHorizontal = true, groupName="group", children }) => {
    const arrayChildren = Children.toArray(children);

  return (
    <div className={style.radioButtonGroup}>
      {Children.map(arrayChildren, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { name: groupName });
        }
      })}
    </div>
  );
};

export default RadioButtonGroup;
