import React, { Component } from 'react';
import { View, Text, Button, StyleSheet  } from 'react-native'
import { NativeRouter, Link, Route } from 'react-router-native';
import SearchPerson from './components/SearchPerson';
import CreateRandomPerson from './components/CreateRandomPerson';
import CreatePerson from './components/CreatePerson'
import UpdatePerson from './components/UpdatePerson'

const styles = StyleSheet.create({ 
    container: { 
        flex: 1 
    },
    title: {
        alignItems: 'center', 
    },
    nav: { 
        justifyContent: 'space-around', 
        flexDirection: 'row' 
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
})

export default class RoutingManager extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
        <NativeRouter>
            <View style={ styles.container }>
                <View>
                    <View style={ styles.title }>
                        <Text>Person App</Text>
                    </View>
                    <View style={ styles.nav }>
                        <Link to="/search" style={ styles.navItem } underlayColor='#f0f4f7'><Text>Search</Text></Link>
                        <Link to="/create" style={ styles.navItem } underlayColor='#f0f4f7'><Text>Create</Text></Link>
                        <Link to="/createRandon" style={ styles.navItem } underlayColor='#f0f4f7'><Text>Create Batch</Text></Link>
                    </View>
                </View>
                <Route path="/search" component={ SearchPerson } />
                <Route path="/create" component={ CreatePerson } />
                <Route path="/createRandon" component={ CreateRandomPerson } />
                <Route path="/update" component={ UpdatePerson } />
            </View>
        </NativeRouter>
    );
  }
}