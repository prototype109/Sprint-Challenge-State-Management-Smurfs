import React, { useEffect } from 'react';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';

const Smurfs = props => {

    useEffect(() => {
        props.getSmurfs();
    }, [props.getSmurfs]);

    return(
        <div>

        </div>
    )
}

const mapStateToProps = state => {
    return{
        list: state.smurfList
    }
}

export default connect(mapStateToProps, {getSmurfs})(Smurfs);