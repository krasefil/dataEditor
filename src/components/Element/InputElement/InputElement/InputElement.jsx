import React from 'react';
import style from './BlockedElement.module.css';

const InputElement = (props) => {
    return (
        <div className={style.item__list}>
            <span className={style.item__list__name}>{props.tableTopName}</span>
            <span>{props.attribute}</span>
        </div>
    )
}

export default InputElement;