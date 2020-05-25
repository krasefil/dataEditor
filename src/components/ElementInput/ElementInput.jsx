import React from 'react';
import style from '../Element/Element.module.css';

const ElementInput = (props) => {
    console.log(props);
    return (
        <div className={style.item}>
            <div className={style.item__list}>
                <span className={style.item__list__name}>id</span>
                <input value={props.id} />
            </div>
            <div className={style.item__list}>
                <span className={style.item__list__name}>Full name:</span>
                <input value={props.name} />
            </div>
            <div className={style.item__list}>
                <span className={style.item__list__name}>Email:</span>
                <input value={props.email} />
            </div>
            <div className={style.item__list}>
                <span className={style.item__list__name}>Access to external drive: 0 or 1</span>
                <input value={props.config_bool} />
            </div>
            <div className={style.item__list}>
                <span className={style.item__list__name}>Timer: 100 - 1000</span>
                <input value={props.timer_integer} />
            </div>
            <div className={style.item__list}>
                <span className={style.item__list__name}>Flags: 0 or 1</span>
                <input value={props.flags} />
            </div>
            <div className={style.item__list}>
                <span className={style.item__list__name}>Date activate:</span>
                <input value={props.dateactivate} />
            </div>
            <div className={style.item__list}>
                <span className={style.item__list__name}>Date update:</span>
                <input value={props.dateupdate} />
            </div>

         
        </div>
    )
}

export default ElementInput;