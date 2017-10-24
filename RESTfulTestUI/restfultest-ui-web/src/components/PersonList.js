import React from 'react';
import { connect } from 'react-redux';
import Person from './Person';

export function PersonList(props) {
    if(props.persons.length === 0)
        return null;
    return (
        <div>
            <table className="table table-hover">
                <tbody>
                    { props.persons.map((person, key) => <Person { ...person } index={ key } key={ key }/>) }
                </tbody>
            </table>
        </div>)
}

function mapState(state) {
    return state;
}

export default connect(mapState)(PersonList);