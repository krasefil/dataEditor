import React from 'react';
import style from './Element.module.css';

const Element = (props) => {
    console.log(props);
    return (
        <div className={style.item}>
            <div className={style.item__list}>
                <span className={style.item__list__name}>id</span>
                <span>{props.id}</span>
            </div>
            <div className={style.item__list}>
                <span className={style.item__list__name}>Full name:</span>
                <span>{props.name}</span>
            </div>
            <div className={style.item__list}>
                <span className={style.item__list__name}>Email:</span>
                <span>{props.email}</span>
            </div>
            <div className={style.item__list}>
                <span className={style.item__list__name}>Access to external drive: 0 or 1</span>
                <span>{props.config_bool}</span>
            </div>
            <div className={style.item__list}>
                <span className={style.item__list__name}>Timer: 100 - 1000</span>
                <span>{props.timer_integer}</span>
            </div>
            <div className={style.item__list}>
                <span className={style.item__list__name}>Flags: 0 or 1</span>
                <span>{props.flags}</span>
            </div>
            <div className={style.item__list}>
                <span className={style.item__list__name}>Date activate:</span>
                <span>{props.dateactivate}</span>
            </div>
            <div className={style.item__list}>
                <span className={style.item__list__name}>Date update:</span>
                <span>{props.dateupdate}</span>
            </div>

         
        </div>
    )
}

export default Element;