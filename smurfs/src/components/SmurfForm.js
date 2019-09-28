import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from '../actions';

const SmurfForm = props => {
    const [smurf, setSmurf] = useState({});

    const handleInputChange = e => {
        setSmurf({...smurf, [e.target.name]: e.target.value});
    }

    const submitSmurf = e => {
        e.preventDefault();
        props.postSmurfs(smurf);
        setSmurf({});
    }

    return(
        <form onSubmit={submitSmurf}>
           <input placeholder='Name' 
                  name='name' 
                  value={smurf.name} 
                  onChange={handleInputChange}/>
           <input placeholder='Age' 
                  name='age' 
                  value={smurf.age}
                  onChange={handleInputChange}/>
           <input placeholder='Height' 
                  name='height' 
                  value={smurf.height}
                  onChange={handleInputChange}/>
            <button type='submit'>Submit</button>
        </form>
    );
}

export default connect(null, {postSmurfs})(SmurfForm);