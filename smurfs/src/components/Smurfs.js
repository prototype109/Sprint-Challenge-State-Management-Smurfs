import React, { useEffect } from 'react';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';
import Smurf from './Smurf';

const Smurfs = props => {

    useEffect(() => {
        props.getSmurfs();
    }, [props.getSmurfs]);

    return(
        props.postErr ? <h1>Couldn't Add Smurf</h1> :
        props.getErr ? <h1>Couldn't Retrieve Smurfs</h1> :
        props.fetching ? <h1>Fetching Smurfs</h1> :
        <div>
            {props.list.map(smurf => {
                console.log('SMURF: ', smurf);
                return <Smurf key={smurf.id} smurf={smurf} />
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        list: state.smurfList,
        getErr: state.errorGet,
        postErr: state.errorPost,
        fetching: state.isFetching
    }
}

export default connect(mapStateToProps, {getSmurfs})(Smurfs);