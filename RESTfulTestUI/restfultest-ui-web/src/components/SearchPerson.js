import React from 'react';
import { connect } from 'react-redux';
import PersonList from './PersonList';
import { searchPersonAction } from '../actions/personActions'

export function SearchPerson(props) {
    return (
        <div>
            <h3>Search Person</h3>
            <input className="form-control" placeholder="Insert Search Term" type="text" onChange={ props.searchPerson }/>
            { props.loading && <div className="alert alert-info">Loading, please wait</div> }
            { props.error && <div className="alert alert-danger">{ props.error }</div> }
            <PersonList/>
        </div>
    )
}

function mapState(state) {
    return state;
}

function mapDispatch(dispatch) {
    return {
        searchPerson: (e) => dispatch(searchPersonAction(e.target.value)),
    }
}

export default connect(mapState, mapDispatch)(SearchPerson);