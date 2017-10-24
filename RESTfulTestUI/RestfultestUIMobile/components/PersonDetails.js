import React from 'react';
import { View, TextInput, Button, Text  } from 'react-native'
import { withRouter } from 'react-router-native';

export function PersonDetails(props) {
    let firstName = null;
    let lastName = null;

    return (
        <View>
            <View>
                <TextInput placeholder="Insert First Name" ref={input => { firstName = input; }} value={ props.firstName }/>
                <TextInput placeholder="Insert Last Name" ref={input => { lastName = input; }} value={ props.lastName }/>
                <Button onPress={ () => { props.onClick(firstName.value, lastName.value, props.personId, props.index, props.history) }} title={ props.buttonText }/>
                { props.onCancel && <Button onPress={ () => { props.onCancel(props.history) }} title="Cancel"/> }
            </View>
            { props.loading && <Text>Loading, please wait</Text> }
            { props.error && <Text>{ props.error }</Text> }
            { props.message && <Text>{ props.message }</Text> }
        </View>
        )
}

export default withRouter(PersonDetails);