import React, { Component } from 'react'
import { Text  } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { personReducer } from './reducers/personReducer';
import { rootEpic } from './epics/personEpics'
import RoutingManager from './RoutingManager'

const store = createStore(personReducer, applyMiddleware(createEpicMiddleware(rootEpic)));

export default class App extends Component {
  
  render() {
    return (
      <Provider store={ store }>
        <RoutingManager/>
      </Provider>
    )
  }
}