import React from 'react';
import dataUsers from '../data/kladr.json';
import Element from './Element/Element';
import style from './Editor.module.css';
import InputElement from './Element/InputElement/ImputElement';

const Editor = () => {
    //{dataUsers.users.map(user => <div>{user.id}</div>)}
    const UserElement = dataUsers.users.map(user =>
        <Element {...user} key={user.id} />
    );
    const UserElementInput = dataUsers.users.map(user =>
        <InputElement  {...user} key={user.id} />
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