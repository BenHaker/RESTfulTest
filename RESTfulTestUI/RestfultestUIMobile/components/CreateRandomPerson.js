import React from 'react';
import { View, Text, Button, TextInput  } from 'react-native'
import { connect } from 'react-redux';
import { createRandomPersonAction, createRandomPersonErrorAction } from '../actions/personActions'

export function CreateRandomPerson(props) {
    let textInput = null;

    return (
        <View>
            <Text>Create Person Batch</Text>
            <View>
                <TextInput placeholder="Insert Number of Random Persons to Create" keyboardType="numeric" ref={input => { textInput = input; }}/>
                <Button onPress={ () => { props.createRandomPerson(textInput) }} title="Create Random Persons"/>
            </View>
            { props.loading && <Text>Loading, please wait</Text> }
            { props.error && <Text>{ props.error }</Text> }
            { props.message && <Text>{ props.message }</Text> }
        </View>
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