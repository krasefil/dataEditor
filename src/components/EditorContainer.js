import React from 'react';
import Editor from './Editor';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.EditorReduser.users
    }
}

let mapDispatchToProps = () => {
    return {
        //dataLoading: 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);