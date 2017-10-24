import React from 'react';
import { View, Text, TextInput, StyleSheet  } from 'react-native'
import { connect } from 'react-redux';
import PersonList from './PersonList';
import { searchPersonAction } from '../actions/personActions'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
      },
  })

export function SearchPerson(props) {
    return (
        <View style={ styles.container }>
            <View>
                <Text>Search Person</Text>
                <TextInput placeholder="Insert Search Term" onChange={ props.searchPerson }/>
                { props.loading && <Text>Loading, please wait</Text> }
                { props.error && <Text>{ props.error }</Text> }
            </View>
            <PersonList/>
        </View>
    )
}

function mapState(state) {
    return state;
}

function mapDispatch(dispatch) {
    return {
        searchPerson: (e) => dispatch(searchPersonAction(e.nativeEvent.text)),
    }
}

export default connect(mapState, mapDispatch)(SearchPerson);