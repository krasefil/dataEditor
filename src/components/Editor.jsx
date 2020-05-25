import React from 'react';
import dataUsers from '../data/kladr.json';
import Element from './Element/Element';
import ElementInput from './ElementInput/ElementInput';
import style from './Editor.module.css';

const Editor = () => {
    //{dataUsers.users.map(user => <div>{user.id}</div>)}
    const UserElement = dataUsers.users.map(user =>
        <Element id={user.id} name={user.name} key={user.id} email={user.email} config_bool={user.config_bool}
            timer_integer={user.timer_integer} flags={user.flags} dateactivate={user.dateactivate}
            dateupdate={user.dateupdate} />
    );
    const UserElementInput = dataUsers.users.map(user =>
        <ElementInput  id = { user.id } name = { user.name } key = { user.id } email = { user.email } config_bool = { user.config_bool }
            timer_integer = { user.timer_integer } flags = { user.flags } dateactivate = { user.dateactivate }
            dateupdate = { user.dateupdate } />
    );

    let newUserElement = React.createRef();


    return (
        <div>
            <div className={style.header}>
                <div>
                    {UserElement}
                </div>
                <div>
                    <button className={style.button}>Edit users</button>
                </div>
            </div>
            {UserElementInput}
        </div>

    )
}
export default Editor;