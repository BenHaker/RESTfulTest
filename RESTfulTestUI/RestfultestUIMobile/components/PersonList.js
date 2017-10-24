import React from 'react';
import { ScrollView, StyleSheet  } from 'react-native'
import { connect } from 'react-redux';
import Person from './Person';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  })

export function PersonList(props) {
    if(props.persons.length === 0)
        return null;
    return (
        <ScrollView style={ styles.container }>
            { props.persons.map((person, key) => <Person { ...person } index={ key } key={ key }/>) }
        </ScrollView>)
}

function mapState(state) {
    return state;
}

export default connect(mapState)(PersonList);