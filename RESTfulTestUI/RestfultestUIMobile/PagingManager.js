import React, { Component } from 'react'
import { View, ViewPagerAndroid, StyleSheet, Button  } from 'react-native'
import SearchPerson from './components/SearchPerson'
import CreatePerson from './components/CreatePerson'
import CreateRandomPerson from './components/CreateRandomPerson'

const styles = StyleSheet.create({ 
    container: { 
        flex: 1 
    },
    buttons: { 
        flex: 0, 
        justifyContent: 'space-around', 
        flexDirection: 'row' 
    },
})

export default class PagingManager extends Component {
    constructor(props) {
        super(props);
        this.onPageSelected = this.onPageSelected.bind(this);
        this.PageSearch = this.PageSearch.bind(this);
        this.PageCreate = this.PageCreate.bind(this);
        this.PageCreateBatch = this.PageCreateBatch.bind(this);
        this.currentPage = 0;
        this.maxPage = 3;
    }

    onPageSelected = (e) => {
        this.currentPage = e.nativeEvent.position;
    }

    PageSearch = () => {
        this.setPage(0);
    }

    PageCreate = () => {
        this.setPage(1);
    }

    PageCreateBatch = () => {
        this.setPage(2);
    }

    setPage = (page) => {
        this.currentPage = page;
        this.viewPager.setPage(page);
    }

    render() {
        return (
            <View style={ styles.container }>
                <ViewPagerAndroid style={ styles.container } initialPage={ 0 } ref={ viewPager => { this.viewPager = viewPager; } } onPageSelected={ this.onPageSelected }>
                    <View>
                        <SearchPerson/>
                    </View>
                    <View>
                        <CreatePerson/>
                    </View>
                    <View>
                        <CreateRandomPerson/>
                    </View>
                </ViewPagerAndroid>
                <View style={ styles.buttons }>
                    <Button onPress={ () => this.PageSearch()} title="Search"/>
                    <Button onPress={ () => this.PageCreate()} title="Create"/>
                    <Button onPress={ () => this.PageCreateBatch()} title="Create Batch"/>
                </View>
            </View>
        );
  }
}