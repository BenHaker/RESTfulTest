import React from 'react';
import { View, Text  } from 'react-native'
import { connect } from 'react-redux';
import PersonDetails from './PersonDetails';
import { createPersonAction, createPersonErrorAction } from '../actions/personActions'

export function CreatePerson(props) {
    return (
        <View>
            <Text>Create Person</Text>
            <PersonDetails {...props} buttonText="Create A New Person"/>
        </View>
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