import React from 'react';
import { View, Text  } from 'react-native'
import { connect } from 'react-redux';
import PersonDetails from './PersonDetails';
import { updatePersonAction, updatePersonErrorAction, selectPersonClearAction } from '../actions/personActions'

export function UpdatePerson(props) {
    let person = props.persons[props.current];

    return (
        person ?  
        <View>
            <Text>Update Person</Text>
            <PersonDetails firstName={ person.firstName } lastName={ person.lastName } onClick={ props.onClick } buttonText="Update" loading={ props.loading } 
                error={ props.error } message={ props.message } personId={ person._links.self.href } index={ props.current } onCancel={ props.onCancel }/>
        </View>
        : null
        )
}

function mapState(state) {
    return state;
}

function mapDispatch(dispatch) {
    return {
        onClick: (firstName, lastName, id, key, history) => { 
            if((firstName == null || firstName === "") && ((lastName == null || lastName === "")))
            {
                dispatch(updatePersonErrorAction("Either First Name or Last Name Must Have a Value"));;
                return;
            }
            dispatch(updatePersonAction(id, { firstName: firstName, lastName: lastName }, key));
            dispatch(selectPersonClearAction());
            history.push("/search");
        },
        onCancel: (history) => {
            dispatch(selectPersonClearAction());
            history.push("/search");
        }
    }
}

export default connect(mapState, mapDispatch)(UpdatePerson);