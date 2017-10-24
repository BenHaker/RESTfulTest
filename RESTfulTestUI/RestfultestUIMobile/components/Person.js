import React from 'react';
import { View, Text, Button, StyleSheet  } from 'react-native'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import { deletePersonAction, deletePersonErrorAction, selectPersonAction, updatePersonErrorAction } from '../actions/personActions'

const styles = StyleSheet.create({
    item: {
      padding: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      borderBottomWidth: 1,
      borderBottomColor: 'whitesmoke',
    },
    text: {
        flex: 2
    },
    button: {
        flex: 1
    }
  })

export function Person(props) {
    return (
        <View style={ styles.item }>
            <Text style={ styles.text }>{ props.lastName + ", " + props.firstName }</Text>
            <Button onPress={() => props.deletePerson(props._links.self.href, props.index)} title="Delete" style={ styles.button }/>
            <Button onPress={() => props.updatePerson(props.index, props.history)} title="Update" style={ styles.button }/>
        </View>)
}

function mapDispatch(dispatch) {
    return {
        deletePerson: (id, key) => { 
            if(id == null || id === "")
            {
                dispatch(deletePersonErrorAction("No Person ID was Provided"));;
                return;
            }
            if(key == null || key === "")
            {
                dispatch(deletePersonErrorAction("No Person Key was Provided"));;
                return;
            }
            dispatch(deletePersonAction(id, key))
        },
        updatePerson: (key, history) => { 
            if(key == null || key === "")
            {
                dispatch(updatePersonErrorAction("No Person Key was Provided"));;
                return;
            }
            dispatch(selectPersonAction(key));
            history.push("/update");
        },
    }
}

export default withRouter(connect(null, mapDispatch)(Person));