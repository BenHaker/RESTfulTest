import React from 'react';
import { connect } from 'react-redux';
import { createRandomPersonAction, createRandomPersonErrorAction } from '../actions/personActions'

export function CreateRandomPerson(props) {
    let textInput = null;

    return (
        <div>
            <h3>Create Person Batch</h3>
            <div className="input-group">
                <input className="form-control" placeholder="Insert Number of Random Persons to Create" type="number" ref={input => { textInput = input; }}/>
                <div className="input-group-btn">
                    <button className="btn btn-primary" onClick={ () => { props.createRandomPerson(textInput) }}>Create Random Persons</button>
                </div>
            </div>
            { props.loading && <div className="alert alert-info">Loading, please wait</div> }
            { props.error && <div className="alert alert-danger">{ props.error }</div> }
            { props.message && <div className="alert alert-success">{ props.message }</div> }
        </div>
        )
}

function mapState(state) {
    return state;
}

function mapDispatch(dispatch) {
    return {
        createRandomPerson: (textInput) => { 
            if(textInput.value == null || textInput.value === "")
            {
                dispatch(createRandomPersonErrorAction("Please Insert a Valid Value"));;
                return;
            }
            dispatch(createRandomPersonAction(textInput.value))
        },
    }
}

export default connect(mapState, mapDispatch)(CreateRandomPerson);