import React from 'react';
import { connect } from 'react-redux';
import PersonDetails from './PersonDetails';
import { createPersonAction, createPersonErrorAction } from '../actions/personActions'

export function CreatePerson(props) {
    return (
        <div>
            <h3>Create Person</h3>
            <PersonDetails {...props} buttonText="Create A New Person"/>
        </div>
        )
}

function mapState(state) {
    return state;
}

function mapDispatch(dispatch) {
    return {
        onClick: (firstName, lastName) => { 
            if(firstName == null || firstName === "")
            {
                dispatch(createPersonErrorAction("Please Insert a Valid First Name"));;
                return;
            }
            if(lastName == null || lastName === "")
            {
                dispatch(createPersonErrorAction("Please Insert a Valid Last Name"));;
                return;
            }
            dispatch(createPersonAction({ firstName: firstName, lastName: lastName }))
        },
    }
}

export default connect(mapState, mapDispatch)(CreatePerson);