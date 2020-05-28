import React from 'react';
import style from './Element.module.css';
import BlockedElement from './BlockedElement/BlockedElement';
const Element = (props) => {

    return (
        <div className={style.item}>
            <BlockedElement tableTopName={'id:'} attribute={props.id} />
            <BlockedElement tableTopName={'Full name:'} attribute={props.name} />
            <BlockedElement tableTopName={'Email:'} attribute={props.email} />
            <BlockedElement tableTopName={'Access to external drive: 0 or 1'} attribute={props.config_bool} />
            <BlockedElement tableTopName={'Timer: 100 - 1000'} attribute={props.timer_integer} />
            <BlockedElement tableTopName={'Flags: 0 or 1'} attribute={props.flags} />
            <BlockedElement tableTopName={'Date activate:'} attribute={props.dateactivate} />
            <BlockedElement tableTopName={'Date update:'} attribute={props.dateupdate} />
        </div>
    )
}

export default Element;